import { Percent, Rocket, Shuffle, TriangleRight } from "lucide-react";
import SlideUpButton from "../slide-up-button";

function RightImgTextSec() {
  const DATA = [
    {
      head: "Boost conversions",
      text: "Emotional sound design enhances viewer retention and influences purchase decisions.",
      Icon: Rocket,
    },
    {
      head: "Increase recall",
      text: "Jingles and audio logos are 90% more likely to be remembered than visuals alone.",
      Icon: TriangleRight,
    },
    {
      head: "Build brand equity",
      text: "Your sound becomes an integral part of your identity, spanning platforms, campaigns, and years.",
      Icon: Shuffle,
    },
    {
      head: "Elevate perception",
      text: "Great sound makes you look (and sound) more premium, polished, and credible.",
      Icon: Percent,
    },
    {
      head: "Drive emotion",
      text: "Music and audio cues trigger feelings faster than visuals can. Period.",
      Icon: Percent,
    },
  ];

  return (
    <section className="flex flex-col gap-12 bg-[#dceaf0]">
      <div className="mx-container w-full pr-0 sm:pr-0 lg:pr-0 relative">
        <div className="grid items-stretch gap-12 xl:grid-cols-[1.5fr_1fr]">
          {/* CONTENT */}
          <div className="w-full flex items-center py-sm-pad">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4 mb-4">
                <span className="s-heading border-b border-primary">
                  SONIC STORIES, POWERFULLY TOLD
                </span>
                <h3 className="font-medium leading-tight">
                  Why Sound Strategy Matters{" "}
                  <em className="font-instrumental-serif">
                    <br />
                    (a Lot)
                  </em>
                </h3>
              </div>

              <div className="flex flex-col gap-18">
                <p className="p-lg">
                  Storytelling That Moves. Strategy that Connects. Content that
                  Lasts.
                </p>
                <div className="mx-auto grid gap-15 sm:grid-cols-1 lg:grid-cols-2">
                  {DATA.map(({ Icon, head, text }, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                      <div className="mx-0 mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-black/8 scale-100">
                        <Icon color="#0a221f" />
                      </div>
                      <h5 className="m-0 p-0">{head}</h5>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <SlideUpButton
                    type="fill"
                    bgColor="var(--color-primary)"
                    textColor="white"
                  >
                    Get started
                  </SlideUpButton>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE*/}
          <div className="relative min-h-[560px]">
            <div className="absolute inset-y-0 left-0 right-[calc(130%-50vw)]">
              <div
                className="h-full w-full max-w-[1500px]  bg-cover bg-center"
                style={{ backgroundImage: "url('/images/18.jpg')" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightImgTextSec;
