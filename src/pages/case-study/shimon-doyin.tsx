import OneImgCrd from "../../components/shared/case-study/1-image-card";
import TwoImgCrdRow from "../../components/shared/case-study/2-image-card-row";
import ThreeImgCrdRow from "../../components/shared/case-study/3-image-card-row";
import FourimgCrd from "../../components/shared/case-study/4-image-card";
import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseDetails from "../../components/shared/case-study/case-details";
import Execution from "../../components/shared/case-study/execution";
import ProjectPager from "../../components/shared/case-study/project-pager";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";

function Shido() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "SHIMON & DOYIN",
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
      text: "For a happy ever after story, we casted a male voice over talent to bring the dreamy feeling to the event.",
    },
    {
      title: "Visual Storytelling",
      text: "Following the script, we accompanied the voice over narrations, sound design and even the silence, with compelling frames, giving meaning to their love story.",
    },
  ];
  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />

      <CaseStudyVideoHeader
        videoUrl={"/video/shido-1.webm"}
        videoFormat={"video/webm"}
      />

      <CaseDetails
        assetType="image"
        assetLink="/images/casestudy/shido-1.jpg"
        aboutHead="A fleeting day, forever memories: Doyin and Shimon's authentic wedding joy captured
"
        aboutBody="Weddings happen in a day. But the memories deserve to last forever. Doyin and Shimon had one of those weddings that felt like magic. Full of warmth, culture, connection, and raw, unfiltered joy. But when the final video came in, it didn’t reflect any of that.
"
        client="Doyin & Shimon Atunde"
        year="2025"
        industry="Non-profit, Education, Impact Storytelling"
        service="Narrative Development • Voiceover • Sound Design • Creative Direction • Video production"
      />

      <TwoImgCrdRow
        imagesUrl={[
          "/images/casestudy/shido-2.png",
          "/images/casestudy/shido-3.png",
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
              <p className=" text-center text-3xl">
                When Doyin reached out, she didn't come with a brief.
              </p>
              <div className="flex flex-col gap-1">
                <p className=" text-center text-3xl">
                  She came with a question:
                </p>
                <p className=" text-center text-3xl font-instrumental-serif">
                  “Can you make this feel like our love story? Something your
                  kids can grow up watching.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}

      <ThreeImgCrdRow
        imagesUrl={[
          "/images/casestudy/shido-4.webp",
          "/images/casestudy/shido-5.webp",
          "/images/casestudy/shido-6.webp",
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

      <FourimgCrd
        imagesUrl={[
          "/images/casestudy/shido-7.webp",
          "/images/casestudy/shido-8.webp",
          "/images/casestudy/shido-9.webp",
          "/images/casestudy/shido-10.webp",
        ]}
      />

      {/* <OneImgCrd
        assetLink="/images/casestudy/shido-11.webp"
        assetType="image"
      /> */}

      {/* RESULT */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">Result</span>
            <div>
              <p className="text-xl">The final product?</p>

              <div>
                <p className="text-xl">
                  A 25-minute wedding documentary that told their love story.
                </p>
                <p className="text-xl">
                  It was intimate, timeless, and rich with emotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectPager />
    </main>
  );
}

export default Shido;
