import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Bulb, Clipper, Mic, Script, Video, Voice } from "../assets/icons";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import IndxGrdLt from "../components/shared/case-study/index-gird-list";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import LogoCarousel from "../components/shared/logo-carousel";
import ScrollReveal from "../components/shared/scrool-reveal";
import { ShowCaseCardHorizontal } from "../components/shared/showcase-card-horizontal";
import SlideUpButton from "../components/shared/slide-up-button";
import VerticalSnapCarousel from "../components/shared/testimonial";
import SpotifyPlayback from "../components/spotify-playback";
import BrandCarousel from "../components/hero/brand-carousel";

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
      text: "Commercials & Radio Ads",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Explainers",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Corporate Narration",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "E-learning",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "IVR",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Character / Animation",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Documentary Voiceovers",
    },
    {
      backgroundLink: "/images/13.jpg",
      text: "Commercials & Radio Ads",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Explainers",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Corporate Narration",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "E-learning",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "IVR",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Character / Animation",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Documentary Voiceovers",
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
      head: "Concepting",
      Icon: Bulb,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Original Ideas and scriptwriting based on your brief
          </p>
        </div>
      ),
    },
    {
      head: "Script Consulting",
      Icon: Script,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            You send us the rough. We send you something tight, clean, and
            emotionally magnetic. Every word earns its place.
          </p>
        </div>
      ),
    },
    {
      head: "Voice casting",
      Icon: Mic,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            NO MORE RANDOM VOICES. We curate from our private talent pool, scout
            through partner agencies,
          </p>
        </div>
      ),
    },
    {
      head: "Live direction",
      Icon: Clipper,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            We coach and direct talents live so you don't have to. One session.
            Fewer edits. Better delivery.
          </p>
        </div>
      ),
    },
    {
      head: "Production",
      Icon: Video,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Recording, mixing, mastering done with love, precision, and our
            trusted studio partners.
          </p>
        </div>
      ),
    },
    {
      head: "Multilingual & Cultural Matching",
      Icon: Voice,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Whether it's Yoruba, Igbo, Swahili, Arabic, French, Hausa, or
            Transatlantic, we work with native.
          </p>
        </div>
      ),
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

      <BrandCarousel />
      {/* <TxtImgSec {...ENGINEERED_EMOTION} /> */}
      <section
        style={{
          backgroundImage: "url('/images/n-b-l.png')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
        className="bg-primary text-light-bg"
      >
        <div className="mx-container">
          <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-sm uppercase tracking-wide">WHY US</p>
              <h3 className="m-0 p-0 max-w-[700px] text-center">
                Here’s Why Clients Choose Us{" "}
                <em className="font-instrumental-serif">(Again and Again)</em>
              </h3>
            </div>
            <div>
              {/* <TwoRowGrdTxtHolder data={WHATS_INCLUDED} /> */}
              <div className="mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {WHATS_INCLUDED.map(({ head, text, Icon }, idx) => (
                  <div key={idx} className="flex gap-3 flex-col items-center">
                    <div className="logo-box-fill">
                      <Icon color="#0a221f" />
                    </div>
                    <h5 className="p-0 m-0 font-interTight-medium text-center">
                      {head}
                    </h5>
                    <div>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkShowcase />

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

function WorkShowcase() {
  const PROJECT_LIST = [
    [
      {
        name: "AI Player Excerpt",
        span: 2,
        src: "/audio/ai_playbook.mp3",
        image: "/images/tth-a.jpg",
      },

      {
        name: "I still dream in code",
        span: 2,
        src: "/audio/i_still_dream_code.mp3",
        image: "/images/disc-sm-b.png",
      },
      {
        name: "Leadway Assurance Final",
        span: 2,
        src: "/audio/leadway_assurance.mp3",
        image: "/images/four.jpg",
      },
      {
        name: "Light and Fire Promotion",
        span: 2,
        src: "/audio/light_fire.mp3",
        image: "/images/hallalujah.jpg",
      },
      {
        name: "One Day NIKE Promo",
        span: 2,
        src: "/audio/one_day_nike.mp3",
        image: "/images/22.jpg",
      },
      {
        name: "Quickbooks Online",
        span: 2,
        src: "/audio/quickbooks_online.mp3",
        image: "/images/22.jpg",
      },
      {
        name: "The Project 100 by the Development School Africa",
        span: 2,
        src: "/audio/project_100.mp3",
        image: "/images/22.jpg",
      },
      {
        name: "Think Travel Think Wakanow",
        span: 2,
        src: "/audio/wakanow.mp3",
        image: "/images/22.jpg",
      },
    ],
  ];

  return (
    <section
    // className="text-light-bg bg-primary"
    >
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-sm uppercase tracking-wide">WORKS</p>
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
