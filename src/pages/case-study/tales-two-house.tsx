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
import IndxGrdLt from "../../components/shared/case-study/index-gird-list";
import ProjectPager from "../../components/shared/case-study/project-pager";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";

function TaleTwoHouse() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "A TALE OT TWO HOUSE",
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

  const BRIEF_DATA = [
    {
      text: (
        <p>
          <em className="font-interTight-semibold">Adapting the book</em> into a
          multi-character audio drama for emotional depth and realism
        </p>
      ),
    },
    {
      text: (
        <p>
          <em className="font-interTight-semibold">Casting a mix of voices,</em>{" "}
          the author plus three additional talents playing multiple roles
        </p>
      ),
    },
    {
      text: (
        <p>
          <em className="font-interTight-semibold">
            Producing immersive sound design
          </em>{" "}
          to make each scene feel lived-in
        </p>
      ),
    },
    {
      text: (
        <p>
          <em className="font-interTight-semibold">
            Creating a listener–author feedback loop
          </em>{" "}
          by embedding the author’s email at each reflection point
        </p>
      ),
    },
    {
      text: (
        <p>
          <em className="font-interTight-semibold">
            Developing marketing-ready content
          </em>{" "}
          to promote the audiobook across social platforms
        </p>
      ),
    },
    {
      text: (
        <p>
          <em className="font-interTight-semibold">
            Handling full distribution
          </em>{" "}
          to Audible, Findaway Voices, Selar, and other platforms
        </p>
      ),
    },
  ];

  const FULLCAST_DATA = [
    {
      text: (
        <p>
          Cast the author himself alongside three other voice actors (each
          playing multiple roles)
        </p>
      ),
    },
    {
      text: (
        <p>
          Directed performances to match tone, character emotion, and scene
          intent
        </p>
      ),
    },
    {
      text: (
        <p>
          Ensured every delivery honoured the book’s themes:{" "}
          <em className="font-interTight-semibold">
            Family, Faith, Finance, and Values
          </em>
        </p>
      ),
    },
  ];

  const CONTENT_DATA = [
    {
      text: (
        <p>Filmed behind-the-scenes moments from the recording sessions.</p>
      ),
    },
    {
      text: (
        <p>
          Created short-form promotional content tailored for social media ads,
          reels, and teasers.
        </p>
      ),
    },
    {
      text: (
        <p>
          Developed a visual narrative around the making of the audiobook to
          boost awareness.
        </p>
      ),
    },
  ];

  const IMMERSIVE_DATA = [
    {
      text: <p>Ambient background atmospheres</p>,
    },
    {
      text: <p>Realistic sound effects for location and action cues</p>,
    },
    {
      text: <p>Original music and smooth emotional transitions</p>,
    },
  ];
  const DELIEVERABLES_DATA = [
    {
      text: <h5>Full-cast immersive audio drama</h5>,
    },
    {
      text: <h5> Marketing videos & teasers</h5>,
    },
    {
      text: <h5>Adapted audio-first script</h5>,
    },
    {
      text: <h5>Complete sound design & mixing</h5>,
    },
    {
      text: <h5>Multi-platform distribution</h5>,
    },
    {
      text: (
        <h5>
          Reflection points expanded into an interactive self-help workbook
        </h5>
      ),
    },
  ];

  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />
      <CaseStudyVideoHeader
        videoUrl={"/video/tth-1.webm"}
        videoFormat="video/webm"
      />
      <CaseDetails
        assetType="image"
        assetLink="/images/casestudy/tth-6.webp"
        aboutHead="A Tale of Two Houses by Niyi Adekunle began as a values-driven book centred on Family, Faith, Finance, and Values."
        aboutBody="We transformed it into a full-cast immersive audio drama,  reimagining the story for the ear, bringing characters to life with multiple voices (including the author himself), cinematic sound design, and chapter-by-chapter engagement tools.
From script adaptation and casting to marketing content creation and multi-platform distribution, we delivered the project end-to-end."
        client="The New"
        year="2024"
        industry="Faith Culture & Experimental Events"
        service="Script Adaptation • Voice Casting & Direction • Audio Production & Sound Design • Content Creation • Marketing Assets • Distribution"
      />

      <OneImgCrd assetType="image" assetLink="/images/casestudy/tth-12.webp" />

      {/* THE BRIEF */}
      <section>
        <div className="case-container">
          <div className="py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              The brief
            </span>
            <div className="flex flex-col gap-6">
              <p className="">
                The original manuscript carried deep, relatable themes, but as a
                single-narrator audiobook, it risked losing the richness of its
                conversations and reflections.
              </p>
              <p>We proposed:</p>
              <div>
                <IndxGrdLt data={BRIEF_DATA} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* THE BRIEF */}

      <TwoImgCrdRow
        imagesUrl={[
          "/images/casestudy/tth-14.webp",
          "/images/casestudy/tth-5.webp",
        ]}
      />

      {/* INSIGHT & CREATIVE STRATEGY */}
      <section className="">
        <div className="mx-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-start">
              OUR APPROACH
            </span>
            <div className="flex flex-col gap-15">
              <TwoRow>
                <div className="w-full">
                  <h5>Reimagined for Audio Drama</h5>
                </div>
                <div className="w-full">
                  <p className="p-lg">
                    We adapted the book into a multi-character script,
                    restructuring scenes for pacing, natural dialogue, and
                    immersive listening.
                  </p>
                  <p className="p-lg">
                    Each chapter was built to sound like a world, not just a
                    reading.
                  </p>
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Full-Cast Production</h5>
                </div>
                <div className="w-full">
                  <IndxGrdLt data={FULLCAST_DATA} />
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Reimagined for Audio Drama</h5>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <IndxGrdLt data={IMMERSIVE_DATA} />
                  <p className="p-lg">
                    Every chapter was designed to pull the listener into the
                    scene.
                  </p>
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Author–Listener Feedback Loop</h5>
                </div>
                <div className="w-full">
                  <p className="p-lg">
                    We embedded the author’s{" "}
                    <em className="font-interTight-semibold">
                      email address at the end of each chapter’s reflection
                      points,
                    </em>{" "}
                    creating a direct bridge between audience and author for
                    deeper conversations.
                  </p>
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Content Creation for Marketing</h5>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <p className="p-lg">
                    We didn't just stop at the audio drama.
                  </p>
                  <p className="p-lg">We:</p>
                  <IndxGrdLt data={CONTENT_DATA} />
                </div>
              </TwoRow>

              <TwoRow>
                <div className="w-full">
                  <h5>Global Distribution</h5>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <p className="p-lg">
                    Handled the{" "}
                    <em className="font-interTight-semibold">
                      full distribution
                    </em>{" "}
                    process across major audio platforms:
                  </p>
                  <p className="p-lg">We:</p>
                  <IndxGrdLt
                    data={[
                      {
                        text: <p>Audible</p>,
                      },
                      {
                        text: <p>Findaway Voices</p>,
                      },
                      {
                        text: <p>Selar</p>,
                      },
                    ]}
                  />
                </div>
              </TwoRow>
            </div>
          </div>
        </div>
      </section>
      {/* INSIGHT & CREATIVE STRATEGY */}

      <FourimgCrd
        imagesUrl={[
          "/images/casestudy/tth-15.webp",
          "/images/casestudy/tth-2.webp",
          "/images/casestudy/tth-11.webp",
          "/images/casestudy/tth-10.webp",
        ]}
      />
      <section>
        <div className="case-container">
          <div className=" py-sm-pad flex flex-col gap-8">
            <span className="s-heading w-full flex justify-center">
              Final Deliverables
            </span>
            <IndxGrdLt data={DELIEVERABLES_DATA} />
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
                    <p>A living, breathing audio experience.</p>
                  </li>
                  <li>
                    <p>
                      A direct engagement tool between the author and his
                      audience.
                    </p>
                  </li>
                  <li>
                    <p>
                      A marketing-ready package designed to sell and inspire
                      globally.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectPager />
      {/* RESULT */}
    </main>
  );
}

export default TaleTwoHouse;

const TwoRow = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-[400px_1fr] gap-8">{children}</div>;
};
