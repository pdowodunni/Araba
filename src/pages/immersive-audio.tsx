import AuxHeader from "../components/shared/aux-header";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import ProdGrdSec from "../components/shared/layout/producion-grid-sec";
import LeftImgTextSec from "../components/shared/layout/left-img-txt-sec";
import SlideUpButton from "../components/shared/slide-up-button";
import { Percent, Rocket, Shuffle, TriangleRight } from "lucide-react";
import LogoCarousel from "../components/shared/logo-carousel";
import VerticalSnapCarousel from "../components/shared/testimonial";
import { type Item } from "../components/shared/card-slider";
import WorkShowcase from "../components/hero/our-work";
import TwoRowGrdTxtHolder from "../components/shared/2-row-grid-text-holder";

function ImmersiveAudio() {
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

  const TEXT_IMAGE_SEC_DATA = {
    heading: "BUILT FOR THE SENSES",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        From spatial sound to sonic textures, make your{" "}
        <em className="font-instrumental-serif">audience feel every detail.</em>
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <p className="p-lg">We understand how sound moves people…literally.</p>
        <p className="p-lg">
          From spatial storytelling to reactive soundscapes, our immersive and
          experiential audio services are built to create felt moments. We
          design sonic worlds that go beyond hearing into memory, mood, and
          movement.
        </p>
        <p className="p-lg">
          Whether it’s a live installation, interactive exhibit, 3D podcast, or
          sensory-driven digital experience, we help brands not just sound good,
          but feel unforgettable.
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
    heading: "Sound That Drives ROI",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        Why This Matters to You <br />
        <em className="font-instrumental-serif">(The ROI Part)</em>
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-3">
        <p className="">
          <em className="font-interTight-semibold">More Time Spent</em> Sound
          keeps people engaged longer than visuals alone.
        </p>
        <p className="">
          <em className="font-interTight-semibold">Higher Recall</em>{" "}
          Emotionally charged audio improves memory & message retention.
        </p>
        <p className="">
          <em className="font-interTight-semibold">Deeper Connection</em>{" "}
          Immersive sound creates feelings. And feelings build brands.
        </p>
        <p className="">
          <em className="font-interTight-semibold">Repeat Interactions</em>{" "}
          Sonic experiences trigger nostalgia, curiosity, and loyalty.
        </p>
        <p className="">
          <em className="font-interTight-semibold">Post-Event Impact</em> People
          talk about how they felt. That's what gets shared.
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
        <span>Immersive & Experiential Audio</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-5 max-w-[650px]">
        <p className="text-white font-instrumental-serif text-start xl:text-xl">
          “Not everything needs a screen. Some journeys start with sound”.
        </p>
        <p className="text-white text-start xl:text-xl">
          If the installation wowed but didn’t hold, the app launched but
          churned, or the podcast felt flat—the missing piece is sound. Most
          brands over-index on visuals and overlook the emotional pull of
          immersive audio. We’re not for everyone. If you want sound that truly
          moves people, you’re in the right place.
        </p>
      </div>
    ),
  };

  const TWO_GRD_DATA = [
    {
      head: "3D & Spatial Audio Design",
      text: (
        <div className="flex flex-col gap-4">
          <h5 className="font-interTight-semibold">
            Sound that surrounds, responds, and moves with your audience.
          </h5>
          <p className="p-lg">
            Perfect for virtual experiences and physical installations, we craft
            audio that wraps around the listener in real time.
          </p>
          <div>
            <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
              <li>
                Spatial mixing for{" "}
                <em className="font-interTight-semibold">
                  directional movement, elevation, and immersion
                </em>
              </li>
              <li>
                Enhances{" "}
                <em className="font-interTight-semibold">
                  interactive storytelling, branded content, and digital
                  environments
                </em>
              </li>
              <li>
                Ideal for{" "}
                <em className="font-interTight-semibold">
                  headset experiences, immersive apps,
                </em>{" "}
                and experiential zones
              </li>
              <li>
                Built with tools like Dolby Atmos, ambisonic formats, and
                binaural audio
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      head: "Audio Dramas & Fiction Podcasts",
      text: (
        <div className="flex flex-col gap-4">
          <h5 className="font-interTight-semibold">
            Stories that live in your imagination, built entirely through sound.
          </h5>
          <p className="p-lg">
            From cinematic thrillers to branded narratives, we produce immersive
            fiction that feels like a film without the screen.
          </p>
          <div>
            <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
              <li>
                <em className="font-interTight-semibold">Script development</em>{" "}
                with rich character arcs and sound-first pacing
              </li>
              <li>
                <em className="font-interTight-semibold">
                  {" "}
                  Voice casting & direction
                </em>{" "}
                to bring every role to life
              </li>
              <li>
                Layered{" "}
                <em className="font-interTight-semibold">sound design</em> for
                atmosphere, emotion, and suspense
              </li>
              <li>
                Full production from{" "}
                <em className="font-interTight-semibold">
                  recording to editing to mastering
                </em>
              </li>
              <li>
                Available for{" "}
                <em className="font-interTight-semibold">
                  Spotify, Apple, Audible, and private platforms
                </em>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      head: "Meditation & Wellness Audio",
      text: (
        <div className="flex flex-col gap-4">
          <h5 className="font-interTight-semibold">
            Sound that grounds, heals, and holds space.
          </h5>
          <p className="p-lg">
            We create audio for mind-body rituals, emotional clarity, and inner
            journeys.
          </p>
          <div>
            <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
              <li>
                <em className="font-interTight-semibold">
                  Custom-written affirmations,
                </em>{" "}
                meditations, and mindfulness scripts
              </li>
              <li>
                <em className="font-interTight-semibold">
                  {" "}
                  Voiceovers in calming tones
                </em>{" "}
                across multiple languages and accents
              </li>

              <li>
                Curated{" "}
                <em className="font-interTight-semibold">
                  soundscapes with healing frequencies
                </em>{" "}
                (e.g., 528Hz, 432Hz)
              </li>
              <li>
                Tailored for{" "}
                <em className="font-interTight-semibold">
                  mental health, fitness, and spiritual brands
                </em>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      head: "Interactive Sound Installations",
      text: (
        <div className="flex flex-col gap-4">
          <h5 className="font-interTight-semibold">
            Sound as experience. Sound as art. Sound a conversation.
          </h5>
          <p className="p-lg">
            We bring your physical spaces to life through audio that reacts,
            provokes, and inspires.
          </p>
          <div>
            <ul className="pl-5 list-disc p-lg flex flex-col gap-2">
              <li>
                <em className="font-interTight-semibold">
                  Custom compositions
                </em>{" "}
                for art exhibitions, museums, and branded installations
              </li>
              <li>
                Designed for{" "}
                <em className="font-interTight-semibold">
                  pop-ups, product launches, retail stores, and public art
                </em>
              </li>

              <li>
                Scaled for both{" "}
                <em className="font-interTight-semibold">
                  intimate headphone zones
                </em>{" "}
                or{" "}
                <em className="font-interTight-semibold">
                  large venue surround systems
                </em>
              </li>
              <li>
                Built in collaboration with artists, engineers, and cultural
                curators
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="">
      <AuxHeader
        listItems={SCROLL_ITEMS}
        backgroundImageLink="/images/20.png"
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
      <WorkShowcase />
      <section>
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
      </section>
      <TxtImgSec {...TEXT_IMAGE_SEC_DATA_TWO} />
      <VerticalSnapCarousel />
    </main>
  );
}

export default ImmersiveAudio;
