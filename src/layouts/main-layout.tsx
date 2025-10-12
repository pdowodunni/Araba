import NavigationBar from "../components/nav-bar";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import Home from "../pages/Home";
import Footer from "../components/shared/footer";
import OurWork from "../pages/our-work";
import Ina from "../pages/case-study/ina";
import Yascf from "../pages/case-study/yascf";
import ScrollToTop from "../components/scroll-to-top";
import Shido from "../pages/case-study/shimon-doyin";
import TaleTwoHouse from "../pages/case-study/tales-two-house";
import Unscene from "../pages/case-study/unscenes";
import MusicSoundDesign from "../pages/music-sound-design";
import Google from "../pages/case-study/google";
import ImmersiveAudio from "../pages/immersive-audio";
import PhygitalStorytelling from "../pages/phygital-storytelling";
import VideoProduction from "../pages/video-production";
import VoiceOver from "../pages/voiceover-services";
import AudiobookProduction from "../pages/audiobook-production";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollRestorationFix from "../components/scroll-restore";
import LetsTalk from "../pages/lets-talk";

function MainLayout() {
  const location = useLocation();

  // 1) Keep a distinct ref per pathname
  const refMap = useRef(new Map<string, React.RefObject<HTMLDivElement>>());
  const getNodeRef = (key: string) => {
    let r = refMap.current.get(key);
    if (!r) {
      r = React.createRef<HTMLDivElement>();
      refMap.current.set(key, r);
    }
    return r;
  };
  const nodeRef = getNodeRef(location.pathname);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const enter = (node: HTMLElement) => {
    gsap.killTweensOf(node);
    if (reduce) {
      gsap.set(node, { autoAlpha: 1, clearProps: "filter" });
      return;
    }
    gsap
      .timeline({ defaults: { ease: "power2.out" } })
      .set(node, { autoAlpha: 0, filter: "blur(8px)" })
      .to(node, { autoAlpha: 1, duration: 0.6 }, 0)
      .to(node, { filter: "blur(0px)", duration: 1 }, 0);
  };

  const exit = (node: HTMLElement) => {
    gsap.killTweensOf(node);
    if (reduce) return;
    gsap.to(node, {
      autoAlpha: 0,
      filter: "blur(8px)",
      duration: 0.35,
      ease: "power2.in",
    });
  };

  return (
    <>
      {/* Keep navbar outside the animated container so it stays fixed */}
      <ScrollRestorationFix />
      <ScrollToTop />
      <NavigationBar />

      <TransitionGroup component={null}>
        <Transition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={{ enter: 700, exit: 500 }}
          onEnter={() => {
            const node = nodeRef.current!;
            enter(node);
          }}
          onExit={() => {
            const node = nodeRef.current!;
            exit(node);
          }}
          mountOnEnter
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className="min-h-screen"
            style={{ willChange: "opacity, filter" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lets-talk" element={<LetsTalk />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work/ina" element={<Ina />} />
              <Route path="/our-work/shimon-doyin" element={<Shido />} />
              <Route
                path="/our-work/tale-two-house"
                element={<TaleTwoHouse />}
              />
              <Route path="/our-work/unscene" element={<Unscene />} />
              <Route path="/our-work/yascf" element={<Yascf />} />
              <Route path="/our-work/google" element={<Google />} />
              <Route
                path="/service/music-sound-design"
                element={<MusicSoundDesign />}
              />
              <Route
                path="/service/immersive-experiential-audio"
                element={<ImmersiveAudio />}
              />
              <Route
                path="/service/phygital-storytelling"
                element={<PhygitalStorytelling />}
              />
              <Route
                path="/service/video-production"
                element={<VideoProduction />}
              />
              <Route
                path="/service/voiceover-services"
                element={<VoiceOver />}
              />
              <Route
                path="/service/audiobook-production"
                element={<AudiobookProduction />}
              />
            </Routes>
            <Footer />
          </div>
        </Transition>
      </TransitionGroup>
    </>
  );
}

export default MainLayout;
