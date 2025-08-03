// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { VERTICAL_CAROUSEL_ONE } from "../../config/hero";

// gsap.registerPlugin(ScrollTrigger);

// function VerticalCarouselUp({
//   ImageList,
// }: {
//   ImageList: { image: string; Logo: React.FC }[];
// }) {
//   let yPercent = 0;
//   const directionRef = useRef(1);

//   /* REFS */
//   const firstTextRef = useRef<HTMLDivElement>(null);
//   const secondTextRef = useRef<HTMLDivElement>(null);

//   const animation = () => {
//     if (yPercent <= -100) yPercent = 0;
//     if (!firstTextRef.current || !secondTextRef.current) return;

//     gsap.set(firstTextRef.current, { yPercent });
//     gsap.set(secondTextRef.current, { yPercent });
//     yPercent += 0.03 * -directionRef.current;
//     requestAnimationFrame(animation);
//   };

//   useLayoutEffect(() => {
//     requestAnimationFrame(animation);

//     ScrollTrigger.create({
//       trigger: document.body,
//       start: "top top",
//       end: "bottom bottom",
//       onUpdate: (self) => {
//         // self.direction: 1 = scrolling down, -1 = up
//         directionRef.current = self.direction;
//       },
//       // markers: true,
//     });
//   }, []);

//   return (
//     <div className="flex flex-col whitespace-nowrap gap-2 max-h-full relative overflow-hidden">
//       <div
//         className="absolute top-0 left-0 w-full h-[200px] md:h-[400px]
//            bg-[linear-gradient(to_bottom,var(--color-primary)_20%,transparent_80%)]
//            z-10"
//       />

//       <div
//         className="absolute bottom-0 right-0 w-full h-[200px] md:h-[400px]
//            bg-[linear-gradient(to_top,var(--color-primary)_10%,transparent_80%)]
//            z-10"
//       />

//       <div className="flex flex-col gap-3" ref={firstTextRef}>
//         {ImageList.map(({ image, Logo }, index) => (
//           <div
//             key={index}
//             className="relative flex items-center justify-center"
//           >
//             <img src={image} className="w-[250px] rounded-lg" />
//             <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-30 h-10 z-5">
//               <Logo />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col gap-3" ref={secondTextRef}>
//         {ImageList.map(({ image, Logo }, index) => (
//           <div
//             key={index}
//             className="relative flex items-center justify-center"
//           >
//             <img src={image} className="w-[250px] rounded-lg" />
//             <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-30 h-10 z-5">
//               <Logo />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VerticalCarouselUp;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { VERTICAL_CAROUSEL_ONE } from "../../config/hero";

function VerticalCarouselUp({
  ImageList,
  speed,
}: {
  speed: number;
  ImageList: { image: string; Logo: React.FC }[];
}) {
  let yPercent = 0;

  /* REFS */
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const animation = () => {
    {
      /* 
    ============================= 
    DO NOT CHANGE THESE VALUES BELOW
    I don't understand why they work but they work. I'll figure it out later 
    ============================= 
  */
    }

    if (yPercent <= -100) {
      yPercent = 0;
    }
    if (!firstTextRef.current && !secondTextRef.current) return;
    gsap.set(firstTextRef.current, { yPercent: yPercent });
    gsap.set(secondTextRef.current, { yPercent: yPercent });
    yPercent -= speed;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    requestAnimationFrame(animation);
  });

  return (
    <div className="flex flex-col whitespace-nowrap min-h-20 gap-2 max-h-full relative overflow-y-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[200px] md:h-[400px]
             bg-[linear-gradient(to_bottom,var(--color-primary)_20%,transparent_80%)]
             z-10"
      />

      <div
        className="absolute bottom-0 right-0 w-full h-[200px] md:h-[400px]
             bg-[linear-gradient(to_top,var(--color-primary)_10%,transparent_80%)]
             z-10"
      />
      <div className="flex gap-3 flex-col" ref={firstTextRef}>
        {ImageList.map(({ image, Logo }, index) => {
          return (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <img src={image} className="w-[250px] rounded-lg" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex justify-center items-center  w-30 h-10 z-5">
                <Logo />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 flex-col" ref={secondTextRef}>
        {VERTICAL_CAROUSEL_ONE.map(({ image, Logo }, index) => {
          return (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <img src={image} className="w-[250px] rounded-lg" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex justify-center items-center  w-30 h-10 z-5">
                <Logo />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalCarouselUp;

// "use client";

// import { InfinityScrollTypes } from "@/types/layout";
// import gsap from "gsap";
// import { useLayoutEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export const InfinityScroll: React.FC<InfinityScrollTypes> = ({ text }) => {
//   /* VARIABLES */
//   let xPercent = 0;
//   const directionRef = useRef(0);

//   /* REFS */
//   const firstTextRef = useRef(null);
//   const secondTextRef = useRef(null);
//   const sliderRef = useRef(null);

//   /* ANIMATION FUNCTIONS */
//   const animation = () => {
//     if (xPercent <= -100) {
//       xPercent = 0;
//     }
//     if (xPercent > 0) {
//       xPercent = -100;
//     }
//     gsap.set(firstTextRef.current, { xPercent: xPercent });
//     gsap.set(secondTextRef.current, { xPercent: xPercent });
//     xPercent += 0.04 * directionRef.current;
//     requestAnimationFrame(animation);
//   };

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     requestAnimationFrame(animation);

//     gsap.to(sliderRef.current, {
//       scrollTrigger: {
//         trigger: sliderRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         onUpdate: (e) => (directionRef.current = e.direction * -1),
//         scrub: 2,
//         // markers: true,
//       },
//       x: "-=300px",
//     });
//   });

//   return (
//     <div className="flex whitespace-nowrap" ref={sliderRef}>
//       <p
//         style={{
//           fontFamily: "var(--font-gobold)",
//         }}
//         ref={firstTextRef}
//       >
//         {text}&nbsp;
//       </p>
//       <p
//         style={{
//           fontFamily: "var(--font-gobold)",
//         }}
//         ref={secondTextRef}
//       >
//         {text}&nbsp;
//       </p>
//     </div>
//   );
// };
