import { Percent, Rocket, Shuffle, TriangleRight } from "lucide-react";
import SlideUpButton from "../slide-up-button";

function LeftImgTextSec() {
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
    <section className="flex flex-col gap-12 bg-[#dcf0e3]">
      <div className="mx-container w-full pr-0 sm:pr-0 lg:pr-0 relative">
        <div className="grid items-stretch gap-12 xl:grid-cols-[1fr_1fr]">
          {/* IMAGE */}
          <div className="relative min-h-[560px]">
            <div className="absolute inset-y-0 right-0 left-[calc(100%-50vw)]">
              <div
                className="h-full w-full max-w-[1500px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/111.jpg')" }}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full flex items-center py-sm-pad">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4 mb-4">
                {/* <span className="s-heading border-b border-primary">
                  SONIC STORIES, POWERFULLY TOLD
                </span> */}
                <h3 className="font-medium leading-tight">
                  <em className="font-instrumental-serif">It Looks Great… </em>
                  But It Still Feels Empty.
                </h3>
              </div>

              <div className="flex flex-col gap-8">
                <h5 className="">
                  You've got the visuals, the story, the strategy. But
                  something's missing… and you can feel it.
                </h5>
                <h5 className="">
                  Maybe the edit is clean… But the emotion? Nowhere to be found.
                </h5>
                <p className="p-lg">
                  If you're here, maybe this sounds familiar:
                </p>
                <div>
                  <ul className="mt-2 p-lg flex flex-col gap-2 list-disc pl-10">
                    <li>
                      You used a stock music bed that sounds like every other ad
                      on the internet.
                    </li>
                    <li>
                      You're struggling to find a sound that feels as unique as
                      your brand.
                    </li>
                    <li>
                      Your film has drama, but the sound design is flat or
                      nonexistent.
                    </li>
                    <li>
                      You've got great dialogue, but there's hum, hiss, or echo
                      and you don't know how to fix it.
                    </li>
                    <li>
                      You've tried freelance composers—but the back-and-forth
                      killed the vibe.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="p-lg">Here's the truth:</p>
                  <p className="p-lg font-interTight-semibold mt-5">
                    Sound is the secret ingredient to{" "}
                    <em className=""> unforgettable storytelling.</em>
                  </p>
                  <p className="p-lg">
                    But when it's done wrong, people can't quite explain why
                    your project didn't land… they just move on.
                  </p>
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
          {/* /CONTENT */}
        </div>
      </div>
    </section>
  );
}

export default LeftImgTextSec;
