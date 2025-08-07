import About from "../components/hero/about";
import BrandCarousel from "../components/hero/brand-carousel";
import FaqAccordion from "../components/hero/FAQ";
import HeroHeader from "../components/hero/header";
import HowWeSolveProblem from "../components/hero/how-solve-problem";
import OurDifferenceSection from "../components/hero/our-difference";
import WorkShowcase from "../components/hero/our-work";
// import ScrollGrowBox from "../components/shared/scroll-grow-box";
import VerticalSnapCarousel from "../components/shared/testimonial";

function Home() {
  return (
    <main>
      <HeroHeader />
      <BrandCarousel />
      <About />
      <WorkShowcase />
      {/* <ScrollGrowBox /> */}
      <HowWeSolveProblem />
      <OurDifferenceSection />
      <VerticalSnapCarousel />
      <FaqAccordion />
    </main>
  );
}

export default Home;
