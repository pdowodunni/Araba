import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type Item = { backgroundLink: string; text: string };

export default function CardSlider({
  items,
  speed = 0.03,
}: {
  items: Item[];
  speed?: number;
}) {
  // readiness (avoid flicker/shift)
  const [ready, setReady] = useState(false);

  // refs for the four tracks (two per row)
  const topA = useRef<HTMLDivElement | null>(null);
  const topB = useRef<HTMLDivElement | null>(null);
  const botA = useRef<HTMLDivElement | null>(null);
  const botB = useRef<HTMLDivElement | null>(null);

  // animation state
  const rafId = useRef<number | null>(null);
  const xTop = useRef(0);
  const xBot = useRef(0);
  const dirRef = useRef<1 | -1>(1);
  const boostRef = useRef(1);
  const lastY = useRef(0);

  // tick
  const step = () => {
    const a1 = topA.current,
      a2 = topB.current;
    const b1 = botA.current,
      b2 = botB.current;

    // ease boost back toward 1
    boostRef.current += (1 - boostRef.current) * 0.08;

    // top follows scroll direction
    xTop.current += dirRef.current * speed * boostRef.current;
    if (xTop.current <= -100) xTop.current = 0;
    if (xTop.current > 0) xTop.current = -100;

    // bottom moves opposite
    xBot.current -= dirRef.current * speed * boostRef.current;
    if (xBot.current <= -100) xBot.current = 0;
    if (xBot.current > 0) xBot.current = -100;

    if (a1 && a2) gsap.set([a1, a2], { xPercent: xTop.current });
    if (b1 && b2) gsap.set([b1, b2], { xPercent: xBot.current });

    rafId.current = requestAnimationFrame(step);
  };

  // preload then start
  useLayoutEffect(() => {
    let cancelled = false;

    const urls = Array.from(new Set([...items].map((i) => i.backgroundLink)));
    Promise.all(
      urls.map(
        (src) =>
          new Promise<void>((res) => {
            const img = new Image();
            img.onload = img.onerror = () => res();
            img.src = src;
          })
      )
    ).then(() => {
      if (cancelled) return;

      setReady(true);
      xTop.current = 0;
      xBot.current = 0;
      lastY.current = window.scrollY || 0;

      // listeners
      const onScroll = () => {
        const y = window.scrollY || 0;
        const d = y - lastY.current;
        lastY.current = y;
        if (d === 0) return;
        dirRef.current = d > 0 ? 1 : -1;
        boostRef.current = 6;
      };
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        dirRef.current = e.deltaY > 0 ? 1 : -1;
        boostRef.current = 6;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("wheel", onWheel, { passive: true });

      rafId.current = requestAnimationFrame(step);

      return () => {
        if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("wheel", onWheel);
      };
    });

    return () => {
      cancelled = true;
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, items]);

  return (
    <div
      className={`relative overflow-hidden py-6 transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-full overflow-hidden mb-4">
        <div className="flex flex-nowrap gap-4">
          {/* track A */}
          <div
            ref={topA}
            className="flex flex-nowrap gap-4 shrink-0 will-change-transform"
          >
            {items.map((it, i) => (
              <TxtImgCard key={`tA-${i}`} {...it} />
            ))}
          </div>
          {/* track B (duplicate) */}
          <div
            ref={topB}
            className="flex flex-nowrap gap-4 shrink-0 will-change-transform"
            aria-hidden="true"
          >
            {items.map((it, i) => (
              <TxtImgCard key={`tB-${i}`} {...it} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TxtImgCard = ({
  backgroundLink,
  text,
}: {
  backgroundLink: string;
  text: string;
}) => {
  return (
    <div className="w-fit h-fit p-1 rounded-lg bg-light-bg flex gap-4 justify-between items-center">
      <div
        className="w-[62px] rounded-lg h-[62px] bg-amber-600"
        style={{
          backgroundImage: `url('${backgroundLink}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <span className="mr-2">{text}</span>
    </div>
  );
};
