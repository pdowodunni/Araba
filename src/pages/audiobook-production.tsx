import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import BrandCarousel from "../components/hero/brand-carousel";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import IndxGrdLt from "../components/shared/case-study/index-gird-list";
import TxtVidSecSmRight from "../components/shared/layout/text-video-sm-right";
import NumberedPoint from "../components/shared/numbered-points";
import SlideUpButton from "../components/shared/slide-up-button";
import gsap from "gsap";
import { ChevronDown, Plus } from "lucide-react";
import { Coach, EndToEnd, Global, Market, Voice } from "../assets/icons";
import ThreeImgCrdRow from "../components/shared/case-study/3-image-card-row";
import OneImgCrd from "../components/shared/case-study/1-image-card";
import SpotifyPlayback from "../components/spotify-playback";

function AudiobookProduction() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>AUDIOBOOK PRODUCTION</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-2 max-w-[1050px]">
        <p className="text-white p-lg font-instrumental-serif text-start">
          “My Book Is Great... But No I'm Still Unknown.”
        </p>
        <p className="text-white text-start p-lg">
          Remember when you decided to write that book? You wrote it to live. To
          breathe. To move people.
        </p>
        <div>
          <p className="text-white text-start p-lg">Now picture this:</p>
          <ul className="pl-5 list-disc xl:text-xl flex flex-col gap-2 text-white">
            <li>Your book read in your voice, or one that tells the story.</li>
            <li>Infused with the emotional touch of sound design...</li>
            <li> …and have people everywhere listen on the go</li>
          </ul>
        </div>

        <p className="text-white text-start p-lg">
          Welcome to the{" "}
          <em className="font-interTight-semibold">
            Araba Audiobook-to-Audio Experience
          </em>
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
      head: "End-to-End Audiobook Production",
      Icon: EndToEnd,
      text: (
        <div>
          <p className="p-lg">
            We take your story from script to studio to Streaming. You don't
            need to stress the how—we handle everything.
          </p>
        </div>
      ),
    },
    {
      head: "Voice Coaching or Casting",
      Icon: Coach,
      text: (
        <div>
          <p className="p-lg">
            Whether it's your voice or one from our curated roster, we coach,
            direct, or cast for the right sound.
          </p>
        </div>
      ),
    },
    {
      head: "Global Distribution",
      Icon: Global,
      text: (
        <div>
          <p className="p-lg">
            We take your story from script to studio to Streaming. You don’t
            need to stress the how—we handle everything.
          </p>
        </div>
      ),
    },
    {
      head: "Optional Immersive Sound Design",
      Icon: Voice,
      text: (
        <div>
          <p className="p-lg">
            Transform your book into an audio drama or cinematic journey with
            layered sound, music, and emotion.
          </p>
        </div>
      ),
    },
    {
      head: "Marketing Content Bundle",
      Icon: Market,
      text: (
        <div>
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
            "No one’s buying it.",
            "You’re struggling to get it into new hands.",
            "You’re busy, and recording it yourself sounds like a tech nightmare.",
            "You want to monetise your message and grow a bigger audience.",
            "You want a powerful product that reflects your voice, values, and vision.",
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
      id: 1,
      q: "STEP 1: DISCOVERY & CREATIVE DIRECTION",
      a: (
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
      id: 2,
      q: "STEP 2: VOICE CASTING & TESTING",
      a: (
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
      id: 3,
      q: "STEP 3: STUDIO RECORDING",
      a: (
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
                Recordings typically take 2-5 sessions, depending on the length
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
      id: 4,
      q: "STEP 4: POST-PRODUCTION & SOUND DESIGN",
      a: (
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
      id: 5,
      q: "STEP 5: MARKETING CONTENT CREATION",
      a: (
        <div className="flex flex-col gap-2">
          <p className="p-lg">
            We produce{" "}
            <em className="font-interTight-semibold">
              10-15 pieces of scroll-stopping content:
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
      id: 6,
      q: "STEP 6: DISTRIBUTION & LAUNCH",
      a: (
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
            Your audiobook typically goes live within 4-6 weeks of approval.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      q: "STEP 7 (OPTIONAL): TRAFFIC & GROWTH",
      a: (
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

  // LOGICS
  const midpoint = Math.ceil(ARABA_PROCESS_DATA.length / 2);
  const leftGroups = ARABA_PROCESS_DATA.slice(0, midpoint);
  const rightGroups = ARABA_PROCESS_DATA.slice(midpoint);

  const [openId, setOpenId] = useState<number | null>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement>>({});
  const iconRefs = useRef<Record<number, SVGSVGElement>>({});

  useLayoutEffect(() => {
    ARABA_PROCESS_DATA.forEach(({ id }) => {
      const ans = answerRefs.current[id];
      if (ans) gsap.set(ans, { height: 0, opacity: 0 });
    });
  }, []);

  const closeItem = (id: number) => {
    const ans = answerRefs.current[id];
    const icon = iconRefs.current[id];
    if (!ans || !icon) return;
    gsap.to(ans, { height: 0, opacity: 0, duration: 0.3, ease: "power1.in" });
    gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power1.in" });
  };

  const openItem = (id: number) => {
    const ans = answerRefs.current[id];
    const icon = iconRefs.current[id];
    if (!ans || !icon) return;
    gsap.to(ans, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power1.in",
    });
    gsap.to(icon, { rotate: 180, duration: 0.4, ease: "power1.in" });
  };

  const toggle = (id: number) => {
    if (openId === id) {
      closeItem(id);
      setOpenId(null);
    } else {
      if (openId !== null) closeItem(openId);
      openItem(id);
      setOpenId(id);
    }
  };

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="CREATIVE SERVICES"
        backgroundImageLink="/images/tth-10.jpg"
        {...AUX_HEADER_DATA}
      />

      <BrandCarousel />

      <TxtVidSecSmRight
        {...IS_THIS_YOU}
        videoLink="https://youtu.be/F_Q_oKSMDKY"
      />

      <section className="bg-mid-bg">
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-20">
            <span className="s-heading w-full flex justify-center">
              What you get
            </span>

            {/* <div className="mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_YOU_GET_DATA.map(({ head, text, Icon }, idx) => (
                <div key={idx} className="flex gap-3 flex-col items-center">
                  <div className="logo-box">
                    <Icon color="#0a221f" />
                  </div>
                  <h5 className="p-0 m-0 font-interTight-medium text-center">
                    {head}
                  </h5>
                  <div className="text-center">{text}</div>
                </div>
              ))}
            </div> */}

            {/* NEW LINE */}

            <div
              className="grid gap-y-12 gap-x-8 
                        sm:grid-cols-2 
                        md:grid-cols-6 
                        items-start"
            >
              {WHAT_YOU_GET_DATA.map(({ head, text, Icon }, idx) => {
                let classes =
                  "flex flex-col items-center text-center space-y-4 sm:px-4";
                if (idx < 3) classes += " md:col-span-2";
                if (idx === 3) classes += " md:col-start-2 md:col-span-2";
                if (idx === 4) classes += " md:col-start-4 md:col-span-2";
                return (
                  <div key={idx} className={classes}>
                    <div key={idx} className="flex gap-3 flex-col items-center">
                      <div className="logo-box">
                        <Icon color="#0a221f" />
                      </div>
                      <h5 className="p-0 m-0 font-interTight-medium text-center">
                        {head}
                      </h5>
                      <div className="text-center">{text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-mid-bg">
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
      </section> */}

      <WorkShowcase />

      <section>
        <div>
          <ThreeImgCrdRow
            imagesUrl={[
              "/images/casestudy/tth-1.webp",
              "/images/casestudy/tth-4.webp",
              "/images/casestudy/tth-6.webp",
            ]}
          />
          <OneImgCrd
            assetLink="/images/casestudy/tth-7.webp"
            assetType="image"
          />
        </div>
      </section>

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
            {/* <div>
              <TwoRowGrdTxtHolder data={ARABA_PROCESS_DATA} />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
              {[leftGroups, rightGroups].map((groups, idx) => (
                <div key={idx} className="space-y-6">
                  {groups.map(({ id, q, a }) => (
                    <div
                      key={id}
                      className="border-b border-primary py-4 cursor-pointer"
                    >
                      <button
                        type="button"
                        aria-expanded={openId === id}
                        onClick={() => toggle(id)}
                        className="w-full grid grid-cols-[1fr_30px] cursor-pointer gap-5 items-center text-left"
                      >
                        <p className="text-3xl">{q}</p>
                        <ChevronDown
                          size={28}
                          strokeWidth={1.5}
                          ref={(el) => {
                            if (el) iconRefs.current[id] = el;
                          }}
                          className="transition-transform"
                        />
                      </button>
                      <div
                        ref={(el) => {
                          if (el) answerRefs.current[id] = el;
                        }}
                        className="overflow-hidden mt-2"
                      >
                        <div className="py-2">{a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AudiobookProduction;

function WorkShowcase() {
  const PROJECT_LIST = [
    [
      {
        name: "A Tale of Two Houes",
        span: 2,
        src: "/audio/tth.mp3",
        image: "/images/tth-a.jpg",
      },

      {
        name: "A Story of Yuri Kochiama",
        span: 2,
        src: "/audio/yori.mp3",
        image: "/images/disc-sm-b.png",
      },
      {
        name: "DEBBY - Real Person Narration",
        span: 4,
        src: "/audio/narration.mp3",
        image: "/images/four.jpg",
      },
      {
        name: "If Wallas Couls Speak (HAVILAH)",
        span: 4,
        src: "/audio/wallascoules.mp3",
        image: "/images/hallalujah.jpg",
      },
      {
        name: "AI Playbook Excerpt",
        span: 4,
        src: "/audio/ai_playbook.mp3",
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
