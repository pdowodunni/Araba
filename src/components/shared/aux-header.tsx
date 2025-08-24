import SlideUpButton from "../shared/slide-up-button";
import CardSlider, { type Item } from "./card-slider";

function AuxHeader() {
  const TEST: Item = [
    {
      backgroundLink: "/images/13.jpg",
      text: "Web development",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Design",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Voice Over",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "Story telling",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "Mark Up",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Antopoly study",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Sound design",
    },
    {
      backgroundLink: "/images/13.jpg",
      text: "Web development",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Design",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Voice Over",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "Story telling",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "Mark Up",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Antopoly study",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Sound design",
    },
  ];
  return (
    <header
      style={{
        backgroundImage: "url('/images/2.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-fit  pt-[78px]">
        <div className="mx-container w-full">
          <div className="flex pt-md-pad pb-sm-pad mx-assist mt-40 md:mt-0">
            <div className="flex flex-col gap-3 lg:gap-5 xl:gap-10">
              <div className="max-w-[560px] xl:max-w-[820px] text-white">
                <span className="s-heading mb-2">Creative Design Service</span>
                <h1 className=" font-instrumental-regular leading-tight xl:leading-[80px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
                  <span>Music & Sound Design</span>
                </h1>
              </div>
              <div className="flex flex-col gap-5 max-w-[560px]">
                <p className="text-white font-instrumental-serif text-start xl:text-xl">
                  “Because people forget what they saw. But they'll remember how
                  you made them feel.”
                </p>
                <p className="text-white text-start xl:text-xl">
                  The sound of your story matters. Whether it's a jingle that
                  gets stuck in your head (for all the right reasons), ambient
                  layers for your short film, or subtle audio exist to make your
                  project feel alive.
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
          </div>
        </div>
      </div>
      <div className=" pb-4 lg:pb-10">
        <CardSlider items={TEST} />
      </div>
    </header>
  );
}

export default AuxHeader;
