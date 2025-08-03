import { PenTool, ListChecks, Star } from "lucide-react";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}
const ITEMS = [
  {
    icon: PenTool,
    label: "Scalable",
    title: "Boost your in-house creative",
    description:
      "We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead.",
  },
  {
    icon: ListChecks,
    label: "Flexible",
    title: "Say yes to more projects",
    description:
      "Whether you need more bandwidth or different skills, Araba has the resources you need to get the job done.",
  },
  {
    icon: Star,
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
          <div className="mx-auto text-center mb-12">
            <span className="block text-xs uppercase tracking-wide text-gray-500">
              Our Difference
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-medium text-gray-900">
              Araba is the <em className="italic font-normal">perfect fit</em>{" "}
              for fast moving brands
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map(({ icon: Icon, label, title, description }, idx) => (
              <div key={idx} className="space-y-4 text-center sm:text-left">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded bg-gray-200">
                  <Icon className="h-6 w-6 text-gray-700" />
                </div>
                <span className="block text-xs uppercase tracking-wide text-gray-500">
                  {label}
                </span>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
