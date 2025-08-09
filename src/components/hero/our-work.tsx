import SlideUpButton from "../shared/slide-up-button";
// import ScrollReveal from "../shared/scrool-reveal";
import {
  ShowCaseCardHorizontal,
  type ShowcaseCardHorizontalProps,
} from "../shared/showcase-card-horizontal";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}
const ROWS: ShowcaseCardHorizontalProps[][] = [
  [
    {
      span: 2,
      assetLink: "/images/five.jpg",
      assetType: "image",
      title: "Pernod Ricard",
      desc: "eBook & Digital Reports, Video Production",
      href: "#",
    },
    {
      span: 2,
      assetLink: "/images/five.jpg",
      assetType: "image",
      title: "Salesforce",
      desc: "Motion Design, Ad Creative",
      href: "#",
    },
    {
      span: 4,
      assetLink: "/images/four.jpg",
      assetType: "image",
      title: "Roland",
      desc: "Ad Creative, Social Media Creative",
      href: "#",
    },
  ],
  [
    {
      span: 4,
      assetLink: "/images/four.jpg",
      assetType: "image",
      title: "Antler",
      desc: "Brand Identity, Motion Design, Social Media Creative",
      href: "#",
    },
    {
      span: 2,
      assetLink: "/images/five.jpg",
      assetType: "image",
      title: "Shopify",
      desc: "Ad Creative",
      href: "#",
    },
    {
      span: 2,
      assetLink: "/images/five.jpg",
      assetType: "image",
      title: "Reddit",
      desc: "Motion Design, Social Media Creative",
      href: "#",
    },
  ],
];

export default function WorkShowcase() {
  return (
    <section className="text-light-bg bg-primary">
      <div className="mx-container">
        <div className="pt-lg-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          {/* <ScrollReveal> */}
          <div className="flex justify-between flex-col gap-4 xl:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">Our Work</p>
              <h3 className="m-0 p-0">
                See how <em className="font-instrumental-serif">top brands</em>{" "}
                use Araba Collective
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
          {/* </ScrollReveal> */}
          <div className="flex flex-col gap-0 md:gap-20">
            {ROWS.map((row, i) => (
              <div key={i} className="mx-auto w-full flex justify-center">
                <div className="block md:grid w-full grid-cols-8 md:gap-4">
                  {row.map((item, idx) => (
                    <ShowCaseCardHorizontal key={idx} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
