import { useState } from "react";
import WorkShowcase from "../components/hero/our-work";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import LogoCarousel from "../components/shared/logo-carousel";
import SoundButton from "../components/shared/sound-button";
import VerticalSnapCarousel from "../components/shared/testimonial";
// import OurWork from "./our-work";
import ReactPlayer from "react-player";

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
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://youtu.be/Ut2hIaw3Gls" />
          </div>
          <p className="p-lg">
            Brand films, campaigns, and value-driven videos that bring your
            brand voice, tone, and vision to life—with clarity and flair.
          </p>
          {/* <ul className="pl-5 list-disc p-lg flex flex-col gap-2 mt-2">
            <li>Crafted for emotional connection and brand positioning</li>
            <li>Tailored to your mission, values, and audience</li>
            <li>Ideal for campaigns, launches, and rebranding efforts</li>
          </ul> */}
        </div>
      ),
    },
    {
      head: "Product Videos",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://youtu.be/Ut2hIaw3Gls" />
          </div>
          <p className="p-lg">
            Cut through the noise with video ads that entertain, educate, and
            convert across platforms like YouTube, Instagram, and more.
          </p>
        </div>
      ),
    },
    {
      head: "Customer Testimonials",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://youtu.be/RfUnIeUOkl8" />
          </div>
          <p className="p-lg">
            Authentic, well-edited testimonial videos that build trust and show
            proof—without sounding staged.
          </p>
        </div>
      ),
    },
    {
      head: "Social Media Videos",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://youtube.com/shorts/HPd4jzALYHU?si=_91khv4_yCWHtI6U" />
          </div>
          <p className="p-lg">
            Creative, mobile-first videos that stop the scroll and start a
            conversation, tailored for TikTok, Reels, LinkedIn, and more.
          </p>
        </div>
      ),
    },
    {
      head: "Documentary Storytelling",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://www.youtube.com/watch?v=r_ZRiLQR5KY" />
          </div>
          <p className="p-lg">
            From sweet wedding stories that spark tears (and laughter), to raw
            social impact docs that drive real action, our style blends
            vlog-like authenticity with emotional depth. And even if all you’ve
            got is old footage—we’ll make it look brand new.
          </p>
        </div>
      ),
    },
    // {
    //   head: "E-learning Videos",
    //   text: (
    //     <div className="flex flex-col gap-2">
    //       <div>
    //         <SmallVideo videoLink="https://youtu.be/Ut2hIaw3Gls" />
    //       </div>
    //       <p className="p-lg">
    //         <em className="font-interTight-semibold">
    //           Learning content that doesn't make learners snooze Professional
    //         </em>{" "}
    //         training and instructional videos that feel human, not robotic. For
    //         teams, schools, or course creators.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   head: "Explainer Videos",
    //   text: (
    //     <div className="flex flex-col gap-2">
    //       <div>
    //         <SmallVideo videoLink="https://youtu.be/Ut2hIaw3Gls" />
    //       </div>
    //       <p className="p-lg">
    //         Animated or live-action explainer videos that simplify, educate, and
    //         entertain—without boring your viewers.
    //       </p>
    //     </div>
    //   ),
    // },
    {
      head: "Corporate Videos",
      text: (
        <div className="flex flex-col gap-2">
          <div>
            <SmallVideo videoLink="https://youtu.be/S6vH3tqk11Y" />
          </div>
          <p className="p-lg">
            Whether it's a culture video, internal comms, or brand film—these
            videos help your company show up, stand out, and stay memorable.
          </p>
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

      <section className="bg-mid-bg">
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
      <WorkShowcase />
      <VerticalSnapCarousel />
    </main>
  );
}

export default VideoProduction;

const SmallVideo = ({
  videoLink,
  text,
}: {
  videoLink: string;
  text?: string;
}) => {
  const [muted, setMuted] = useState(true);
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="w-full aspect-[16/9] h-full bg-center rounded-lg transition-all duration-300 relative overflow-hidden">
        <ReactPlayer
          src={videoLink}
          width="100%"
          height="100%"
          playing={true}
          muted={muted}
          loop={true}
          playsInline={true}
          // config={{
          //   youtube: {
          //     playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
          //   },
          //   file: {
          //     attributes: {
          //       playsInline: true,
          //     },
          //   },
          // }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
        <SoundButton muted={muted} setMuted={setMuted} />
      </div>
      <span className="p-lg">{text}</span>
    </div>
  );
};
