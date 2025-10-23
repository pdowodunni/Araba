import React from "react";
import InfiniteCardSlider from "../components/slider-card";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";

const WHAT_YOU_GET__RIGHT_IMAGE = {
  heading: "A QUICK BACK STORY",
  subheading: <div />,
  text: (
    <div className="flex flex-col gap-3">
      <p className="p-lg">
        In 2023, what started as{" "}
        <em className="font-instrumental-serif">The SoundBaking Company</em> — a
        small audio studio helping brands sound human, transformed into
        something larger.
      </p>
      <p className="p-lg">
        After a five-day innovation lab in Rwanda, surrounded by a thousand
        creators from across the world, we came home changed.
      </p>
      <p className="p-lg">
        The event was brilliant, but invisible online. There was no story, no
        memory, no heartbeat left behind.
      </p>
      <p className="p-lg">
        We realized that Africa wasn't short of stories. We were short of
        storytellers who could store emotion like currency — storytellers who
        could build an economy around feeling.
      </p>
      <p className="p-lg">
        That realization became{" "}
        <em className="font-interTight-semibold"> Araba Collective</em>.
      </p>
    </div>
  ),
};

function AboutUs() {
  return (
    <main className="p-main">
      <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
            <div className="flex flex-col gap-3 md:gap-8 items-center">
              {/* <span className="s-heading flex justify-center">Our work</span> */}
              <h2 className="m-0 p-0  leading-tight text-center">
                It began the way every forest begins… with a seed. A question
                buried deep in the soil of imagination:{" "}
                <em className="font-instrumental-serif">
                  “Who tells Africa's stories — not as statistics, but as
                  souls?”
                </em>{" "}
              </h2>
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
      <section>
        <InfiniteCardSlider />
      </section>
      <section className="mx-container">
        <div className="pt-md-pad pb-md-pad">
          <p className="p-lg">
            We grew up on stories that fed us — under skies heavy with stars, on
            raffia mats that held the weight of wonder. We listened to the
            rhythm of mothers’ voices, to laughter carried by the wind, to the
            wisdom of the tortoise and the magic of the moonlight. Stories
            weren’t entertainment. They were food. They fed our imagination, our
            identity, our belonging. But somewhere along the way, storytelling
            became background noise — flattened into campaigns, ads, and noise
            that no one felt. And we missed it…that power to connect, to
            remember, to care. So, we began again.
          </p>
        </div>
      </section>

      <RightImgTextSec {...WHAT_YOU_GET__RIGHT_IMAGE} />
    </main>
  );
}

export default AboutUs;
