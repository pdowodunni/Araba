import {
  Linkedin,
  Instagram,
  Youtube,
  Music,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- data ---------------- */

const AUDIO_EXPERIENCE_SERVICES = [
  {
    mainText: "Voiceover Services",
    subText: "Distinct voices that sound like your brand.",
    href: "/service/voiceover-services",
  },
  {
    mainText: "Music & Sound design",
    subText: "Original scores and soundscapes that stick.",
    href: "/service/music-sound-design",
  },
  {
    mainText: "Immersive & Experiential Audio",
    subText: "Audio worlds you can step into.",
    href: "/service/immersive-experiential-audio",
  },
];

const SPECIALIZED_SERVICES = [
  {
    mainText: "Phygital Storytelling",
    subText: "Bridge real and digital into one story.",
    href: "/service/phygital-storytelling",
  },
  {
    mainText: "Podcast Production",
    subText: "Concept, booking, recording, polish, done.",
    href: "#",
  },
  {
    mainText: "Audiobook Production",
    subText: "Books performed with nuance and pace.",
    href: "/service/audiobook-production",
  },
  {
    mainText: "Storytelling Sprint",
    subText: "Tight timelines, strong ideas, shipped.",
    href: "#",
  },
];

const STRATEGIC_STORYTELLING_SERVICES = [
  {
    mainText: "Marketing Strategy",
    subText: "Positioning, messaging, and measurable plans.",
    href: "#",
  },
];

const VISUAL_STORYTELLING_SERVICES = [
  {
    mainText: "Video Production",
    subText: "Cinematic stories built for every channel.",
    href: "/service/video-production",
  },
  {
    mainText: "Motion Graphics & Animation",
    subText: "Punchy animations that explain fast.",
    href: "#",
  },
  {
    mainText: "AI-Storytelling",
    subText: "Co-created with AI for speed and scale.",
    href: "#",
  },
];

const SERVICE_GROUPS = [
  { title: "Audio Experience", items: AUDIO_EXPERIENCE_SERVICES },
  { title: "Specialized Production", items: SPECIALIZED_SERVICES },
  { title: "Strategic Storytelling", items: STRATEGIC_STORYTELLING_SERVICES },
  { title: "Visual Storytelling", items: VISUAL_STORYTELLING_SERVICES },
];

/* ---------------- component ---------------- */

export default function Footer() {
  return (
    <>
      {/* <section>
        <div className="bg-primary text-white">
          <div className="mx-container flex justify-center py-sm-pad">
            <div className="max-w-5xl">
              <h1 className="text-center">
                Your <em className="font-instrumental-serif">creative</em>{" "}
                team's creative team
              </h1>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="bg-primary text-white py-16">
        <div className="mx-container">
          <div className="mx-auto grid gap-12">
            {/* Services */}

            <div className="lg:col-span-3 grid grid-cols-2 xl:grid-cols-3 gap-8">
              {SERVICE_GROUPS.map(({ title, items }) => (
                <div key={title}>
                  <h5 className="font-medium mb-4 flex items-center">
                    {title}
                    <ArrowUpRight className="ml-2" size={26} strokeWidth={1} />
                  </h5>
                  <ul className="space-y-3">
                    {items.map(({ mainText, subText, href }) => (
                      <li key={mainText}>
                        <Link to={href} className="group block">
                          <div className="text-[18px] xl:text-[20px] font-medium group-hover:underline">
                            {mainText}
                          </div>
                          <div className=" text-white/50 text-[14px]">
                            {subText}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img
                src="/images/logo.webp"
                alt="araba's logo"
                className="w-[90px] select-none pointer-events-none"
              />
              <span className="">© 2025 Araba. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white">
                Our Work
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                Resources
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                About Us
              </a>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <a href="#">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#">
                <Music className="w-5 h-5" />
              </a>
              <a href="#">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
