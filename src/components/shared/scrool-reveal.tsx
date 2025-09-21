import { useRef, useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  const build = () => {
    const el = ref.current;
    if (!el) return;

    // ensure clean state for this component
    tlRef.current?.kill();
    stRef.current?.kill();

    gsap.set(el, { opacity: 0, filter: "blur(8px)" });

    const tl = gsap.timeline({ paused: true });
    tl.to(el, { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to({}, { duration: 0.4 })
      .to(el, { filter: "blur(0px)", duration: 0.7, ease: "power2.out" });

    tlRef.current = tl;

    stRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true, // 👈 only runs once
      onEnter: () => {
        tlRef.current?.play(0);
      },
    });

    // ensure ScrollTrigger calculations are up to date
    ScrollTrigger.refresh();
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      build();

      let raf: number | null = null;
      const onResize = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          build(); // rebuild this component's timelines/triggers
          ScrollTrigger.refresh();
        });
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, ref);

    return () => {
      // kill only this component's instances and revert context
      stRef.current?.kill();
      tlRef.current?.kill();
      ctx.revert();
      // small defensive refresh after cleanup
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={ref} style={{ willChange: "opacity, filter" }}>
      {children}
    </div>
  );
};

export default ScrollReveal;
