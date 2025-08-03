import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CAROUSEL_BRANDS } from "../../config/hero";
import ScrollReveal from "../shared/scrool-reveal";

function BrandCarousel() {
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
    <section>
      <div className="mx-container">
        <div className="flex flex-col items-center justify-center gap-5 py-sm-pad">
          <div className="max-w-[530px] mx-auto">
            <h5 className="font-interTight-regular text-center">
              Trusted by 500+ of the world's top brands
            </h5>
          </div>
          {/* ============================= Carousel ============================= */}
          <ScrollReveal>
            <div className=" mx-container flex whitespace-nowrap min-h-20 gap-15 relative overflow-x-hidden">
              <div className="bg-gradient-to-r from-light-bg to-transparent w-[50px] md:w-[200px] h-[100%] absolute top-0 z-4 left-0" />
              <div className="bg-gradient-to-l from-light-bg to-transparent w-[50px] md:w-[200px] h-[100%] absolute top-0 z-4 right-0" />
              <div className="flex gap-15" ref={firstTextRef}>
                {CAROUSEL_BRANDS.map((Icon, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-15" ref={secondTextRef}>
                {CAROUSEL_BRANDS.map((Icon, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default BrandCarousel;
