import type { ReactNode } from "react";
import OneImgCrd from "../../components/shared/case-study/1-image-card";
import TwoImgCrdRow from "../../components/shared/case-study/2-image-card-row";
import ThreeImgCrdRow from "../../components/shared/case-study/3-image-card-row";
import FourimgCrd from "../../components/shared/case-study/4-image-card";
import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseDetails from "../../components/shared/case-study/case-details";
import Execution from "../../components/shared/case-study/execution";
import IndxGrdLt, {
  Holder,
} from "../../components/shared/case-study/index-gird-list";
import ProjectPager from "../../components/shared/case-study/project-pager";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";
import NumberedPoint from "../../components/shared/numbered-points";
import TwoRowGrdTxtHolder from "../../components/shared/layout/2-row-grid-text-holder";

function Unscene() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "UNSCENE",
      href: "",
    },
  ];

  const BRIEF_DATA = [
    {
      text: (
        <p className="p-lg">
          <em className="font-interTight-semibold">
            Inspires the congregation
          </em>{" "}
          by revealing the unseen labor of love behind Sunday services
        </p>
      ),
    },
    {
      text: (
        <p className="p-lg">
          <em className="font-interTight-semibold">
            Strengthens community and teamwork
          </em>{" "}
          across departments
        </p>
      ),
    },
    {
      text: (
        <p className="p-lg">
          <em className="font-interTight-semibold">Drives emotional buy-in</em>{" "}
          for the upcoming Fusion Center (The New’s permanent worship home)
        </p>
      ),
    },
    {
      text: (
        <p className="p-lg">
          <em className="font-interTight-semibold">
            Raises awareness and support
          </em>{" "}
          through a strategic storytelling tool
        </p>
      ),
    },
  ];

  const EXECUTION_DATA = [
    {
      text: <h5>SCRIPTWRITING</h5>,
    },
    {
      text: <h5>STORY ARC DEVELOPMENT</h5>,
    },
    {
      text: <h5>VOICE CASTING</h5>,
    },
    {
      text: <h5>VISUAL STORYTELLING</h5>,
    },
  ];

  const RESULT_DATA = [
    {
      text: <p className="p-lg">45-min Documentary</p>,
    },
    {
      text: (
        <p className="p-lg">
          Social Media Cutdowns for Instagram, WhatsApp & Facebook
        </p>
      ),
    },
    {
      text: (
        <p className="p-lg">
          Branded Video Assets for partnership, volunteer onboarding, and
          fundraising
        </p>
      ),
    },
  ];

  const WHATS_INCLUDED = [
    {
      head: "Essentials",
      text: (
        <div>
          {[
            "Scriptwriting",
            "Story arc development",
            "Voice Casting",
            "Visual Storytelling",
          ].map((item, idx) => (
            <NumberedPoint
              key={idx}
              item={item}
              idx={idx}
              itemClassName="p-lg"
            />
          ))}
        </div>
      ),
    },
    {
      head: "Results",
      text: (
        <div>
          {[
            "45-min Documentary",
            "Social Media Cutdowns for Instagram, WhatsApp & Facebook",
            "Branded Video Assets for partnership, volunteer onboarding, and fundraising",
          ].map((item, idx) => (
            <NumberedPoint
              key={idx}
              item={item}
              idx={idx}
              itemClassName="p-lg"
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <main
      className="p-main"
      style={{
        backgroundImage: "url('/images/n-b.png')",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <BreadCrumb pages={BREADCRUMB_PAGES} />
      <CaseStudyVideoHeader
        videoUrl={"https://www.youtube.com/watch?v=FW5AOBFGRO8"}
        videoFormat="video/webm"
      />
      {/* YT not available  */}
      <CaseDetails
        assetType="video"
        assetLink="/video/unscene-1.webm"
        aboutHead="What if a Sunday service wasn't just something people experienced… but something they understood?"
        aboutBody=" That was the heart behind Service Behind the Service — a full-length documentary that peeled back the curtains on what really goes into creating a seamless worship experience at The New Church."
        client="The New Church"
        year="2024"
        industry="Faith Culture & Experimental Events"
        service="Phygital Documentary Prototype"
      />
      {/* THE BRIEF */}
      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              The brief
            </span>
            <div className="flex flex-col gap-10">
              <h5 className="">Create a documentary that:</h5>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-between gap-10 sm:gap-5 lg:gap-10 xl:gap-25">
                  {BRIEF_DATA.map((itm, idx) => {
                    return (
                      <div key={idx}>
                        <div className="flex flex-col gap-4">
                          <span className="s-heading w-full border-b-2 border-[#D9D9D9]">
                            0{idx + 1}
                          </span>
                          <div className="max-w-[600px]">{itm.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}
      <OneImgCrd assetType="video" assetLink="https://youtu.be/r_ZRiLQR5KY" />
      {/* Execution & Experience Design */}
      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              Execution & Experience Design
            </span>
            <div className="flex flex-col gap-6">
              <div>
                <IndxGrdLt data={EXECUTION_DATA} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Execution & Experience Design */}
      {/* RESULT */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">RESULT</span>
            <IndxGrdLt data={RESULT_DATA} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-container">
          <div>
            <TwoRowGrdTxtHolder data={WHATS_INCLUDED} />
          </div>
        </div>
      </section>

      {/* RESULT */}
      <ProjectPager />
    </main>
  );
}

export default Unscene;

const TwoRow = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-[400px_1fr] gap-8">{children}</div>;
};
