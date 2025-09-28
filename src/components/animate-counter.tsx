import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedNumber = () => {
  const FIRST_ARRAY = [0, 1, 2, 3, 4, 5];
  const SECOND_ARRAY = [0, 4, 8, 2, 6, 1, 5, 9, 0];
  const THIRD_ARRAY = [0, 3, 6, 9, 2, 5, 8, 1, 4, 7, 0];

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const firstRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);
  const thirdRef = useRef<HTMLDivElement | null>(null);

  const tl1 = useRef<gsap.core.Timeline | null>(null);
  const tl2 = useRef<gsap.core.Timeline | null>(null);
  const tl3 = useRef<gsap.core.Timeline | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  const build = () => {
    const col1 = firstRef.current;
    const col2 = secondRef.current;
    const col3 = thirdRef.current;
    const wrap = wrapRef.current;
    if (!col1 || !col2 || !col3 || !wrap) return;

    const sample =
      (col3.querySelector("span") as HTMLSpanElement) ||
      (col2.querySelector("span") as HTMLSpanElement) ||
      (col1.querySelector("span") as HTMLSpanElement);
    const digitH = sample ? sample.getBoundingClientRect().height : 42;

    gsap.set([col1, col2, col3], { y: 0 });

    tl1.current?.kill();
    tl2.current?.kill();
    tl3.current?.kill();
    stRef.current?.kill();

    const TOTAL = 20;
    const DELAY_ONES = 0.0;
    const DELAY_TENS = -4.0;
    const DELAY_HUND = -8.0;

    const stepsOnes = THIRD_ARRAY.length - 1;
    const stepsTens = SECOND_ARRAY.length - 1;
    const stepsHund = FIRST_ARRAY.length - 1;

    const durPerOnes = (TOTAL - DELAY_ONES) / stepsOnes;
    const durPerTens = (TOTAL - DELAY_TENS) / stepsTens;
    const durPerHund = (TOTAL - DELAY_HUND) / stepsHund;

    const t3 = gsap.timeline({
      paused: true,
      delay: DELAY_ONES,
      defaults: { ease: "power2.out" },
    });
    for (let i = 0; i < stepsOnes; i++) {
      t3.to(col3, { y: -digitH * (i + 1), duration: durPerOnes });
    }
    tl3.current = t3;

    const t2 = gsap.timeline({
      paused: true,
      delay: DELAY_TENS,
      defaults: { ease: "power2.out" },
    });
    for (let i = 0; i < stepsTens; i++) {
      t2.to(col2, { y: -digitH * (i + 1), duration: durPerTens });
    }
    tl2.current = t2;

    const t1 = gsap.timeline({
      paused: true,
      delay: DELAY_HUND,
      defaults: { ease: "power2.out" },
    });
    for (let i = 0; i < stepsHund; i++) {
      t1.to(col1, { y: -digitH * (i + 1), duration: durPerHund });
    }
    tl1.current = t1;

    // create only THIS component's trigger and store it
    stRef.current = ScrollTrigger.create({
      trigger: wrap,
      start: "top 80%",
      once: true,
      onEnter: () => {
        tl3.current?.play(0);
        tl2.current?.play(0);
        tl1.current?.play(0);
      },
    });
  };

  useLayoutEffect(() => {
    // scope all gsap work to this component
    const ctx = gsap.context(() => {
      build();

      let raf: number | null = null;
      const onResize = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          build(); // rebuild only THIS component’s timelines/trigger
          ScrollTrigger.refresh();
        });
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, wrapRef);

    return () => {
      // revert kills timelines/tweens/triggers created in this context
      stRef.current?.kill();
      tl1.current?.kill();
      tl2.current?.kill();
      tl3.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="w-fit h-[1.2rem] md:h-[1.8rem] md:text-[1.75rem] text-[1.2rem] overflow-hidden"
    >
      <div className="flex gap-0 relative leading-none">
        <div className="flex flex-col" ref={firstRef}>
          {FIRST_ARRAY.map((n, idx) => (
            <span key={`h-${idx}`}>{n}</span>
          ))}
        </div>
        <div className="flex flex-col" ref={secondRef}>
          {SECOND_ARRAY.map((n, idx) => (
            <span key={`t-${idx}`}>{n}</span>
          ))}
        </div>
        <div className="flex flex-col" ref={thirdRef}>
          {THIRD_ARRAY.map((n, idx) => (
            <span key={`o-${idx}`}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedNumber;
