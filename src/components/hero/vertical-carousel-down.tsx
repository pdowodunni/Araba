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
import { VERTICAL_CAROUSEL_THREE } from "../../config/hero";

function VerticalCarouselDown() {
  {
    /* 
    ============================= 
    DO NOT CHANGE THESE VALUES BELOW
    I don't understand why they work but they work. I'll figure it out later 
    ============================= 
  */
  }

  let yPercent = 0;

  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const animation = () => {
    if (yPercent >= 0) {
      yPercent = -100;
    }
    if (!firstTextRef.current && !secondTextRef.current) return;
    gsap.set(firstTextRef.current, { yPercent: yPercent });
    gsap.set(secondTextRef.current, { yPercent: yPercent });
    yPercent += 0.012;
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
        {VERTICAL_CAROUSEL_THREE.map(({ image, Logo }, index) => {
          return (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <img src={image} className="w-[250px] rounded-lg" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex justify-center items-center w-30 h-8 z-5">
                <Logo />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 flex-col" ref={secondTextRef}>
        {VERTICAL_CAROUSEL_THREE.map(({ image, Logo }, index) => {
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

export default VerticalCarouselDown;
