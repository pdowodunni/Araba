import {
  HORIZONTAL_CAROUSEL_ONE,
  HORIZONTAL_CAROUSEL_TWO,
} from "../../config/hero";
import SlideUpButton from "../shared/slide-up-button";
import HeaderSlider from "./header-slider";
import HorizontalOpposedMarquees from "./horizontal-carousel";

function HeroHeader() {
  return (
    <header>
      <div className="flex items-center justify-center h-fit xl:h-[656px] 2xl:h-[965px] bg-primary">
        <div className="max-w-[1680px] mx-auto">
          <div className="flex flex-col pt-[100px] xl:pt-0 xl:grid xl:grid-cols-2 gap-1 xl:gap-8">
            <div className="flex flex-col justify-center items-center xl:items-start gap-3 xl:gap-8  px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#8DFDBA] font-interTight-regular leading-tight max-w-[560px] xl:max-w-[540px] text-center xl:text-start">
                <span>
                  Your{" "}
                  <span className="font-instrumental-serif">
                    creative team's
                  </span>{" "}
                  creative team
                </span>
              </h2>
              <div className="">
                <p className="text-white max-w-[560px] xl:max-w-[540px] text-center xl:text-start">
                  Scale your in-house creative team with top global talent
                  powered by industry-leading AI workflows, delivering anything
                  you can imagine fast and affordably.
                </p>
              </div>
              <div className="flex">
                <SlideUpButton
                  type="fill"
                  bgColor="var(--color-green-accent)"
                  textColor="var(--color-primary)"
                >
                  Book a demo
                </SlideUpButton>
              </div>
            </div>
            <div className="hidden xl:block translate-x-25">
              <HeaderSlider />
            </div>
            <div className="block xl:hidden">
              <HorizontalOpposedMarquees
                rowA={HORIZONTAL_CAROUSEL_ONE}
                rowB={HORIZONTAL_CAROUSEL_TWO}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
