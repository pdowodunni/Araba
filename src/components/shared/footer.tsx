import {
  Linkedin,
  Instagram,
  Youtube,
  Music,
  ArrowUpRight,
} from "lucide-react";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}
const SERVICES = [
  {
    title: "Creative design services",
    links: [
      "Ad creative",
      "Social media creative",
      "Presentation design",
      "Illustration design",
      "Branding services",
      "Email creation",
      "Web design",
      "eBooks & report design",
      "Concept creation",
      "Print design",
      "Packaging & merchandise design",
    ],
  },
  {
    title: "Specialized production services",
    links: ["Video production", "Motion design", "3D & AR design"],
  },
  {
    title: "AI services",
    links: ["AI enhanced creative", "AI consulting"],
  },
  {
    title: "Marketing services",
    links: ["Marketing strategy"],
  },
];

const NAV = {
  Main: [
    "Our work",
    "Our people",
    "About us",
    "Pricing",
    "Trust center",
    "Careers",
    "Araba vs. Alternatives",
    "Forrester TEI Report",
  ],
  Learn: [
    "Blog",
    "Events & Summits",
    "Guides & Reports",
    "Customer Stories",
    "Video Library",
    "Playbooks",
    "What's new",
  ],
};

export default function Footer() {
  {
    /* 
    ============================= 
    Break this up later.
    ============================= 
  */
  }
  return (
    <>
      <section>
        <div className="bg-primary text-white">
          <div className="mx-container flex justify-center pb-lg-pad">
            <div className="max-w-5xl">
              <h1 className="text-center">
                Your <em className="font-instrumental-serif">creative</em>{" "}
                team's creative team
              </h1>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-primary text-white py-16">
        <div className="mx-container">
          <div className="mx-auto grid gap-12 lg:grid-cols-5">
            {/* Services */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              {SERVICES.map(({ title, links }) => (
                <div key={title}>
                  <h3 className="text-[20px] font-medium mb-4 flex items-center">
                    {title}
                    <ArrowUpRight className="ml-2" size={26} strokeWidth={1} />
                  </h3>
                  <ul className="space-y-2 text text-white/40">
                    {links.map((txt) => (
                      <li key={txt} className="cursor-pointer">
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Navigation */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              {Object.entries(NAV).map(([section, items]) => (
                <div key={section}>
                  <h3 className="text-lg font-medium mb-4">{section}</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    {items.map((txt) => (
                      <li key={txt}>{txt}</li>
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
              <span className="text-sm">
                © 2025 Araba. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-white/80 hover:text-white">
                Privacy policy
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white">
                Terms of use
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white">
                Status page
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white">
                DMCA
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
