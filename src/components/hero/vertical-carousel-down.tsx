// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { VERTICAL_CAROUSEL_THREE } from "../../config/hero";

// gsap.registerPlugin(ScrollTrigger);

// function VerticalCarouselDown() {
//   let yPercent = 0;
//   const directionRef = useRef(1);

//   const firstRef = useRef<HTMLDivElement>(null);
//   const secondRef = useRef<HTMLDivElement>(null);

//   const animate = () => {
//     // reset loop when fully visible
//     if (yPercent >= 0) yPercent = -100;

//     const a = firstRef.current;
//     const b = secondRef.current;
//     if (a && b) {
//       gsap.set(a, { yPercent });
//       gsap.set(b, { yPercent });
//     }

//     // move opposite scroll: down-scroll drives negative yPercent
//     yPercent += 0.03 * directionRef.current;
//     requestAnimationFrame(animate);
//   };

//   useLayoutEffect(() => {
//     requestAnimationFrame(animate);

//     ScrollTrigger.create({
//       trigger: document.body,
//       start: "top top",
//       end: "bottom bottom",
//       onUpdate: (self) => {
//         // self.direction: 1 = down, -1 = up
//         directionRef.current = self.direction;
//       },
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden flex flex-col gap-2 whitespace-nowrap">
//       <div
//         className="absolute top-0 left-0 w-full h-[200px] md:h-[400px]
//                    bg-[linear-gradient(to_bottom,var(--color-primary)_20%,transparent_80%)]
//                    z-10"
//       />
//       <div
//         className="absolute bottom-0 right-0 w-full h-[200px] md:h-[400px]
//                    bg-[linear-gradient(to_top,var(--color-primary)_10%,transparent_80%)]
//                    z-10"
//       />

//       <div className="flex flex-col gap-3" ref={firstRef}>
//         {VERTICAL_CAROUSEL_THREE.map(({ image, Logo }, i) => (
//           <div key={i} className="relative flex items-center justify-center">
//             <img src={image} className="w-[250px] rounded-lg" />
//             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-30 h-8 flex items-center justify-center z-5">
//               <Logo />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col gap-3" ref={secondRef}>
//         {VERTICAL_CAROUSEL_THREE.map(({ image, Logo }, i) => (
//           <div key={i} className="relative flex items-center justify-center">
//             <img src={image} className="w-[250px] rounded-lg" />
//             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-30 h-10 flex items-center justify-center z-5">
//               <Logo />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VerticalCarouselDown;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Item = { image: string; Logo: React.FC };

function VerticalCarouselDown({
  ImageList,
  speed,
}: {
  speed: number;
  ImageList: Item[];
}) {
  const firstRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const rafId = useRef<number | null>(null);
  const yRef = useRef(0); // [-100, 0]
  const dirRef = useRef<1 | -1>(1);
  const boostRef = useRef(1); // multiplier that eases back to 1
  const lastScrollY = useRef<number>(0);

  const step = () => {
    const a = firstRef.current;
    const b = secondRef.current;
    if (a && b) {
      // ease boost back to 1 for a quick “speed up then settle” feel
      boostRef.current += (1 - boostRef.current) * 0.08;

      yRef.current += dirRef.current * speed * boostRef.current;

      // wrap within [-100, 0] to avoid jumps
      if (yRef.current <= -100) yRef.current = 0;
      if (yRef.current > 0) yRef.current = -100;

      gsap.set([a, b], { yPercent: yRef.current });
    }

    rafId.current = requestAnimationFrame(step);
  };

  useLayoutEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY || 0;
      const delta = curr - lastScrollY.current;
      lastScrollY.current = curr;

      if (delta === 0) return;
      dirRef.current = delta > 0 ? -1 : 1; // move in the page scroll direction
      boostRef.current = 6; // quick speed-up on user input
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      dirRef.current = e.deltaY > 0 ? -1 : 1;
      boostRef.current = 6;
    };

    // init
    yRef.current = 0;
    lastScrollY.current = window.scrollY || 0;
    rafId.current = requestAnimationFrame(step);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <div className="relative overflow-hidden flex flex-col gap-2 min-h-20 max-h-full">
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

// Add ons

// import { useLayoutEffect, useRef, useState } from "react";

// const [ready, setReady] = useState(false);

// useLayoutEffect(() => {
//   let cancelled = false;
//   const urls = Array.from(new Set(ImageList.map(i => i.image)));
//   const loadAll = Promise.all(
//     urls.map(
//       src =>
//         new Promise<void>(res => {
//           const img = new Image();
//           img.onload = img.onerror = () => res();
//           img.src = src;
//         })
//     )
//   );
//   loadAll.then(() => { if (!cancelled) setReady(true); });
//   return () => { cancelled = true; };
// }, [ImageList]);

// useLayoutEffect(() => {
//   if (!ready) return;
// // …your existing init, listeners, RAF start…
// }, [speed, ready]);

// <div
//   className={`relative overflow-hidden flex flex-col gap-2 min-h-20 max-h-full transition-opacity duration-300 ${
//     ready ? "opacity-100" : "opacity-0 pointer-events-none"
//   }`}
// >
//   {/* ... */}
// </div>
