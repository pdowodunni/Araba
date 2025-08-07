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
    title: "Boost your in-house creative",
    description:
      "We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead.",
  },
  {
    icon: CheckNoteIcon,
    label: "Flexible",
    title: "Say yes to more projects",
    description:
      "Whether you need more bandwidth or different skills, Araba has the resources you need to get the job done.",
  },
  {
    icon: StarIcon,
    label: "Responsive",
    title: "Don't sacrifice quality for speed",
    description:
      "Our global team delivers agency-level work in a fraction of the time.",
  },
];

export default function OurDifferenceSection() {
  return (
    <section className="">
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
          <div className="flex flex-col gap-8 mb-4 items-center">
            <span className="flex justify-center w-full pb-3 uppercase tracking-wide font-interTight-regular">
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
              <div
                key={idx}
                className="flex gap-3 flex-col text-center sm:text-left"
              >
                <div className="mx-auto sm:mx-0 flex h-20 w-20 items-center justify-center rounded bg-gray-200">
                  <Icon color="#0a221f" />
                </div>
                <span className="block uppercase tracking-widest text-gray-500">
                  {label}
                </span>
                <h5 className="p-0 m-0">{title}</h5>
                <p className="text-lg">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
