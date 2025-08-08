// import { type ReactNode } from "react";
import HoverContainer from "../../shared/hover-continer";
import { Link } from "react-router-dom";

export default function ServicesDropDown() {
	{
		/* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
	}

	// const CREATIVE_DESIGN_SERVICES = [
	//   { mainText: "Ad creative", subText: "Eye-catching designs that perform" },
	//   {
	//     mainText: "Social media creative",
	//     subText: "Engaging assets for all platforms",
	//   },
	//   {
	//     mainText: "Presentation design",
	//     subText: "Captivating slides that tell your story",
	//   },
	//   {
	//     mainText: "Illustration design",
	//     subText: "Visual storytelling for your brand",
	//   },
	//   {
	//     mainText: "Branding services",
	//     subText: "Expertise & custom design services",
	//   },
	//   {
	//     mainText: "Email creation",
	//     subText: "Click-worthy emails that drive engagement",
	//   },
	//   { mainText: "Web design", subText: "Stunning websites built to engage" },
	//   {
	//     mainText: "eBooks & report design",
	//     subText: "Your digital content supercharged",
	//   },
	//   {
	//     mainText: "Concept creation",
	//     subText: "Big ideas crafted for maximum impact",
	//   },
	//   {
	//     mainText: "Print design",
	//     subText: "Tangible designs that leave a lasting impression",
	//   },
	//   {
	//     mainText: "Packaging & merchandise design",
	//     subText: "Bring your brand to life",
	//   },
	// ];

	// const SPECIALIZED_PRODUCTION_SERVICES = [
	//   {
	//     mainText: "Video production",
	//     subText: "Effortless video production at scale",
	//   },
	//   {
	//     mainText: "Motion design",
	//     subText: "For websites, ads, and presentations",
	//   },
	//   {
	//     mainText: "3D & AR design",
	//     subText: "Innovative solutions for 3D design services",
	//   },
	// ];

	// const AI_SERVICES = [
	//   {
	//     mainText: "AI enhanced creative",
	//     subText: "Human brilliance powered by AI",
	//   },
	//   {
	//     mainText: "AI consulting",
	//     subText: "Maximize AI with tailored strategies",
	//   },
	// ];

	// const MARKETING_SERVICES = [
	//   {
	//     mainText: "Marketing strategy",
	//     subText: "Grow your brand with expert consultants",
	//   },
	// ];

	const ABOUT_DATA = [
		{
			image: "/images/1(13).jpg",
			title: "Voiceover",
			text: "Only real-sounding brands get remembered",
			href: "/voiceover-service",
		},
		{
			image: "/images/placeholder.jpg",
			title: "Music & Sound Design",
			text: "The tech powering your creative edge",
			href: "/music-sound-design",
		},
		{
			image: "/images/1(12).jpg",
			title: "Immersive & Experiential Audio",
			text: "Meet our dedicated team",
			href: "/Immersive-experiential-audio",
		},
	];

	//   return (
	//     <div className="relative z-5">
	//       <div className="pointer-events-auto relative top-full left-0 w-screen bg-light-bg shadow-lg pt-12">
	//         <div className="grid grid-cols-3 gap-8 mx-container h-[calc(100vh-78px)]">
	//           {/* Column 1 */}
	//           <div>
	//             <HeaderBadge textColor="#0A221F" bgColor="#D8FF85">
	//               Creative design services
	//             </HeaderBadge>
	//             <ul className="flex flex-col gap-7">
	//               {CREATIVE_DESIGN_SERVICES.map((it, idx) => {
	//                 return (
	//                   <li key={idx} className="cursor-pointer">
	//                     <div className="relative">
	//                       <HoverContainer color="#0a211f">
	//                         <p className="text-[#0a211f] ">{it.mainText}</p>
	//                       </HoverContainer>
	//                       <p className="text-sm text-[#0a211f] mt-2">
	//                         {it.subText}
	//                       </p>
	//                     </div>
	//                   </li>
	//                 );
	//               })}
	//             </ul>
	//           </div>

	//           {/* Column 2 */}
	//           <div>
	//             <HeaderBadge bgColor="#2A4E45" textColor="#8dfdba">
	//               Specilaized production services
	//             </HeaderBadge>
	//             <ul className="flex flex-col gap-7">
	//               {SPECIALIZED_PRODUCTION_SERVICES.map((it, idx) => {
	//                 return (
	//                   <li key={idx}>
	//                     <div>
	//                       <HoverContainer color="#0a211f">
	//                         <p className="text-[#0a211f] ">{it.mainText}</p>
	//                       </HoverContainer>
	//                       <p className="text-sm text-[#0a211f] mt-2">
	//                         {it.subText}
	//                       </p>
	//                     </div>
	//                   </li>
	//                 );
	//               })}
	//             </ul>
	//           </div>

	//           {/* Column 3 */}
	//           <div>
	//             <HeaderBadge textColor="#F6F9F2" bgColor="#18546D">
	//               AI services
	//             </HeaderBadge>
	//             <ul className="flex flex-col gap-7 mb-10">
	//               {AI_SERVICES.map((it, idx) => {
	//                 return (
	//                   <li key={idx}>
	//                     <div>
	//                       <HoverContainer color="#0a211f">
	//                         <p className="text-[#0a211f] ">{it.mainText}</p>
	//                       </HoverContainer>
	//                       <p className="text-sm text-[#0a211f] mt-2">
	//                         {it.subText}
	//                       </p>
	//                     </div>
	//                   </li>
	//                 );
	//               })}
	//             </ul>

	//             <HeaderBadge textColor="#0A221F" bgColor="#E6D3B0">
	//               Marketing services
	//             </HeaderBadge>
	//             <ul className="flex flex-col gap-7 mb-10">
	//               {MARKETING_SERVICES.map((it, idx) => {
	//                 return (
	//                   <li key={idx}>
	//                     <div>
	//                       <HoverContainer color="#0a211f">
	//                         <p className="text-[#0a211f] ">{it.mainText}</p>
	//                       </HoverContainer>
	//                       <p className="text-sm text-[#0a211f] mt-2">
	//                         {it.subText}
	//                       </p>
	//                     </div>
	//                   </li>
	//                 );
	//               })}
	//             </ul>
	//           </div>

	//           {/* Column 4: empty or future */}
	//           <div />
	//         </div>
	//       </div>
	//     </div>
	//   );
	// }

	// const HeaderBadge = ({
	//   children,
	//   bgColor,
	//   textColor,
	// }: {
	//   children: ReactNode;
	//   bgColor: string;
	//   textColor: string;
	// }) => {
	//   return (
	//     <div
	//       className={`font-instrumental-regular w-fit text-2xl px-2 py-1 rounded-lg mb-10`}
	//       style={{
	//         backgroundColor: bgColor,
	//         color: textColor,
	//       }}
	//     >
	//       {children}
	//     </div>
	//   );
	// };

	return (
		<div className="relative z-5">
			<div className="pointer-events-auto relative top-full left-0 w-screen bg-white shadow-lg py-12 ">
				<div className="grid grid-cols-3 gap-8 mx-container h-fit">
					{ABOUT_DATA.map((itm, idx) => {
						return (
							<Link to={itm.href}>
								<div className="w-full flex flex-col gap-4 group" key={idx}>
									<div
										className="w-full h-60 bg-center
                            bg-[length:100%]
                            group-hover:bg-[length:105%]
                            transition-all
                            duration-300"
										style={{ backgroundImage: `url('${itm.image}')` }}
									/>
									<div>
										<HoverContainer color="#0a211f">
											<p className="text-[#0a211f] ">{itm.title}</p>
										</HoverContainer>
										<p className="text-sm text-[#0a211f] mt-1">{itm.text}</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
