import type { ReactNode } from "react";
import SlideUpButton from "../shared/slide-up-button";
import CardSlider, { type Item } from "./card-slider";

function AuxHeader({
  listItems,
  backgroundImageLink,
  sHeading = "Creative Design Service",
  head,
  text,
}: {
  listItems: Item[];
  sHeading?: string;
  backgroundImageLink: string;
  head?: ReactNode;
  text?: ReactNode;
}) {
  return (
    <header
      style={{
        backgroundImage: `url('${backgroundImageLink}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "var(--color-primary)",
      }}
    >
      <div className="flex h-fit pt-[78px]">
        <div className="mx-container w-full">
          <div className="flex pt-md-pad pb-sm-pad mx-assist mt-10 md:mt-0">
            <div className="flex flex-col gap-3 lg:gap-5 xl:gap-10">
              <div className="max-w-[560px] xl:max-w-[820px] text-white">
                <span className="s-heading mb-2">{sHeading}</span>
                {head}
              </div>
              <div>{text}</div>
              <div className="flex">
                <SlideUpButton
                  type="fill"
                  bgColor="var(--color-green-accent)"
                  textColor="var(--color-primary)"
                >
                  Let's talk
                </SlideUpButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 lg:pb-10">
        <CardSlider items={listItems} />
      </div>
    </header>
  );
}

export default AuxHeader;
