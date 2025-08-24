import { useState, type ReactNode } from "react";
import OneImgCrd from "../../components/shared/case-study/1-image-card";
import ReactPlayer from "react-player";
import { TwoRow } from "./tales-two-house";
import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseDetails from "../../components/shared/case-study/case-details";
import IndxGrdLt from "../../components/shared/case-study/index-gird-list";
import ProjectPager from "../../components/shared/case-study/project-pager";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";

function Google() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "GOOGLE",
      href: "",
    },
  ];

  const RECORDING_DATA = [
    {
      text: (
        <div>
          <SmallVideo
            videoLink="https://youtu.be/URrne-G7xq0?si=BOJtevHbCO4ih4jF"
            text="Attitude"
          />
        </div>
      ),
    },
    {
      text: (
        <div className="w-full">
          <SmallVideo
            videoLink="https://youtu.be/lYlpLwkweBs?si=xbTEvSDUAnVO84np"
            text=" Polished, Techie, Informed"
          />
        </div>
      ),
    },
    {
      text: (
        <div>
          <SmallVideo
            videoLink="https://youtu.be/zwAiLFKZw2M?si=7DLepCxuRSXasb9R"
            text="Soft, grounded, sincere"
          />
          <p>
            {" "}
            A voice that could pause… and let silence carry the emotion too.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <SmallVideo
            videoLink="https://youtu.be/AAOln1Hr_Mc?si=CUlySCBS2rKILCaE"
            text=" Energy, fun, familiar"
          />
        </div>
      ),
    },
  ];

  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />

      <CaseStudyVideoHeader
        videoUrl={"https://youtu.be/bY1dP6Ix02U?si=Yl9pNBHoVSrslQDs"}
        videoFormat="video/webm"
      />

      <CaseDetails
        assetType="video"
        assetLink="https://youtu.be/nVhvJo_y-kQ?si=0llwXWWoNMHWHeHJ"
        aboutHead="Riquesa Turns Nigeria's Year-in-Search into a Fashion Show"
        aboutBody="Every December, Google releases Year in Search—the moments people searched, obsessed over, cried about, danced to, and argued about. Riquesa reimagined it for Nigeria: each top search category became its own runway segment—movies, music, food, loss, trending words, and gadgets—complete with styling, models, and distinct themes."
        client="Riquesa x Google"
        year="2024"
        industry="Fashion, Tech, Culture, Event Storytelling"
        service="Voice Casting • Voice Direction • Voiceover Recording"
      />

      <OneImgCrd assetType="image" assetLink="/images/casestudy/google-2.png" />

      {/* THE BRIEF */}
      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              The brief
            </span>
            <div className="flex flex-col gap-6">
              <p className="p-lg text-center">
                We need voices to carry each segment, blending the runway
                fashion with the category search.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}

      <OneImgCrd assetLink="/images/casestudy/google-1.png" assetType="image" />

      {/* INSIGHT & CREATIVE STRATEGY */}
      <section className="">
        <div className="mx-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-start">
              Execution & Experience Design
            </span>
            <div className="flex flex-col gap-15">
              <TwoRow>
                <div className="w-full">
                  <h5>Voice Casting</h5>
                </div>
                <div className="w-full">
                  <p className="p-lg">
                    We cast male and female voices to drive the story for each
                    category.
                  </p>
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Recording and Vocal Direction </h5>
                </div>
                <div className="w-full">
                  <IndxGrdLt data={RECORDING_DATA} />
                </div>
              </TwoRow>
            </div>
          </div>
        </div>
      </section>
      {/* INSIGHT & CREATIVE STRATEGY */}

      <OneImgCrd assetLink="/images/casestudy/google-5.jpg" assetType="image" />

      {/* THE WIN */}
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              The win
            </span>
            <div>
              <p className="p-lg">
                We brought life to the show in a way that visuals alone couldn’t
                carry.
              </p>
              <p className="p-lg">And the best part? The client was hype.</p>
              <p className="p-lg">
                The voices became part of the experience — not an add-on, but an
                anchor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectPager />
      {/* THE WIN */}
    </main>
  );
}

export default Google;

const SmallVideo = ({
  videoLink,
  text,
}: {
  videoLink: string;
  text: string;
}) => {
  const [loaded, setloaded] = useState(false);
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="w-full aspect-[16/9] h-full bg-center rounded-lg transition-all duration-300 relative overflow-hidden">
        <ReactPlayer
          src={videoLink}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          loop={true}
          playsInline={true}
          config={{
            youtube: {
              playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
            },
            file: {
              attributes: {
                playsInline: true,
              },
            },
          }}
          onReady={() => setloaded(true)}
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* 
        {!loaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-red-700 " />
        )} */}
      </div>
      <span className="p-lg">{text}</span>
    </div>
  );
};
