import Header from "../components/our-work/header";
import Portfolio from "../components/our-work/portfolio";
import LogoCarousel from "../components/shared/logo-carousel";
import ScrollReveal from "../components/shared/scrool-reveal";

function OurWork() {
  return (
    <main className="p-main">
      {/* <ScrollReveal> */}
      <Header />
      {/* </ScrollReveal> */}
      <div className="mx-container">
        <div className="flex justify-center items-center">
          <LogoCarousel />
        </div>
      </div>
      <Portfolio />
    </main>
  );
}

export default OurWork;
