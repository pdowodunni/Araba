import WorkShowcase from "../components/hero/our-work";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import IndxGrdLt from "../components/shared/case-study/index-gird-list";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import LogoCarousel from "../components/shared/logo-carousel";
import ScrollReveal from "../components/shared/scrool-reveal";
import SlideUpButton from "../components/shared/slide-up-button";
import VerticalSnapCarousel from "../components/shared/testimonial";

function VoiceOver() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>VOICEOVER SERVICES</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-2 max-w-[1000px]">
        <p className="text-white font-instrumental-serif text-start p-lg">
          “In a noisy, fast-scrolling world, only the brands that sound real
          will be remembered.”
        </p>
        <div className="flex flex-col gap-0 my-4">
          <p className="text-white text-start md:text-xl">
            Let's be honest. You've got a message worth hearing! But …
          </p>
          <ul className="pl-5 list-disc xl:text-xl flex flex-col gap-0 mt-2 text-white">
            <li>
              You're stuck using whoever's available, not who fits the story.
            </li>
            <li>
              Your script sounds like a script, not like real people talking.
            </li>
            <li>
              You're wasting time giving feedback, doing pickups, and still not
              getting what you want.
            </li>
            <li>
              You're using AI voice tools… but deep down, you know they're
              missing a soul.
            </li>
          </ul>
        </div>
        <p className="text-white text-start xl:text-xl">
          And that's where we come in.
        </p>
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

  /* ===== ENGINEERED FOR EMOTION ===== */
  const ENGINEERED_EMOTION = {
    heading: "ENGINEERED FOR EMOTION",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        We <em className="font-instrumental-serif">engineer emotion</em> into
        sound.
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <h5 className="leading-tight">
          Whether you're voicing a product, a mission, a moment, or a full-blown
          brand anthem…we help you make it hit home.
        </h5>
        <p className="p-lg">
          From casting to coaching to post-production, we handle the magic
          behind the mic, because when the right voice meets the right emotion,
          people Feel you, Trust you. And they Buy-in.
        </p>

        <div className="flex gap-4">
          <SlideUpButton
            type="fill"
            bgColor="var(--color-primary)"
            textColor="white"
          >
            Let's talk
          </SlideUpButton>
        </div>
      </div>
    ),
  };

  /* ===== CLIENTS DATA ===== */

  const WHATS_INCLUDED = [
    {
      head: "Script polishing that makes you sound human",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            We develop ideas that match tone, intent, and audience crafted for
            emotion, rhythm, and clarity.
          </p>
          <p className="p-lg">
            You send us the rough. We send you something tight, clean, and
            emotionally magnetic. Every word earns its place.
          </p>
        </div>
      ),
    },
    {
      head: "Voice casting that’s Story-first",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Every story deserves the right voice. So,{" "}
            <em className="font-interTight-semibold">NO MORE RANDOM VOICES</em>
          </p>
          <p className="p-lg">
            From edgy to elegant, raspy to refined, bold to soft, quirky to
            calm, we curate from our private talent pool, scout through partner
            agencies, and even coach newcomers if needed.
          </p>
        </div>
      ),
    },
    {
      head: "Live direction that saves you time (and bad takes)",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Your project deserves more than a raw recording.
          </p>
          <p className="p-lg">
            We coach and direct talents live—so you don’t have to. One session.
            Fewer edits. Better delivery.
          </p>
          <p className="p-lg">
            No wasted takes. No flat reads. Just goosebumps.
          </p>
        </div>
      ),
    },
    {
      head: "Production",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Recording, mixing, mastering done with love, precision, and our
            trusted studio partners. We make it sound right, not just loud.
          </p>
        </div>
      ),
    },
    {
      head: "Multilingual & Cultural Matching",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Voiceover isn’t one-size-fits-all. We localize with care and
            culture.
          </p>
          <p className="p-lg">
            Whether it’s Yoruba, Igbo, Swahili, Arabic, French, Hausa, or
            English with a Ghanaian twist, we work with native speakers who
            understand nuance, tone, and regional expression.
          </p>
          <p className="p-lg">Because context is everything.</p>
        </div>
      ),
    },
  ];

  /* ===== WHAT YOU GET DATA ===== */
  const WHAT_YOU_GET_DATA = [
    {
      text: <p className="p-lg">Convert more customers</p>,
    },
    {
      text: <p className="p-lg">Increase brand recall</p>,
    },
    {
      text: <p className="p-lg">Deepen audience trust</p>,
    },
    {
      text: <p className="p-lg">Spark conversations</p>,
    },
    {
      text: <p className="p-lg">And finally sound like them</p>,
    },
  ];

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="AUDIOSTORYTELLING BY SOUNDBAKING COMPANY"
        backgroundImageLink="/images/23.jpg"
        {...AUX_HEADER_DATA}
      />

      <ScrollReveal>
        <div className="mx-container py-sm-pad flex flex-col gap-15">
          <span className="s-heading flex justify-center text-sm">
            Trusted by 50+ of the world's biggest brands
          </span>
          <div className="flex justify-center items-center">
            {" "}
            <LogoCarousel />
          </div>
        </div>
      </ScrollReveal>
      {/* <TxtImgSec {...ENGINEERED_EMOTION} /> */}
      {/* <WorkShowcase /> */}
      <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">WHY US</p>
              <h3 className="m-0 p-0 max-w-[700px]">
                Here’s Why Clients Choose Us{" "}
                <em className="font-instrumental-serif">(Again and Again)</em>
              </h3>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={WHATS_INCLUDED} />
            </div>
          </div>
        </div>
      </section>

      <VerticalSnapCarousel />

      {/* <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">WHAT YOU GET</p>
              <h3 className="m-0 p-0 max-w-[700px]">
                Our clients{" "}
                <em className="font-instrumental-serif">
                  walk away with stories that
                </em>
              </h3>
            </div>
            <div>
              <IndxGrdLt data={WHAT_YOU_GET_DATA} />
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default VoiceOver;
