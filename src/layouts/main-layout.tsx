import NavigationBar from "../components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/shared/footer";

function MainLayout() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayout;
