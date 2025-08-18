import { CheckNoteIcon, PenIcon, StarIcon } from "../../assets/icons";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}
const ITEMS = [
  {
    icon: PenIcon,
    label: "Scalable",
    title: "Grow your impact, not your overhead",
    description:
      "Whether it's one story or a storytelling ecosystem, we scale with you across projects, formats, and channels without breaking the rhythm.",
  },
  {
    icon: CheckNoteIcon,
    label: "Flexible",
    title: "Plug us in where you need magic",
    description:
      "Need voice casting today, a documentary next week, or a full campaign by month's end? We shape-shift to meet your story where it's hot.",
  },
  {
    icon: StarIcon,
    label: "Tech-Enhanced",
    title: "Human-first, AI-smart",
    description:
      "We blend raw, lived emotion with AI-powered production to create content that feels intimate—but moves at speed and scale.",
  },
];

export default function OurDifferenceSection() {
  return (
    <section className="">
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-8 mb-4 items-center">
            <span className="s-heading flex justify-center w-full">
              OUR DIFFERENCE
            </span>
            <h4 className="m-0 p-0 max-w-[820px] leading-tight text-center">
              Araba is the{" "}
              <em className="font-instrumental-serif">perfect fit</em> for fast
              moving brands
            </h4>
          </div>
          <div className="mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map(({ icon: Icon, label, title, description }, idx) => (
              <div key={idx} className="flex gap-3 flex-col">
                <div className="mx-0 flex mb-2 scale-80 sm:scale-100 h-18 w-18 items-center justify-center rounded bg-black/8">
                  <Icon color="#0a221f" />
                </div>
                <span className="block uppercase tracking-widest text-gray-500">
                  {label}
                </span>
                <h5 className="p-0 m-0">{title}</h5>
                <p className="">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
