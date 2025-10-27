import React from "react";
import InfiniteCardSlider from "../components/slider-card";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import LeftImgTextSec from "../components/shared/layout/left-img-txt-sec";
import TxtImgSec from "../components/shared/layout/text-image-sec";

const WHO_WE_ARE = {
  bgImage: "/images/51.jpg",
  bgColor: "#F4E9DC",
  heading: "WHO ARE WE",
  subheading: (
    <div>
      <h4 className="leading-tight">
        We are a Pan-African storytelling and communications company helping
        brands, institutions, and movements connect with people through
        emotionally intelligent, culturally grounded, and tech-enhanced
        storytelling.
      </h4>
    </div>
  ),
  text: (
    <div className="flex flex-col gap-3">
      <p className="p-lg">
        We design experiences through strategy, sound, and screen — crafting
        stories that move people to act, think, and remember.
      </p>
      <p className="p-lg">
        <em className="font-interTight-semibold">Our mission is simple:</em> to
        help brands build trust, shape culture, and be impossible to forget.
      </p>
      <p className="p-lg">
        <em className="font-interTight-semibold">Our vision is bold:</em> to be
        the leading African storytelling company exporting scalable, future-led,
        insight-driven storytelling systems to the world.
      </p>
      <p className="p-lg">
        Every story we tell becomes emotional capital… an asset that grows in
        value each time it’s shared.
      </p>
      <p className="p-lg">
        Every project is a seed in the forest we’re building… an ecosystem where
        brands, creators, and communities thrive together.
      </p>
      <p className="p-lg">Because we don’t just tell stories.</p>
      <p className="p-lg">We feed souls.</p>
      <p className="p-lg">We build tribes.</p>
      <p className="p-lg">We grow economies of emotion.</p>
      <p className="p-lg">
        We are Araba Collective — Storytelling that Moves. Strategy that
        Connects. Content that Lasts.
      </p>
    </div>
  ),
};
const A_QUICK_BACK_STORY = {
  bgImage: "/images/5.jpg",
  bgColor: "#EEE3D0",
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
const WHY_DO_WE_EXIST = {
  heading: "SO WHY DO WE EXIST",
  subheading: (
    <div>
      <h4 className="leading-tight">
        We exist to build Africa's emotional economy through storytelling —
        because every nation has its own economy, and ours is powered by
        feeling.
      </h4>
    </div>
  ),
  text: (
    <div className="flex flex-col gap-3">
      <p className="p-lg">
        We believe that emotion itself can be traded, earned, spent, multiplied.
        And those who understand this are what we call Arabians — citizens of
        Araba Nation, a living ecosystem of storytellers, brands, and believers
        who know how to move hearts before moving markets.
      </p>
      <p className="p-lg">
        Arabians Understand the{" "}
        <em className="font-instrumental-serif">
          currency of empathy. We trade in pride. We invest in belonging.
        </em>{" "}
        Our economy runs on resonance.
      </p>
      <p className="p-lg">
        And like any nation, we live by a code — our values, the laws of
        emotional trade.
      </p>
    </div>
  ),
};
const THE_ARABIAN_CODE = {
  heading: "THE ARABIAN CODE",
  bgImage: "/images/52.jpg",
  subheading: (
    // <h4 className="font-medium leading-tight text-gray-900">
    //   What Is Phygital Storytelling{" "}
    //   <em className="font-instrumental-serif">Experience?</em>
    // </h4>
    <div></div>
  ),
  text: (
    <div className="flex flex-col gap-1">
      <p className="p-lg">
        We are <em className="font-interTight-semibold">rooted</em> in
        authenticity, grounded in culture, driven by insight.
      </p>
      <p className="p-lg">
        We move with <em className="font-interTight-semibold">agility</em>,
        creating at the speed of soul.
      </p>
      <p className="p-lg">
        We lead with <em className="font-interTight-semibold">heart</em>,
        placing people above headlines.
      </p>
      <p className="p-lg">
        We believe in <em className="font-interTight-semibold">impact</em>;
        resonance over reach, and in{" "}
        <em className="font-interTight-semibold">excellence</em>, the quiet
        mastery behind every mark.
      </p>
      <p className="p-lg">
        We are <em className="font-interTight-semibold">resilient</em>, built to
        bend, not break.
      </p>
      <p className="p-lg">
        We are <em className="font-interTight-semibold">future-led</em>,
        designing for tomorrow, today.
      </p>
      <p className="p-lg">
        We are <em className="font-interTight-semibold">collaborative</em>,
        because forests don’t grow alone.
      </p>
      <p className="p-lg">
        And in every interaction, we hold{" "}
        <em className="font-interTight-semibold">integrity</em>, trust in every
        touch.
      </p>
      <p className="p-lg">This is our nation.</p>
      <p className="p-lg">
        This is <em className="font-interTight-semibold">Araba</em>.
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

      <RightImgTextSec {...A_QUICK_BACK_STORY} />
      <LeftImgTextSec {...WHY_DO_WE_EXIST} />
      <TxtImgSec {...THE_ARABIAN_CODE} />
      <RightImgTextSec {...WHO_WE_ARE} />
    </main>
  );
}

export default AboutUs;
