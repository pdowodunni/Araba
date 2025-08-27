import AuxHeader from "../components/shared/aux-header";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import SlideUpButton from "../components/shared/slide-up-button";
import LogoCarousel from "../components/shared/logo-carousel";
import VerticalSnapCarousel from "../components/shared/testimonial";
import { type Item } from "../components/shared/card-slider";
import WorkShowcase from "../components/hero/our-work";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import TxtVidSecSmRight from "../components/shared/layout/text-video-sm-right";
import TxtVidSecSmLeft from "../components/shared/layout/text-video-sm-left";
import { Holder } from "../components/shared/case-study/index-gird-list";

function PhygitalStorytelling() {
  const TEXT_IMAGE_SEC_DATA = {
    heading: "About Phygital Storytelling",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        What Is Phygital Storytelling{" "}
        <em className="font-instrumental-serif">Experience?</em>
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <p className="p-lg">
          A human-first approach to immersive event coverage. We go beyond
          highlight reels and create a layered archive of your event, complete
          with video storytelling, presenter-led narratives,
          micro-documentaries, interviews, photo essays, and platform-ready
          social content.
        </p>
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

  const TEXT_IMAGE_SEC_DATA_TWO = {
    heading: "What Makes This Different",
    subheading: (
      <p className="p-lg">
        We go beyond the surface and create layered, emotional, and
        human-centred storytelling. Think mini-documentaries, immersive recaps,
        and social series that:
      </p>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <p className="">
          A human-first approach to immersive event coverage. We go beyond
          highlight reels and create a layered archive of your event, complete
          with video storytelling, presenter-led narratives,
          micro-documentaries, interviews, photo essays, and platform-ready
          social content.
        </p>
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

  const TEXT_VIDEO_SEC_DATA_TWO = {
    heading: "what you get",
    subheading: <div></div>,
    text: (
      <div className="flex flex-col gap-3">
        <p className="">
          <em className="font-interTight-semibold">Cinematic,</em> story-driven
          event documentation
        </p>
        <p className="">
          Content optimised for
          <em className="font-interTight-semibold">
            YouTube, Instagram, LinkedIn, TikTok
          </em>{" "}
        </p>
        <p className="">
          <em className="font-interTight-semibold">
            Strategy-led storytelling
          </em>{" "}
          (aligned with your goals and audience)
        </p>
        <p className="">
          Concept development, Creative story direction, interviews, and photo
          essays.
        </p>
        <p className="">
          Optional presenters, photographers, social media support, and more
        </p>

        <div className="flex gap-4 mt-6">
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

  const TEXT_VIDEO_SEC_DATA_THREE = {
    heading: "who is this for",
    subheading: <div></div>,
    text: (
      <div className="flex flex-col gap-3">
        <p className="p-lg">This offer is designed for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-10 sm:gap-5 lg:gap-5">
          {[
            <p className="">International Development Programs</p>,
            <p className="">NGOs and Nonprofits</p>,
            <p className="">Grant-Funded Innovation Labs</p>,
            <p className="">Fellowship & Exchange Programs</p>,
            <p className="">Corporate Retreats, Internal Events & Summits</p>,
            <p className="">Culture-focused or Movement-centred Events</p>,
            <p className="">Government-backed or Pan-African Initiatives</p>,
            <p className="">Story-rich community or grassroots activations</p>,
          ].map((itm, idx) => {
            return (
              <div key={idx}>
                <Holder index={`${idx + 1}`} text={itm} />
              </div>
            );
          })}
        </div>
        {/* <div className="flex gap-4 mt-6">
          <SlideUpButton
            type="fill"
            bgColor="var(--color-primary)"
            textColor="white"
          >
            Get started
          </SlideUpButton>
        </div> */}
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
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>Phygital Storytelling</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-5 max-w-[650px]">
        <p className="text-white font-instrumental-serif text-start xl:text-xl">
          “Wherever it is happening. However, it is happening. We'll make sure
          it travels far.”
        </p>
        <p className="text-white text-start xl:text-xl">
          Every year, thousands of powerful events happen, fueled by ideas,
          energy, and impact. But all too often, the only thing left behind is a
          blurry group photo and a highlight reel with royalty-free music.
        </p>
        <p className="text-white text-start xl:text-xl">
          Welcome to the Phygital Storytelling Experience.
        </p>
      </div>
    ),
  };

  return (
    <main className="">
      <AuxHeader
        listItems={SCROLL_ITEMS}
        backgroundImageLink="/images/21.jpg"
        sHeading="CREATIVE SERVICES"
        {...AUX_HEADER_DATA}
      />
      <div className="mx-container py-sm-pad flex flex-col gap-15">
        <span className="s-heading flex justify-center text-sm">
          Trusted by 50+ of the world's biggest brands
        </span>
        <div className="flex justify-center items-center">
          {" "}
          <LogoCarousel />
        </div>
      </div>
      <TxtImgSec {...TEXT_IMAGE_SEC_DATA} />
      <TxtVidSecSmRight
        {...TEXT_VIDEO_SEC_DATA_TWO}
        videoLink="/video/video.mp4"
      />
      <TxtVidSecSmLeft
        {...TEXT_VIDEO_SEC_DATA_THREE}
        videoLink="/video/video.mp4"
      />
      <TxtImgSec {...TEXT_IMAGE_SEC_DATA_TWO} />
      {/* <WorkShowcase /> */}
      {/* <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">OUR PROCESS</p>
              <h3 className="m-0 p-0">
                How me make the{" "}
                <em className="font-instrumental-serif">magic happen</em>
              </h3>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={TWO_GRD_DATA} />
            </div>
          </div>
        </div>
      </section> */}
      <VerticalSnapCarousel />
    </main>
  );
}

export default PhygitalStorytelling;
