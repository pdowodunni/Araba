// import { Bulb, Clipper, Mic, Script, Video, Voice } from "../assets/icons";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import { X } from "lucide-react";
import React from "react";

function LetsTalk() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>CONNECT WITH ARABA</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-2 max-w-[600px]">
        <p className="text-white  text-start p-lg">
          Whether you'd like to discuss a project, learn more about our
          services, or simply say hello, you can reach us anytime through the
          contact form below.
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

  // const [services, setServices] = React.useState<string[]>([]);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    services: [] as string[],
    message: "",
  });

  const [formError, setFormError] = React.useState<string[] | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const removeItem = (item: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.filter((ser) => ser !== item),
    }));
  };

  const addItem = (item: string) => {
    if (!item || form.services.includes(item)) return;
    setForm((prev) => ({ ...prev, services: [...prev.services, item] }));
  };

  const sanitizeForm = (data: typeof form) => {
    const sanitized = {
      firstName: data.firstName.trim().replace(/[^a-zA-Z\s'-]/g, ""),
      lastName: data.lastName.trim().replace(/[^a-zA-Z\s'-]/g, ""),
      email: data.email.trim().toLowerCase(),
      phoneNumber: data.phoneNumber.trim().replace(/[^\d+]/g, ""),
      services: Array.from(new Set(data.services.map((s) => s.trim()))).filter(
        (s) => s !== ""
      ),
      message: data.message.trim().replace(/\s{2,}/g, " "),
    };

    // ===== Validation =====
    const errors: string[] = [];

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized.email)) {
      errors.push("Please enter a valid email address.");
    }

    // Simple phone number validation (at least 7 digits)
    const phoneDigits = sanitized.phoneNumber.replace(/\D/g, "");
    if (phoneDigits.length < 7) {
      errors.push("Please enter a valid phone number.");
    }

    // Must have at least one service
    if (sanitized.services.length === 0) {
      errors.push("Please select at least one service.");
    }

    return { sanitized, errors };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    const { sanitized, errors } = sanitizeForm(form);

    if (errors.length > 0) {
      setFormError(errors);
      return;
    }
    console.log(sanitized, errors);
  };

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="lets talk"
        backgroundImageLink="/images/001.jpg"
        {...AUX_HEADER_DATA}
        showCard={false}
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
          <div className="w-full flex flex-col md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[440px_1fr] xl:grid-cols-[500px_1fr] gap-5 xl:gap-10">
            {/* FIRST COL */}
            <div className="flex justify-between flex-col gap-5 md:gap-30">
              <div className="flex flex-col gap-0">
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
            <div className="w-full px-0 md:px-2">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2 md:gap-5">
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
                      onChange={handleChange}
                      value={form.firstName}
                      autoComplete="off"
                      name="firstName"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[55px] md:h-[70px] outline-0"
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
                      onChange={handleChange}
                      value={form.lastName}
                      autoComplete="off"
                      name="lastName"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[55px] md:h-[70px] outline-0"
                      required
                    />
                  </div>
                </div>
                {/* SECOND FORM SET */}
                <div className="flex flex-row gap-2 md:gap-5">
                  <div className="w-full">
                    <label
                      className="block p-lg mb-2 text-green-accent-dark"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="mail"
                      onChange={handleChange}
                      value={form.email}
                      id="email"
                      autoComplete="off"
                      name="email"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[55px] md:h-[70px] outline-0"
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
                      onChange={(e) => {
                        const cleaned = e.target.value.replace(
                          /[^0-9+\s]/g,
                          ""
                        );
                        setForm((prev) => ({ ...prev, phoneNumber: cleaned }));
                      }}
                      value={form.phoneNumber}
                      autoComplete="off"
                      name="phoneNumber"
                      className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[55px] md:h-[70px] outline-0"
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
                    className="bg-mid-bg text-green-accent-dark p-lg px-2 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 h-[55px] md:h-[70px] outline-0"
                  >
                    {SERVICE_OPTIONS.map((it, idx) => {
                      return (
                        <option key={idx} value={it.mainText}>
                          {it.mainText !== ""
                            ? it.mainText
                            : "Select a service"}
                        </option>
                      );
                    })}
                  </select>

                  <div className="mt-5">
                    <div className="flex gap-1 flex-wrap">
                      {form.services.map((ser, idx) => {
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
                    onChange={handleChange}
                    required
                    name="message"
                    value={form.message}
                    rows={10}
                    className="bg-mid-bg text-green-accent-dark p-lg px-6 text-sm rounded-xl focus:ring-green-accent focus:border-green-accent block w-full p-2.5 outline-0"
                  ></textarea>
                </div>
                {/* ERROR */}
                <div className="flex">
                  {formError && (
                    <p className="text-red-500 text-sm mt-2">{formError[0]}</p>
                  )}
                </div>
                <div className="w-full flex">
                  <button
                    type="submit"
                    className={`bg-primary text-white flex justify-center items-center text-sm py-[16px] px-[40px] relative rounded-full cursor-pointer hover:bg-green-accent-dark duration-200`}
                  >
                    Submit
                  </button>
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
    <span className="bg-primary ps-3.5 pe-2 py-2 rounded-full text-light-bg flex gap-2 justify-center items-center">
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
