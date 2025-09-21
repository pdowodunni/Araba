import BrandCarousel from "../components/hero/brand-carousel";
import WorkShowcase from "../components/hero/our-work";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import IndxGrdLt from "../components/shared/case-study/index-gird-list";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import TxtVidSecSmRight from "../components/shared/layout/text-video-sm-right";
import LogoCarousel from "../components/shared/logo-carousel";
import NumberedPoint from "../components/shared/numbered-points";
import SlideUpButton from "../components/shared/slide-up-button";

function AudiobookProduction() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>AUDIOBOOK PRODUCTION</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-5 max-w-[650px]">
        <p className="text-white font-instrumental-serif text-start xl:text-xl">
          “My Book Is Great... But No I'm Still Unknown.”
        </p>
        <p className="text-white text-start xl:text-xl">
          Transform your book into an immersive audio experience.
        </p>
        <ul className="pl-5 list-disc xl:text-xl flex flex-col gap-2 text-white">
          <li>Authentic narration — your voice or a perfectly matched pro</li>
          <li>Cinematic sound — music and sound design that serve the story</li>
          <li>End-to-end production — direction, editing, mastering</li>
          <li>Ready for everywhere — Audible, Spotify, Apple, and more</li>
        </ul>
        <p className="text-white text-start xl:text-xl">
          Turn print into presence. Make every word felt.
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

  /* ===== WHAT YOU GET DATA ===== */
  const WHAT_YOU_GET_DATA = [
    {
      text: (
        <div>
          <h5>End-to-End Audiobook Production</h5>
          <p className="p-lg">
            We take your story from script to studio to Streaming. You don’t
            need to stress the how—we handle everything.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <h5>Voice Coaching or Casting</h5>
          <p className="p-lg">
            Whether it’s your voice or one from our curated roster, we coach,
            direct, or cast for the right sound.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <h5>Global Distribution</h5>
          <p className="p-lg">
            We take your story from script to studio to Streaming. You don’t
            need to stress the how—we handle everything.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <h5>Optional Immersive Sound Design</h5>
          <p className="p-lg">
            Transform your book into an audio drama or cinematic journey with
            layered sound, music, and emotion.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <h5>Marketing Content Bundle</h5>
          <p className="p-lg">
            We create audiograms, reels, and promo assets to help you drive
            listens, sales, and visibility.
          </p>
        </div>
      ),
    },
  ];

  const IS_THIS_YOU = {
    heading: "Is This You?",
    subheading: <div />,
    text: (
      <div className="flex flex-col gap-3">
        <h5 className="">
          You wrote the book. You told your story. But now what?
        </h5>
        <div className="flex flex-col gap-3 mt-3">
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

  /* ===== CLIENTS DATA ===== */
  const WHATS_INCLUDED = [
    {
      head: "Essentials",
      text: (
        <div>
          {[
            "Strategy & creative direction session",
            "Book format analysis and adaptation plan (narrative, dramatic, hybrid)",
            "Voice casting (or coaching the author to record their voice)",
            "Directed studio recording sessions",
            "Professional editing and proofing",
            "Optional immersive sound design",
            "Distribution via major platforms (Audible, Spotify, Apple Books, etc.)",
          ].map((item, idx) => (
            <NumberedPoint
              key={idx}
              item={item}
              idx={idx}
              itemClassName="p-lg"
            />
          ))}
        </div>
      ),
    },
    {
      head: "Add-Ons",
      text: (
        <div>
          {[
            "10–15 custom marketing assets (audiograms, reels, quote cards)",
            "1-month paid traffic campaign to drive listens/sales",
            "Lead magnet creation & email funnel strategy",
          ].map((item, idx) => (
            <NumberedPoint
              key={idx}
              item={item}
              idx={idx}
              itemClassName="p-lg"
            />
          ))}
        </div>
      ),
    },
  ];

  /* ===== ARABA PROCESS DATA ===== */
  const ARABA_PROCESS_DATA = [
    {
      head: "STEP 1: DISCOVERY & CREATIVE DIRECTION",
      text: (
        <div className="flex flex-col gap-2">
          <p className="p-lg">
            Whether you have a print book, an ebook, or just an idea, we begin
            with a session to understand your goals by reviewing your manuscript
            or concept. Our team of story strategists assesses:
          </p>
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>The theme and intention of your book</li>
              <li>The emotional tone and storytelling style</li>
              <li>Your audience and goals (impact, revenue, reach)</li>
            </ul>
          </div>
          <p className="p-lg">
            Then, we guide you through selecting the{" "}
            <em className="font-interTight-semibold">best audio format:</em>
          </p>
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>A classic narrated audiobook (with or without the author)</li>
              <li>A narrated audiobook + guest voices</li>
              <li>
                An immersive audio drama with multiple voice actors, sound
                design, and ambient storytelling
              </li>
            </ul>
          </div>
          <p className="p-lg">
            If you're unsure, no worries. We help you choose what works best for
            your story and audience. If needed, we adapt the script for
            performance.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 2: VOICE CASTING & TESTING",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>
                If you want to narrate your own book, we conduct a test read to
                check fluency, performance, and recording suitability.
              </li>
              <li>
                If needed, we recommend trained narrators or cast voice actors
                from our roster.
              </li>
              <li>
                We also work with authors who already have a narrator (as long
                as quality standards are met).
              </li>
            </ul>
          </div>
          <p className="p-lg">
            You don't have to worry about casting or direction. We handle it.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 3: STUDIO RECORDING",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>You (or your narrator) step into a studio.</li>
              <li>
                Our voice director ensures performance flows with emotion,
                clarity, and authenticity.
              </li>
              <li>A diction coach sits in for pronunciation and fluency.</li>
              <li>
                Recordings typically take 2–5 sessions, depending on the length
                and complexity of the book.
              </li>
            </ul>
          </div>
          <p className="p-lg">
            We guide you every step so even first-time narrators shine.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 4: POST-PRODUCTION & SOUND DESIGN",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>
                Each book goes through a detailed post-production process
                handled by 2 engineers: an editor & mastering engineer and a
                quality control spot check engineer. Audio engineers edit,
                clean, and master the recording.
              </li>
              <li>
                Our expert team ensures audiobook files are prepared in
                accordance with distribution specifications.
              </li>
              <li>
                Optional: Depending on the chosen format, we layer immersive
                sound design to dramatize scenes or enhance atmosphere (optional
                but impactful).
              </li>
            </ul>
          </div>
          <p className="p-lg">
            You review the draft. We tweak until it's just right.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 5: MARKETING CONTENT CREATION",
      text: (
        <div className="flex flex-col gap-2">
          <p className="p-lg">
            We produce{" "}
            <em className="font-interTight-semibold">
              10–15 pieces of scroll-stopping content:
            </em>
          </p>
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>Audiograms</li>
              <li>Reels and short skits</li>
              <li>Quote cards</li>
              <li>Behind-the-scenes audio moments</li>
            </ul>
          </div>
          <p className="p-lg">
            This helps you build buzz, increase curiosity, and drive listeners
            to your audiobook.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 6: DISTRIBUTION & LAUNCH",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>
                We upload your audiobook on your behalf via our publishing
                partner.
              </li>
              <li>
                Platforms include Audible, Spotify, Apple Books, Google Play,
                Audiobooks.com, and more.
              </li>
              <li>You get a unified dashboard to track performance.</li>
            </ul>
          </div>
          <p className="p-lg">
            Your audiobook typically goes live within 4–6 weeks of approval.
          </p>
        </div>
      ),
    },
    {
      head: "STEP 7 (OPTIONAL): TRAFFIC & GROWTH",
      text: (
        <div className="flex flex-col gap-2">
          <p className="p-lg">
            Want to reach even more people? We offer optional support to:
          </p>
          <div>
            <ul className="pl-10 list-disc p-lg flex flex-col gap-1 mt-3">
              <li>Run highly targeted social ads</li>
              <li>Capture email leads and drive pre-orders or sales</li>
              <li>Grow your book’s community from launch week onward</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="CREATIVE SERVICES"
        backgroundImageLink="/images/AudioExperiences.png"
        {...AUX_HEADER_DATA}
      />

      <BrandCarousel />

      <TxtVidSecSmRight {...IS_THIS_YOU} videoLink="/video/video.mp4" />

      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              What you get
            </span>

            <div>
              <IndxGrdLt data={WHAT_YOU_GET_DATA} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mid-bg">
        <div className="mx-container ">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">PACKAGE</p>
              <h3 className="m-0 p-0 max-w-[700px]">
                So, What’s Included{" "}
                <em className="font-instrumental-serif">
                  (Essentials + Add-Ons)
                </em>
              </h3>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={WHATS_INCLUDED} />
            </div>
          </div>
        </div>
      </section>

      <WorkShowcase />

      <section className="">
        <div className="mx-container ">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">HOW WE WORK</p>
              <h3 className="m-0 p-0 max-w-[790px]">
                The Araba Process:{" "}
                <em className="font-instrumental-serif">How It Works</em>
              </h3>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={ARABA_PROCESS_DATA} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AudiobookProduction;
