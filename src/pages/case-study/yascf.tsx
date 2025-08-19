import OneImgCrd from "../../components/shared/case-study/1-image-card";
import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseDetails from "../../components/shared/case-study/case-details";
import Execution from "../../components/shared/case-study/execution";
import ProjectPager from "../../components/shared/case-study/project-pager";
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
      text: "We told the story using reverse story architecture, starting from the footage, and carefully building the narrative backwards.",
    },
    {
      title: "Voice casting",
      text: "We casted a male voice actor, whose rich tone embodied the gentle, yet impactful work of YASCF.",
    },
    {
      title: "Visual storytelling",
      text: "Following the script, we accompanied the voice over narrations, sound design and even the silence, with compelling frames, giving meaning to the entire story.",
    },
    {
      title: "Sound design",
      text: "Once the arc was clear, we layered in soft sound textures and ambient music, just enough to carry the emotion, without overwhelming it.",
    },
  ];
  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />

      <CaseStudyVideoHeader
        videoUrl={"https://youtu.be/MFpBx706e3E?si=5ygKrMRwOkW49igP"}
        poster="/images/casestudy/yascf-1.jpg"
      />

      <CaseDetails
        assetType="image"
        assetLink="/images/casestudy/yascf-1.jpg"
        aboutHead="YASC Foundation provides scholarships to indigent Ilesa students through university."
        aboutBody="YASCF has spent over ten years doing the quiet, consistent work of changing lives, one child, one school, one opportunity at a time. They've offered scholarships, empowered teachers, and shaped futures for students across Nigeria."
        client="YASCF"
        year="2024"
        industry="Non-profit, Education, Impact Storytelling"
        service="Narrative Development • Voiceover • Sound Design • Creative Direction • Video Post-production"
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
                To mark a decade of impact, we want to create a documentary that
                feels like <em className="font-interTight-semibold">US</em> .
                Grounded. Humble. Transformational.
              </h5>
              <p className=" text-center">
                They had a version of the story that didn't quite communicate
                the essence of their work…
              </p>
              <p className=" text-center font-instrumental-serif">
                “Can you help us bring this back to life?”
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}
      {/* YT  not available */}
      <OneImgCrd assetType="video" assetLink="/video/yascf-1.webm" />

      {/* INSIGHT & CREATIVE STRATEGY */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              INSIGHT & CREATIVE STRATEGY
            </span>
            <div className="flex flex-col gap-6">
              <p className="text-xl text-center">
                We were given what already existed: interviews, b-roll,
                reactions, half-finished thoughts… and our job was to find the
                story inside the noise.
              </p>
              <p className="text-xl text-center">
                Our Approach? Piece by Piece, Frame by Frame
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* INSIGHT & CREATIVE STRATEGY */}

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

      <OneImgCrd assetType="image" assetLink="/images/casestudy/yascf-3.jpg" />

      {/* RESULT */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">Result</span>
            <div>
              <p className="text-xl">
                In less than 5days, we transformed raw, unstructured footage
                into a cohesive, emotionally resonant documentary:
              </p>
              <p className="text-xl">
                It became the core material for YASCF's 10-year anniversary,
                used to engage donors, showcase legacy, and inspire future
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* RESULT */}

      <ProjectPager />
    </main>
  );
}

export default Yascf;
