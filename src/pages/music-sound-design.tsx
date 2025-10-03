import AuxHeader from "../components/shared/aux-header";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import ProdGrdSec from "../components/shared/layout/producion-grid-sec";
import LeftImgTextSec from "../components/shared/layout/left-img-txt-sec";
import SlideUpButton from "../components/shared/slide-up-button";
import { Percent, Rocket, Shuffle, TriangleRight } from "lucide-react";
import VerticalSnapCarousel from "../components/shared/testimonial";
import { type Item } from "../components/shared/card-slider";
import BrandCarousel from "../components/hero/brand-carousel";
import OneImgCrd from "../components/shared/case-study/1-image-card";
import SpotifyPlayback from "../components/spotify-playback";

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

  const TEXT_IMAGE_SEC_DATA = {
    heading: "Sound That Moves Stories",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        Bring your narrative to life with{" "}
        <em className="font-instrumental-serif">Unforgettable audio.</em>
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <p className="p-lg">
          We understand the role of sound in shaping how people feel, think, and
          connect. In today's crowded content landscape, sonic identity is no
          longer optional; it's everything.
        </p>
        <p>
          Our end-to-end music and sound design services are built for
          storytellers, filmmakers, content teams, and brands who want to move
          people with more than visuals. From subtle ambient textures to
          unforgettable theme music, we deliver audio that resonates, lingers,
          and elevates your story.
        </p>
        <div>
          <ul className="mt-2 p-lg flex flex-col gap-2 list-disc pl-10">
            <li>Collaborate with world-class composers and sound artists</li>
            <li>Create custom scores, stingers, themes, and ambient beds</li>
            <li>Design immersive SFX and audio signatures that stand out</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <SlideUpButton
            type="fill"
            bgColor="var(--color-primary)"
            textColor="white"
          >
            Book a demo
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
              <div className="logo-box">
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

  const SCROLL_ITEMS: Item[] = [
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

  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[80px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>Music & Sound Design</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-5 max-w-[560px]">
        <p className="text-white font-instrumental-serif text-start xl:text-xl">
          “Because people forget what they saw. But they'll remember how you
          made them feel.”
        </p>
        <p className="text-white text-start xl:text-xl">
          The sound of your story matters. Whether it's a jingle that gets stuck
          in your head (for all the right reasons), ambient layers for your
          short film, or subtle audio exist to make your project feel alive.
        </p>
      </div>
    ),
  };

  return (
    <main className="">
      <AuxHeader
        listItems={SCROLL_ITEMS}
        backgroundImageLink="/images/2.jpg"
        {...AUX_HEADER_DATA}
      />
      <BrandCarousel />
      <LeftImgTextSec {...TEXT_IMAGE_SEC_DATA} />
      <OneImgCrd
        assetLink="https://youtu.be/j85n9WHF-1w?si=nN1VKMifiX4tbBVA"
        assetType="video"
      />
      <WorkShowcase />
      <ProdGrdSec />
      {/* <TxtImgSec {...TEXT_IMAGE_SEC_DATA} /> */}
      {/* <RightImgTextSec {...RIGHT_SEC_DATA} /> */}
      <VerticalSnapCarousel />
    </main>
  );
}

export default MusicSoundDesign;

function WorkShowcase() {
  const PROJECT_LIST = [
    [
      {
        name: "I DREAM IN CODE",
        span: 4,
        src: "/audio/I_DREAM_IN_CODE.mp3",
        image: "/images/tth-a.jpg",
      },

      {
        name: "MESSY ME MONOLOGUE",
        span: 4,
        src: "/audio/MESSY_ME_MONOLOGUE.mp3",
        image: "/images/disc-sm-b.png",
      },
      {
        name: "BELLE MUST GO",
        span: 4,
        src: "/audio/BELLE_MUST_GO.mp3",
        image: "/images/four.jpg",
      },
      {
        name: "THE WEDDING VOW - LEADWAY",
        span: 4,
        src: "/audio/THE_WEDDING_VOW_LEADWAY.mp3",
        image: "/images/hallalujah.jpg",
      },
    ],
  ];

  return (
    <section className="bg-mid-bg">
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-sm uppercase tracking-wide">OUR WORKS</p>
            <h3 className="m-0 p-0 max-w-[1000px] text-center">
              Audio samples from Our{" "}
              <em className="font-instrumental-serif">Client Collaborations</em>
            </h3>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            {PROJECT_LIST.map((row, i) => (
              <div key={i} className="mx-auto w-full flex justify-center">
                <div className="block xl:grid w-full grid-cols-8 md:gap-4">
                  {row.map((item, idx) => (
                    <div
                      // data-cursor-target
                      // data-cursor-text="PLAY AUDIO"
                      className="mt-3 xl:mt-0 rounded-lg overflow-hidden"
                      key={idx}
                      style={{
                        gridColumn: `span ${item.span} / span ${item.span}`,
                      }}
                    >
                      <SpotifyPlayback
                        src={item.src}
                        name={item.name}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
