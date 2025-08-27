import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export type Item = { backgroundLink: string; text: string };

export default function CardSlider({
  items,
  speed = 0.01,
  gapPx = 12,
  trackGapPx = 12,
  coverFactor = 2.4,
}: {
  items: Item[];
  speed?: number;
  gapPx?: number;
  trackGapPx?: number;
  coverFactor?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackA = useRef<HTMLDivElement | null>(null);
  const trackB = useRef<HTMLDivElement | null>(null);

  const rafId = useRef<number | null>(null);
  const x = useRef(0);
  const dir = useRef<1 | -1>(1);
  const boost = useRef(1);

  const [dupes, setDupes] = useState(1); // dynamic duplication count
  const [ready, setReady] = useState(false);

  // Build extended list based on dupes
  const extended = Array.from({ length: dupes }).flatMap(() => items);

  const step = () => {
    boost.current += (1 - boost.current) * 0.08;
    x.current += dir.current * speed * boost.current;
    if (x.current <= -100) x.current = 0;
    if (x.current > 0) x.current = -100;

    const a = trackA.current,
      b = trackB.current;
    if (a && b) gsap.set([a, b], { xPercent: x.current });

    rafId.current = requestAnimationFrame(step);
  };

  // Preload images -> measure -> set dupes -> start anim (hidden until ready)
  useLayoutEffect(() => {
    if (!items || items.length === 0) return;

    let cancelled = false;

    const urls = Array.from(new Set(items.map((i) => i.backgroundLink)));
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

      // Ensure at least one render to measure base width
      requestAnimationFrame(() => {
        const cont = containerRef.current;
        const a = trackA.current;
        if (!cont || !a) return;

        // Base width of ONE set: temporarily assume dupes is current dupes (1 at first render)
        const currentDupes = Math.max(1, dupes);
        const baseWidth = a.scrollWidth / currentDupes; // includes card gap
        const need =
          baseWidth > 0
            ? Math.max(
                2,
                Math.ceil((cont.clientWidth * coverFactor) / baseWidth)
              )
            : 2;

        // Apply dupes, then after it renders, start the animation and reveal
        setDupes(need);

        requestAnimationFrame(() => {
          // Safety: measure again after dupes applied
          const a2 = trackA.current;
          if (!a2) return;

          x.current = 0;
          // listeners
          const onWheel = (e: WheelEvent) => {
            const mag =
              Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
            if (mag === 0) return;
            dir.current = mag > 0 ? 1 : -1;
            boost.current = 6;
          };
          const onScroll = () => {
            // Optional: if you want scroll direction to affect direction:
            // dir.current = (window.scrollY - lastY) > 0 ? 1 : -1; (track lastY if needed)
            boost.current = 6;
          };

          window.addEventListener("wheel", onWheel, { passive: true });
          window.addEventListener("scroll", onScroll, { passive: true });

          rafId.current = requestAnimationFrame(step);
          setReady(true);

          return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("scroll", onScroll);
          };
        });
      });
    });

    return () => {
      cancelled = true;
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, speed, coverFactor, gapPx, trackGapPx]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden py-6 transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex flex-nowrap items-center"
          style={{ columnGap: `${trackGapPx}px` }} // space between Track A & B
        >
          {/* Track A */}
          <div
            ref={trackA}
            className="flex flex-nowrap shrink-0 will-change-transform"
            style={{ gap: `${gapPx}px` }}
          >
            {extended.map((it, i) => (
              <TxtImgCard
                key={`A-${i}`}
                backgroundLink={it.backgroundLink}
                text={it.text}
              />
            ))}
          </div>

          {/* Track B (duplicate) */}
          <div
            ref={trackB}
            className="flex flex-nowrap shrink-0 will-change-transform"
            style={{ gap: `${gapPx}px` }}
            aria-hidden="true"
          >
            {extended.map((it, i) => (
              <TxtImgCard
                key={`B-${i}`}
                backgroundLink={it.backgroundLink}
                text={it.text}
              />
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
    <div className="w-fit h-fit p-1 rounded-lg bg-light-bg flex gap-4 items-center">
      <div
        className="w-[62px] h-[62px] rounded-lg"
        style={{
          backgroundImage: `url('${backgroundLink}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <span className="mr-2 whitespace-nowrap">{text}</span>
    </div>
  );
};
