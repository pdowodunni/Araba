// import { Bulb, Clipper, Mic, Script, Video, Voice } from "../assets/icons";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import BrandCarousel from "../components/hero/brand-carousel";
import { X } from "lucide-react";
import React, { useEffect } from "react";

function LetsTalk() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>VOICEOVER SERVICES</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-2 max-w-[1000px]">
        {/* <p className="text-white font-instrumental-serif text-start p-lg">
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
        </p> */}
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

  const SERVICE_OPTIONS = [
    {
      mainText: "",
    },
    {
      mainText: "Voiceover Services",
    },
    {
      mainText: "Music & Sound design",
    },
    {
      mainText: "Immersive & Experiential Audio",
    },
    {
      mainText: "Phygital Storytelling",
    },
    {
      mainText: "Audiobook Production",
    },
    {
      mainText: "Storytelling Sprint",
    },
    {
      mainText: "Marketing Strategy",
    },
    {
      mainText: "Video Production",
    },
    {
      mainText: "Motion Graphics & Animation",
    },
    {
      mainText: "AI-Storytelling",
    },
  ];

  const [services, setServices] = React.useState<string[]>([]);

  const removeItem = (item: string) => {
    setServices((prev) => prev.filter((it) => it !== item));
  };

  const addItem = (item: string) => {
    if (!item || services.includes(item)) return;
    setServices((prev) => [...prev, item]);
  };

  useEffect(() => {
    // console.log("Updated services:", services);
  }, [services]);

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="AUDIOSTORYTELLING BY SOUNDBAKING COMPANY"
        backgroundImageLink="/images/001.jpg"
        {...AUX_HEADER_DATA}
      />

      <section
        // style={{
        //   backgroundImage: "url('/images/n-b-l.png')",
        //   backgroundRepeat: "repeat",
        //   backgroundAttachment: "fixed",
        // }}
        // className="bg-primary text-light-bg"
        className="py-md-pad"
      >
        <div className="mx-container">
          <div className="w-full grid grid-cols-[600px_1fr] gap-10">
            {/* FIRST COL */}
            <div className="flex justify-between flex-col gap-30">
              <div className="flex flex-col gap-2">
                <span className="s-heading">Reach out and connect</span>
                <h1 className="">
                  Get in <em className="font-instrumental-serif">touch</em>
                </h1>
              </div>
              <span className="p-lg max-w-[500px]">
                We're always available to help with your projects, answer your
                questions, or simply connect, just reach out using the details
                below or the contact form.
              </span>
            </div>
            {/* FIRST COL */}
            <div className="w-full px-2">
              <form className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <label
                      className="block p-lg mb-2 text-green-accent-dark"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      autoComplete="off"
                      name="firstName"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[70px] outline-0"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block p-lg mb-2 text-green-accent-dark"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      autoComplete="off"
                      name="lastName"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[70px] outline-0"
                      required
                    />
                  </div>
                </div>

                {/* SECOND FORM SET */}
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <label
                      className="block p-lg mb-2 text-green-accent-dark"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="mail"
                      id="email"
                      autoComplete="off"
                      name="email"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[70px] outline-0"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block p-lg mb-2 text-green-accent-dark"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      autoComplete="off"
                      name="phoneNumber"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[70px] outline-0"
                      required
                    />
                  </div>
                </div>
                {/* SECOND FORM SET */}
                {/* DROPDOWN STUFF */}
                <div className="w-full">
                  <label
                    htmlFor="services"
                    className="block p-lg mb-2 text-green-accent-dark"
                  >
                    Select Services
                  </label>

                  <select
                    name="services"
                    id="services"
                    onChange={(e) => addItem(e.target.value)}
                    value={""}
                    className="bg-mid-bg text-green-accent-dark p-lg px-2 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[70px] outline-0"
                  >
                    {SERVICE_OPTIONS.map((it, idx) => {
                      return (
                        <option key={idx} value={it.mainText}>
                          {it.mainText}
                        </option>
                      );
                    })}
                  </select>

                  <div className="mt-5">
                    <div className="flex gap-1 flex-wrap">
                      {services.map((ser, idx) => {
                        return (
                          <SelectedService
                            key={idx}
                            service={ser}
                            removeItem={() => removeItem(ser)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* DROPDOWN STUFF */}
                <div className="w-full">
                  <label
                    className="block p-lg mb-2 text-green-accent-dark"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={10}
                    className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 outline-0"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LetsTalk;

const SelectedService = ({
  service,
  removeItem,
}: {
  service: string;
  removeItem: () => void;
}) => {
  return (
    <span className="bg-primary ps-3.5   pe-2 py-2 rounded-full text-light-bg flex gap-2 justify-center items-center">
      {service}{" "}
      <span
        className="p-1 rounded-full hover:bg-white/30 duration-200 cursor-pointer"
        onClick={removeItem}
      >
        {" "}
        <X size={18} />
      </span>
    </span>
  );
};
