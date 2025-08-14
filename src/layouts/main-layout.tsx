import NavigationBar from "../components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/shared/footer";
import OurWork from "../pages/our-work";
import Ina from "../pages/case-study/ina";
import Yascf from "../pages/case-study/yascf";
import ScrollToTop from "../components/scroll-to-top";
import Shido from "../pages/case-study/shimon-doyin";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work/ina" element={<Ina />} />
        <Route path="/our-work/shimon-doyin" element={<Shido />} />
        <Route path="/our-work/tale-two-house" element={<Shido />} />
        <Route path="/our-work/yascf" element={<Yascf />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayout;
