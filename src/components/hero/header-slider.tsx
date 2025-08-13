import { useEffect, useRef } from "react";
import VerticalCarouselUp from "./vertical-carousel-up";
import VerticalCarouselDown from "./vertical-carousel-down";
import {
  VERTICAL_CAROUSEL_ONE,
  VERTICAL_CAROUSEL_THREE,
  VERTICAL_CAROUSEL_TWO,
} from "../../config/hero";
import gsap from "gsap";

function HeaderSlider() {
  const containerRef = useRef(null);

  {
    /* 
    ============================= 
    Works for now, make this better later.
    ============================= 
  */
  }

  useEffect(() => {
    const tl = gsap.timeline();
    const el = containerRef.current;

    tl.from(el, {
      opacity: 0,
      filter: "blur(10px)",
    })
      .to(el, {
        delay: 0.7,
        opacity: 1,
      })
      .to(el, {
        filter: "blur(0px)",
      });
  }, []);
  return (
    <div>
      <div
        className="flex gap-4 h-[656px] 2xl:h-[965px] opacity-0"
        ref={containerRef}
      >
        <VerticalCarouselUp ImageList={VERTICAL_CAROUSEL_ONE} speed={0.028} />
        <VerticalCarouselDown
          ImageList={VERTICAL_CAROUSEL_THREE}
          speed={0.023}
        />
        <VerticalCarouselUp ImageList={VERTICAL_CAROUSEL_TWO} speed={0.016} />
      </div>
    </div>
  );
}

export default HeaderSlider;
