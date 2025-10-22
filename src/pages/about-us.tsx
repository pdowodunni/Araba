import React from "react";

function AboutUs() {
  return (
    <main className="p-main">
      <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
            <div className="flex flex-col gap-3 md:gap-8 items-center">
              {/* <span className="s-heading flex justify-center">Our work</span> */}
              <h1 className="m-0 p-0 max-w-[820px] leading-tight text-center">
                It began the way every forest begins…with a seed. A question
                buried deep in the soil of imagination:{" "}
                <em className="font-instrumental-serif">
                  “Who tells Africa’s stories — not as statistics, but as
                  souls?”
                </em>{" "}
              </h1>
              {/* <div className="max-w-[600px]">
                <p className="md:text-2xl text-xl text-center">
                  We help the world's leading brands create standout ads and
                  campaigns at speed—from concept to execution to results.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
