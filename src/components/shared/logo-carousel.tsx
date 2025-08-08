import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CAROUSEL_BRANDS } from "../../config/hero";

function LogoCarousel() {
  let xPercent = 0;

  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  {
    /* 
    ============================= 
    DO NOT CHANGE THESE VALUES BELOW
    I don't understand why they work but they work. I'll figure it out later 
    ============================= 
  */
  }
  const animation = () => {
    if (xPercent <= -105) {
      xPercent = 0;
    }
    if (!firstTextRef.current && !secondTextRef.current) return;
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    xPercent -= 0.03;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    requestAnimationFrame(animation);
  });
  return (
    <div className=" mx-container flex whitespace-nowrap min-h-20 gap-20 relative overflow-x-hidden">
      <div className="bg-gradient-to-r from-light-bg to-transparent w-[50px] md:w-[200px] h-[100%] absolute top-0 z-4 left-0" />
      <div className="bg-gradient-to-l from-light-bg to-transparent w-[50px] md:w-[200px] h-[100%] absolute top-0 z-4 right-0" />
      <div className="flex gap-20" ref={firstTextRef}>
        {CAROUSEL_BRANDS.map((Icon, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <Icon color="#0A221F" />
            </div>
          );
        })}
      </div>
      <div className="flex gap-20" ref={secondTextRef}>
        {CAROUSEL_BRANDS.map((Icon, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <Icon color="#0A221F" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LogoCarousel;
