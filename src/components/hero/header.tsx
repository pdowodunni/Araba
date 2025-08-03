import SlideUpButton from "../shared/slide-up-button";
import HeaderSlider from "./header-slider";

function HeroHeader() {
  return (
    <header>
      <div className="flex items-center justify-center h-[965px] bg-primary">
        <div className="mx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-8">
              <h2 className="text-[#8DFDBA] font-interTight-regular leading-tight">
                <span>
                  Your{" "}
                  <span className="font-instrumental-serif">
                    creative team's
                  </span>{" "}
                  creative team
                </span>
              </h2>
              <div className="max-w-[540px]">
                <p className="text-white">
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
            <div className="translate-x-35">
              <HeaderSlider />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
