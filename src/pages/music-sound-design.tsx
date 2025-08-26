import AuxHeader from "../components/shared/aux-header";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import ProdGrdSec from "../components/shared/layout/producion-grid-sec";
import LeftImgTextSec from "../components/shared/layout/left-img-txt-sec";
import SlideUpButton from "../components/shared/slide-up-button";
import { Percent, Rocket, Shuffle, TriangleRight } from "lucide-react";

function MusicSoundDesign() {
  const LEFT_SEC_DATA = {
    heading: "Great Visuals, Empty Silence",
    subheading: (
      <h3 className="font-medium leading-tight">
        It Looks Great… But It Still Feels{" "}
        <em className="font-instrumental-serif">Empty.</em>
      </h3>
    ),
    text: (
      <div className="flex flex-col">
        <p className="p-lg">
          You've got the visuals, the story, the strategy. But something's
          missing… and you can feel it.
        </p>
        <p className="p-lg">
          Maybe the edit is clean… But the emotion? Nowhere to be found.
        </p>
        <p className="p-lg">If you're here, maybe this sounds familiar:</p>
        <div>
          <ul className="mt-2 p-lg flex flex-col gap-2 list-disc pl-5 xl:pl-10">
            <li>
              You used a stock music bed that sounds like every other ad on the
              internet.
            </li>
            <li>
              You're struggling to find a sound that feels as unique as your
              brand.
            </li>
            <li>
              Your film has drama, but the sound design is flat or nonexistent.
            </li>
            <li>
              You've got great dialogue, but there's hum, hiss, or echo and you
              don't know how to fix it.
            </li>
            <li>
              You've tried freelance composers—but the back-and-forth killed the
              vibe.
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
            But when it's done wrong, people can't quite explain why your
            project didn't land… they just move on.
          </p>
        </div>

        <div className="flex mt-8">
          <SlideUpButton
            type="fill"
            bgColor="var(--color-primary)"
            textColor="white"
          >
            Get started
          </SlideUpButton>
        </div>
      </div>
    ),
  };

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

  const RIGHT_SEC_DATA = {
    heading: "SONIC STORIES, POWERFULLY TOLD",
    subheading: (
      <h3 className="font-medium leading-tight">
        Why Sound Strategy Matters{" "}
        <em className="font-instrumental-serif">
          <br />
          (a Lot)
        </em>
      </h3>
    ),
    text: (
      <div className="flex flex-col gap-10 lg:gap-18">
        <p className="p-lg">
          Storytelling That Moves. Strategy that Connects. Content that Lasts.
        </p>
        <div className="mx-0 lg:mx-auto grid gap-8 lg:gap-15 sm:grid-cols-1 lg:grid-cols-2">
          {DATA.map(({ Icon, head, text }, idx) => (
            <div key={idx} className="flex flex-col gap-2 lg:gap-5">
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
    ),
  };

  return (
    <main className="z-[-1]">
      <AuxHeader />
      {/* <div className="mx-container py-sm-pad flex flex-col gap-12">
        <span className="s-heading flex justify-center text-sm">
          Trusted by 50+ of the world's biggest brands
        </span>
        <LogoCarousel />
      </div> */}
      <LeftImgTextSec {...LEFT_SEC_DATA} />
      <TxtImgSec />
      <RightImgTextSec {...RIGHT_SEC_DATA} />
      <ProdGrdSec />
    </main>
  );
}

export default MusicSoundDesign;
