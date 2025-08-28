import WorkShowcase from "../components/hero/our-work";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import LogoCarousel from "../components/shared/logo-carousel";
import VerticalSnapCarousel from "../components/shared/testimonial";
import OurWork from "./our-work";

function VideoProduction() {
  /* ===== AUXHEADER DATA ===== */
  const PHYGITAL_STORYTELLING = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>VIDEO PRODUCTION</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-5 max-w-[650px]">
        <p className="text-white text-start xl:text-xl">
          Tell captivating visual stories with our video services that cater to
          all needs, from concept to final cut, ensuring every frame captures
          your brand's essence and engages your audience.
        </p>
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

  /* ===== TWO GRID TEXT HOLDER DATA ===== */
  const WHATS_INCLUDED = [
    {
      head: "Brand Marketing Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Brand films, campaigns, and value-driven videos that bring your
            brand voice, tone, and vision to life—with clarity and flair.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Crafted for emotional connection and brand positioning</li>
            <li>Tailored to your mission, values, and audience</li>
            <li>Ideal for campaigns, launches, and rebranding efforts</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Product Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Cut through the noise with video ads that entertain, educate, and
            convert across platforms like YouTube, Instagram, and more.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Built for performance across social and digital channels</li>
            <li>Combines strategy, story, and strong CTA hooks</li>
            <li>Optimised for awareness, leads, or sales</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Customer Testimonials",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Authentic, well-edited testimonial videos that build trust and show
            proof—without sounding staged.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Boosts credibility and drives conversions</li>
            <li>Real people, real stories, real impact</li>
            <li>Shot remotely or on-site, based on your brand feel</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Social Media Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Creative, mobile-first videos that stop the scroll and start a
            conversation, tailored for TikTok, Reels, LinkedIn, and more.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Trend-savvy formats with storytelling at the core</li>
            <li>Quick edits, catchy hooks, branded overlays</li>
            <li>Ideal for campaigns, thought leadership, or UGC collabs</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Documentary Storytelling",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            From sweet wedding stories that spark tears (and laughter), to raw
            social impact docs that drive real action, our style blends
            vlog-like authenticity with emotional depth. And even if all you’ve
            got is old footage—we’ll make it look brand new.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Wedding stories with 100% rewatch value</li>
            <li>SDG, NGO, and brand docs that spark real conversations</li>
            <li>Real, raw, and rooted in culture—just like Araba</li>
            <li>We repurpose, remix, and reimagine your footage</li>
          </ul>
        </div>
      ),
    },
    {
      head: "E-learning Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            <em className="font-interTight-semibold">
              Learning content that doesn't make learners snooze Professional
            </em>{" "}
            training and instructional videos that feel human, not robotic. For
            teams, schools, or course creators.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Built with clarity, engagement, and retention in mind</li>
            <li>Incorporates voiceovers, motion graphics, and interactivity</li>
            <li>Ideal for onboarding, LMS content, or microlearning</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Explainer Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Animated or live-action explainer videos that simplify, educate, and
            entertain—without boring your viewers.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Story-driven structure + clear visuals</li>
            <li>Great for pitching concepts, onboarding, and launches</li>
            <li>Script, voiceover, and animation handled end-to-end</li>
          </ul>
        </div>
      ),
    },
    {
      head: "Corporate Videos",
      text: (
        <div className="flex flex-col gap-4">
          <p className="p-lg">
            Whether it’s a culture video, internal comms, or brand film—these
            videos help your company show up, stand out, and stay memorable.
          </p>
          <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Studio or documentary-style formats available</li>
            <li>Captures leadership, teams, and core messages</li>
            <li>Suitable for town halls, recruitment, and investor decks</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        backgroundImageLink="/images/22.jpg"
        sHeading="VISUAL STORYTELLING"
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

      <WorkShowcase />

      <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">Our Services</p>
              <h3 className="m-0 p-0">
                Diverse{" "}
                <em className="font-instrumental-serif">video solutions</em> for
                every need
              </h3>
            </div>
            <div>
              <TwoRowGrdTxtHolder data={WHATS_INCLUDED} />
            </div>
          </div>
        </div>
      </section>
      <VerticalSnapCarousel />
    </main>
  );
}

export default VideoProduction;
