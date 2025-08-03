import {
  Bill,
  // GoogleWhite,
  CM,
  Dice,
  Fidelity,
  Google,
  GtB,
  InnerWheel,
  PressOne,
  Shopify,
  Stanbic,
  Wakanow,
  WakanowWhite,
  GoogleWhite,
} from "../assets/icons";

export const CAROUSEL_BRANDS = [
  GtB,
  Google,
  Stanbic,
  CM,
  PressOne,
  Dice,
  Bill,
  InnerWheel,
  Fidelity,
  Wakanow,
];

export const TESTIMONIALS = [
  {
    id: 0,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Xander Shapiro",
    role: "Chief Marketing Officer at ZEA",
    stats: [],
    caseStudy: null,
  },
  {
    id: 1,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Billy Schneider",
    role: "Director of Digital Marketing at Oportun",
    stats: [],
    caseStudy: null,
  },
  {
    id: 2,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Joseph Bradley",
    role: "Global VP of IoT & Digital Services at Cisco",
    stats: [],
    caseStudy: null,
  },
  {
    id: 3,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Justin Rands",
    role: "Director of Brand at Oyster",
    stats: [
      { value: "57%", label: "Production time saved" },
      { value: "$10,775", label: "Cost savings" },
      { value: "20", label: "Videos delivered" },
    ],
    caseStudy: {
      thumbnail: "/images/1(9).jpg",
      title: "How Oyster Automates Global Social Media Campaigns",
      link: "#",
    },
  },
  {
    id: 4,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Marc Vitulli",
    role: "VP Marketing at S&S Activewear",
    stats: [
      { value: "4×", label: "Increase in design capacity" },
      { value: "60%", label: "Reduction in time to market" },
      { value: "60+", label: "Number of brands" },
    ],
    caseStudy: {
      thumbnail: "/images/1(7).jpg",
      title: "How To Keep Creative Fresh for 60+ Different Brands",
      link: "#",
    },
  },
  {
    id: 5,
    Logo: Shopify,
    quote: (
      <p className="text-3xl">
        “
        <em className="font-interTight-semibold">
          Araba took the time to learn about our company,
        </em>{" "}
        applied their insights from various design projects and sought to meet
        our needs, even if it meant going through some additional edits.”
      </p>
    ),
    author: "Amir Jaffari",
    role: "Growth Lead at Shopify",
    stats: [
      { value: "4,375", label: "Assets per concept delivered" },
      { value: "12h-24h", label: "Turnaround time" },
    ],
    caseStudy: {
      thumbnail: "/thumbnails/shopify.jpg",
      title: "How Shopify Built a Growth Workshop to Unlock Rapid…",
      link: "#",
    },
  },
];

export const VERTICAL_CAROUSEL_ONE = [
  {
    image: "/images/1(4).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(9).jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/three.jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(2).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/two.jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/three.jpg",
    Logo: GoogleWhite,
  },
];
export const VERTICAL_CAROUSEL_TWO = [
  {
    image: "/images/1(1).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(3).jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/1(4).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(5).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(2).jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/1(12).jpg",
    Logo: GoogleWhite,
  },
];
export const VERTICAL_CAROUSEL_THREE = [
  {
    image: "/images/1(6).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(7).jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/1(8).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(9).jpg",
    Logo: WakanowWhite,
  },
  {
    image: "/images/1(10).jpg",
    Logo: GoogleWhite,
  },
  {
    image: "/images/1(11).jpg",
    Logo: GoogleWhite,
  },
];
