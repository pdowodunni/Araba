import NavigationBar from "../components/nav-bar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/shared/footer";
import OurWork from "../pages/our-work";
import Service from "../pages/servicesVoice";

function MainLayout() {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/our-work" element={<OurWork />} />
				<Route path="/voiceover-service" element={<Service />} />
			</Routes>
			<Footer />
		</>
	);
}

export default MainLayout;
