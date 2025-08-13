import TwoImgCrdRow from "../../components/shared/case-study/2-image-card-row";
import ThreeImgCrdRow from "../../components/shared/case-study/3-image-card-row";
import FourimgCrd from "../../components/shared/case-study/4-image-card";
import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseDetails from "../../components/shared/case-study/case-details";
import Execution from "../../components/shared/case-study/execution";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";

function Yascf() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "YASCF",
      href: "",
    },
  ];

  const EXECUTION_DATA = [
    {
      title: "Scriptwriting",
      text: "We wrote a cinematic monologue that paired poetic theology with cultural storytelling.",
    },
    {
      title: "Voice casting",
      text: "We casted a male and female voice actor, whose tones embodied the fire and mystery of the script.",
    },
    {
      title: "Sound design",
      text: "Mythical textures blended with suspenseful pads.",
    },
  ];
  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />
      <CaseStudyVideoHeader videoUrl={"/video/ina-disp.mp4"} />
      <CaseDetails assetType="video" assetLink="/video/ina-stretch.webm" />
      <ThreeImgCrdRow
        imagesUrl={[
          "/images/casestudy/ina-14.png",
          "/images/casestudy/ina-15.png",
          "/images/casestudy/ina-12.png",
        ]}
      />
      {/* THE BRIEF */}
      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              The brief
            </span>
            <div className="flex flex-col gap-6">
              <h5 className="text-center">
                “We want to give a creative spin to a spiritual event that will
                spark curiosity. People shouldn't know what the event is about
                until they get here”
              </h5>
              <p className=" text-center">
                The “ask” was simple… craft an unforgettable prelude that would
                stir emotions, raise anticipation, and set the tone for the
                meeting.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}

      <TwoImgCrdRow
        imagesUrl={[
          "/images/casestudy/ina-11.png",
          "/images/casestudy/ina-4.png",
        ]}
      />

      {/* INSIGHT & CREATIVE STRATEGY */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              INSIGHT & CREATIVE STRATEGY
            </span>
            <div className="flex flex-col gap-6">
              <p className="text-xl text-center">
                We asked: “What if we told a story in a different language. We
                had the idea of writing a part of the story in Greek. Since the
                new testament bible was originally written in Greek, Hebrew and
                Aramaic.
              </p>
              <span>
                <h5 className="text-center mb-0">
                  "Ipárchi kapnós chorís fotιά í fotιά chorís fos?"
                </h5>
                <h5 className="text-center font-instrumental-serif">
                  (Is there smoke without fire or fire without light?)
                </h5>
              </span>
              <p className="text-xl text-center">
                The “ask” was simple… craft an unforgettable prelude that would
                stir emotions, raise anticipation, and set the tone for the
                meeting.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* INSIGHT & CREATIVE STRATEGY */}
      <FourimgCrd
        imagesUrl={[
          "/images/casestudy/ina-1.png",
          "/images/casestudy/ina-6.png",
          "/images/casestudy/ina-3.png",
          "/images/casestudy/ina-8.png",
        ]}
      />
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              Execution & Experience Design
            </span>
            <Execution data={EXECUTION_DATA} />
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">Result</span>
            <div>
              <p className="text-xl">
                Even with a late rollout, the audio piece sparked:
              </p>
              <div className="mt-4">
                <ul className="list-disc pl-10">
                  <li>
                    <p>
                      Elevated curiosity: “What is this?” “Is it a film?”, “I
                      have to be a part of this".
                    </p>
                  </li>
                  <li>
                    <p>Word-of-mouth shares and social media buzz.</p>
                  </li>
                  <li>
                    <p>First-time audience interest.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* RESULT */}
    </main>
  );
}

export default Yascf;
