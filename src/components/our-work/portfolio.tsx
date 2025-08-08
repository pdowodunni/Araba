import React from "react";
import { ShowCaseCardHorizontal } from "../shared/showcase-card-horizontal";

function Portfolio() {
  const ROWS = [
    [
      {
        span: 2,
        img: "/images/five.jpg",
        title: "Pernod Ricard",
        desc: "eBook & Digital Reports, Video Production",
        href: "#",
      },
      {
        span: 2,
        img: "/images/five.jpg",
        title: "Salesforce",
        desc: "Motion Design, Ad Creative",
        href: "#",
      },
      {
        span: 4,
        img: "/images/four.jpg",
        title: "Roland",
        desc: "Ad Creative, Social Media Creative",
        href: "#",
      },
    ],
    [
      {
        span: 4,
        img: "/images/four.jpg",
        title: "Antler",
        desc: "Brand Identity, Motion Design, Social Media Creative",
        href: "#",
      },
      {
        span: 2,
        img: "/images/five.jpg",
        title: "Shopify",
        desc: "Ad Creative",
        href: "#",
      },
      {
        span: 2,
        img: "/images/five.jpg",
        title: "Reddit",
        desc: "Motion Design, Social Media Creative",
        href: "#",
      },
    ],
    [
      {
        span: 2,
        img: "/images/four.jpg",
        title: "Antler",
        desc: "Brand Identity, Motion Design, Social Media Creative",
        href: "#",
      },
    ],
  ];

  return (
    <section>
      <div className="mx-container">
        <div className="pt-lg-pad pb-md-pad flex flex-col gap-10 md:gap-20">
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

export default Portfolio;
