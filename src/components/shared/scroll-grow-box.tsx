import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGrowBox() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    {
      /* 
    ============================= 
    Using GSAP scrolltrigger to increase the size of the container on scroll

    Refactor this later.
    ============================= 
  */
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { width: "20%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div
      ref={containerRef}
      className="mx-container flex flex-col gap-20 items-center justify-center overflow-hidden pt-lg-pad"
    >
      <p className="text-sm uppercase tracking-wide">How we solve problems</p>
      {/* <div className="pt-lg-pad"> */}
      <div
        ref={boxRef}
        className="aspect-video relative overflow-hidden bg-primary rounded-lg"
        data-cursor-target
        data-cursor-text="PLAY VIDEO"
      >
        <video
          playsInline
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onLoadedData={() => {
            setLoaded(true);
          }}
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        {!loaded && (
          <img
            src="/images/thumb.jpg"
            alt="background logo image"
            style={{
              opacity: 0,
            }}
          />
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
