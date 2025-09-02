import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

type Item = { image: string; Logo: React.FC };

function VerticalCarouselDown({
  ImageList,
  speed = 0.03,
}: {
  speed?: number;
  ImageList: Item[];
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const firstRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const [ready, setReady] = useState(false);

  const rafId = useRef<number | null>(null);
  const yRef = useRef(0); // [-100, 0]
  const dirRef = useRef<1 | -1>(1);
  const boostRef = useRef(1);
  const lastScrollY = useRef<number>(0);
  const speedRef = useRef(speed);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const step = () => {
    const a = firstRef.current;
    const b = secondRef.current;
    if (a && b) {
      boostRef.current += (1 - boostRef.current) * 0.08; // ease back to 1
      yRef.current += dirRef.current * speedRef.current * boostRef.current;

      // wrap within [-100, 0]
      if (yRef.current <= -100) yRef.current = 0;
      if (yRef.current > 0) yRef.current = -100;

      gsap.set([a, b], { yPercent: yRef.current });
    }
    rafId.current = requestAnimationFrame(step);
  };

  // Preload images; reveal only when all are loaded
  useLayoutEffect(() => {
    let cancelled = false;

    const urls = Array.from(new Set(ImageList.map((i) => i.image)));
    const preloadAll = Promise.all(
      urls.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      )
    );

    const onScroll = () => {
      const curr = window.scrollY || 0;
      const delta = curr - lastScrollY.current;
      lastScrollY.current = curr;
      if (delta === 0) return;
      // move opposite to page scroll direction
      dirRef.current = delta > 0 ? -1 : 1;
      boostRef.current = 6;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      // opposite to wheel direction
      dirRef.current = e.deltaY > 0 ? -1 : 1;
      boostRef.current = 6;
    };

    preloadAll.then(() => {
      if (cancelled) return;

      setReady(true);
      const wrap = wrapRef.current;
      if (wrap)
        gsap.fromTo(
          wrap,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
        );

      yRef.current = 0;
      lastScrollY.current = window.scrollY || 0;
      rafId.current = requestAnimationFrame(step);

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("wheel", onWheel, { passive: true });
    });

    return () => {
      cancelled = true;
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ImageList]);

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden flex flex-col gap-2 min-h-20 max-h-full"
      style={{ visibility: ready ? "visible" : "hidden" }}
    >
      {/* top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[200px] md:h-[400px] bg-[linear-gradient(to_bottom,var(--color-primary)_20%,transparent_80%)] z-10" />
      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-full h-[200px] md:h-[400px] bg-[linear-gradient(to_top,var(--color-primary)_10%,transparent_80%)] z-10" />

      {/* track A */}
      <div ref={firstRef} className="flex flex-col gap-3 will-change-transform">
        {ImageList.map(({ image, Logo }, i) => (
          <div
            key={`a-${i}`}
            className="relative flex items-center justify-center"
          >
            <img
              src={image}
              className="w-[181px] 2xl:w-[250px] rounded-lg block"
              alt=""
              loading="lazy"
            />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-30 h-10 z-[5]">
              <Logo />
            </div>
          </div>
        ))}
      </div>

      {/* track B (duplicate) */}
      <div
        ref={secondRef}
        className="flex flex-col gap-3 will-change-transform"
        aria-hidden="true"
      >
        {ImageList.map(({ image, Logo }, i) => (
          <div
            key={`b-${i}`}
            className="relative flex items-center justify-center"
          >
            <img
              src={image}
              className="w-[181px] 2xl:w-[250px] rounded-lg block"
              alt=""
              loading="lazy"
            />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-30 h-10 z-[5]">
              <Logo />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalCarouselDown;
