import { ArrowUpRight } from "lucide-react";
import SlideUpButton from "../shared/slide-up-button";
import ScrollReveal from "../shared/scrool-reveal";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}
const ROWS = [
  [
    {
      span: 2,
      img: "/images/five.jpg",
      title: "Pernod Ricard",
      desc: "eBook & Digital Reports, Video Production",
    },
    {
      span: 2,
      img: "/images/five.jpg",
      title: "Salesforce",
      desc: "Motion Design, Ad Creative",
    },
    {
      span: 4,
      img: "/images/four.jpg",
      title: "Roland",
      desc: "Ad Creative, Social Media Creative",
    },
  ],
  [
    {
      span: 4,
      img: "/images/four.jpg",
      title: "Antler",
      desc: "Brand Identity, Motion Design, Social Media Creative",
    },
    {
      span: 2,
      img: "/images/five.jpg",
      title: "Shopify",
      desc: "Ad Creative",
    },
    {
      span: 2,
      img: "/images/five.jpg",
      title: "Reddit",
      desc: "Motion Design, Social Media Creative",
    },
  ],
];

function WorkItem({
  span,
  img,
  title,
  desc,
}: {
  span: number;
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`group col-span-${span} flex flex-col cursor-pointer gap-6`}
    >
      <div
        className="
          w-full h-[396px] rounded-xl 
          bg-center
          bg-[length:100%]
          group-hover:bg-[length:115%]
          transition-all
          duration-300
        "
        style={{ backgroundImage: `url('${img}')` }}
        data-cursor-target
        data-cursor-text="VISIT PAGE"
      />
      <div>
        <div className="flex items-center gap-1">
          <h5 className="font-instrumental-serif m-0">{title}</h5>
          <span className="transform -translate-x-2 translate-y-2 scale-0 opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <ArrowUpRight strokeWidth={1} size={24} />
          </span>
        </div>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section className="text-light-bg bg-primary">
      <div className="mx-container">
        <div className="pt-lg-pad pb-md-pad flex flex-col gap-20">
          <ScrollReveal>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase tracking-wide">Our Work</p>
                <h3 className="m-0 p-0">
                  See how{" "}
                  <em className="font-instrumental-serif">top brands</em> use
                  Araba Collective
                </h3>
              </div>
              <div className="flex items-end">
                <div className="w-fit h-fit">
                  <SlideUpButton
                    type="outline"
                    bgColor="var(--color-light-bg)"
                    textColor="var(--color-light-bg)"
                  >
                    Explore all our work
                  </SlideUpButton>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {ROWS.map((row, i) => (
            <div key={i} className="w-full flex justify-center">
              <div className="grid w-full grid-cols-8 gap-4">
                {row.map((item, idx) => (
                  <WorkItem key={idx} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
