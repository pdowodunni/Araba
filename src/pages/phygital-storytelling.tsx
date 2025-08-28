import AuxHeader from "../components/shared/aux-header";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import SlideUpButton from "../components/shared/slide-up-button";
import LogoCarousel from "../components/shared/logo-carousel";
import VerticalSnapCarousel from "../components/shared/testimonial";
import { type Item } from "../components/shared/card-slider";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import { Holder } from "../components/shared/case-study/index-gird-list";
import TxtVidSecSmRight from "../components/shared/layout/text-video-sm-right";
import TxtVidSecSmLeft from "../components/shared/layout/text-video-sm-left";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import NumberedPoint from "../components/shared/numbered-points";

function PhygitalStorytelling() {
  /* ===== DATA ===== */

  const ABOUT_PHYGITAL_STORYTELLING = {
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

  const WHAT_YOU_GET = {
    heading: "Why This Matters",
    subheading: (
      <h3>
        Stories outlive <em className="font-instrumental-serif">statistics.</em>
      </h3>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <p className="p-lg">
          Your audience won't remember the agenda. But they'll remember how your
          event made them feel.
        </p>
        <p className="p-lg">
          When funders, partners, or future participants ask what impact your
          event created, you'll have a story to show, not just a report to send.
        </p>
      </div>
    ),
  };

  const WHAT_MAKES_THIS_DIFFERENT = {
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
        <div>
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li className="text-lg">Reflect the energy of the event</li>
            <li className="text-lg">Drive community memory</li>
            <li className="text-lg">Spark FOMO for the next edition</li>
            <li className="text-lg">
              Help attract funders and future partners
            </li>
            <li className="text-lg">
              Leave a footprint beyond location and time
            </li>
          </ul>
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

  const WHAT_YOU_GET__RIGHT_VIDEO = {
    heading: "what you get",
    subheading: <div />,
    text: (
      <div className="flex flex-col gap-3">
        <p className="">
          <em className="font-interTight-semibold">Cinematic,</em> story-driven
          event documentation
        </p>
        <p className="">
          Content optimised for{" "}
          <em className="font-interTight-semibold">
            YouTube, Instagram, LinkedIn, TikTok
          </em>
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

  const WHO_IS_THIS_FOR = {
    heading: "who is this for",
    subheading: <div />,
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
          ].map((itm, idx) => (
            <div key={idx}>
              <Holder index={`${idx + 1}`} text={itm} />
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const SCROLL_ITEMS: Item[] = [
    { backgroundLink: "/images/13.jpg", text: "Web development" },
    { backgroundLink: "/images/110.jpg", text: "Design" },
    { backgroundLink: "/images/17.jpg", text: "Voice Over" },
    { backgroundLink: "/images/111.jpg", text: "Story telling" },
    { backgroundLink: "/images/15.jpg", text: "Mark Up" },
    { backgroundLink: "/images/18.jpg", text: "Antopoly study" },
    { backgroundLink: "/images/14.jpg", text: "Sound design" },
    { backgroundLink: "/images/13.jpg", text: "Web development" },
    { backgroundLink: "/images/110.jpg", text: "Design" },
    { backgroundLink: "/images/17.jpg", text: "Voice Over" },
    { backgroundLink: "/images/111.jpg", text: "Story telling" },
    { backgroundLink: "/images/15.jpg", text: "Mark Up" },
    { backgroundLink: "/images/18.jpg", text: "Antopoly study" },
    { backgroundLink: "/images/14.jpg", text: "Sound design" },
  ];

  const PHYGITAL_STORYTELLING = {
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

  const WHATS_INCLUDED = [
    {
      head: "Pre-Event Planning",
      text: (
        <div className="flex flex-col gap-4">
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
            <li>Discovery call + story strategy session</li>
            <li>Moodboard + narrative map (What story are we telling?)</li>
            <li>Platform planning (Where does this story live and how?)</li>
            <li>Creative direction + team assignment</li>
          </ul>
        </div>
      ),
    },
    {
      head: "On-Ground Execution",
      text: (
        <div className="flex flex-col gap-4">
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
            <li>Video coverage (human-centered, not just highlights)</li>
            <li>Interviews with key participants and organizers</li>
            <li>Presenter-style reporting (optional)</li>
            <li>B-roll capturing energy, emotions, and moments</li>
            <li>
              Photography add-on (for memories + social + future marketing)
            </li>
          </ul>
        </div>
      ),
    },
    {
      head: "Post-Event Storytelling",
      text: (
        <div className="flex flex-col gap-4">
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
            <li>
              Social-first content for Instagram, TikTok, LinkedIn, YouTube
            </li>
            <li>
              Short-form edits (30s–3 mins) that build presence + provoke
              emotion
            </li>
            <li>A cinematic event documentary (2–7 mins depending on scope)</li>
            <li>Testimonials, bite-sized reactions, and audio snippets</li>
            <li>Story copywriting (captions, quotes, headlines)</li>
            <li>Dedicated folder for future reuse</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Add-Ons (Optional but Game-Changing)",
      text: (
        <div className="flex flex-col gap-4">
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
            <li>Live tweeting and real-time social coverage</li>
            <li>Event soundtrack or audio storytelling</li>
            <li>Podcast-style post-event reflections</li>
            <li>Visual branding templates and overlays</li>
            <li>Campaign design to repurpose the content over 3–6 months</li>
          </ul>
        </div>
      ),
    },
  ];

  const WHAT_YOU_GET__RIGHT_IMAGE = {
    heading: "what you get",
    subheading: <div />,
    text: (
      <div className="flex flex-col gap-3">
        {[
          "A full storytelling team (directors, writers, producers, editors)",
          "Up to 50+ content pieces across formats",
          "A documentary-style film",
          "Social media buzz + storytelling that resonates",
          "An emotional, evergreen asset that lives far beyond the event",
        ].map((itm, idx) => (
          <NumberedPoint
            key={idx}
            item={itm}
            idx={idx}
            itemClassName={"p-lg"}
          />
        ))}
      </div>
    ),
  };

  /* ===== RENDER ===== */

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        backgroundImageLink="/images/21.jpg"
        sHeading="CREATIVE SERVICES"
        {...PHYGITAL_STORYTELLING}
      />

      <div className="mx-container py-sm-pad flex flex-col gap-15">
        <span className="s-heading flex justify-center text-sm">
          Trusted by 50+ of the world's biggest brands
        </span>
        <div className="flex justify-center items-center">
          <LogoCarousel />
        </div>
      </div>

      <TxtImgSec {...ABOUT_PHYGITAL_STORYTELLING} />

      <TxtVidSecSmRight
        {...WHAT_YOU_GET__RIGHT_VIDEO}
        videoLink="/video/video.mp4"
      />

      <TxtVidSecSmLeft {...WHO_IS_THIS_FOR} videoLink="/video/video.mp4" />

      <TxtImgSec {...WHAT_MAKES_THIS_DIFFERENT} />

      <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="s-heading">What's Included</p>
              <h5 className="">
                We customise based on your goals, but here's a glimpse into the
                modular layers we offer:
              </h5>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={WHATS_INCLUDED} />
            </div>
          </div>
        </div>
      </section>

      <RightImgTextSec {...WHAT_YOU_GET__RIGHT_IMAGE} />

      <TxtImgSec {...WHAT_YOU_GET} />

      <VerticalSnapCarousel />
    </main>
  );
}

export default PhygitalStorytelling;
