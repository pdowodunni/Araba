import NavigationBar from "../components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/shared/footer";
import OurWork from "../pages/our-work";

function MainLayout() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayout;
