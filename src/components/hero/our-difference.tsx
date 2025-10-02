import {
  AI,
  CheckNoteIcon,
  Flexible,
  PenIcon,
  Scalable,
  StarIcon,
} from "../../assets/icons";

const ITEMS = [
  {
    icon: Scalable,
    label: "Scalable",
    title: "Grow your impact, not your overhead",
    description:
      "Whether it's one story or a storytelling ecosystem, we scale with you across projects, formats, and channels without breaking the rhythm.",
  },
  {
    icon: Flexible,
    label: "Flexible",
    title: "Plug us in where you need magic",
    description:
      "Need voice casting today, a documentary next week, or a full campaign by month's end? We shape-shift to meet your story where it's hot.",
  },
  {
    icon: AI,
    label: "Tech-Enhanced",
    title: "Human-first, AI-smart",
    description:
      "We blend raw, lived emotion with AI-powered production to create content that feels intimate—but moves at speed and scale.",
  },
];

export default function OurDifferenceSection() {
  return (
    <section className="bg-light-bg">
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-3 md:gap-8 mb-4 items-center">
            <span className="s-heading flex justify-center w-full">
              OUR DIFFERENCE
            </span>
            <h4 className="m-0 p-0 max-w-[820px] leading-tight text-center">
              Africa-rooted.{" "}
              <em className="font-instrumental-serif">Globally Relevant.</em>{" "}
              Creatively Dangerous.
            </h4>
          </div>
          <div className="mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map(({ icon: Icon, label, title, description }, idx) => (
              <div key={idx} className="flex gap-3 flex-col">
                <div className="logo-box">
                  <Icon color="#0a221f" />
                </div>
                <span className="block uppercase tracking-widest text-gray-500">
                  {label}
                </span>
                <h5 className="p-0 m-0">{title}</h5>
                <p className="p-lg">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
