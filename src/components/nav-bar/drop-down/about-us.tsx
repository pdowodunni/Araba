// import { Link } from "react-router-dom";
// import HoverContainer from "../../shared/hover-continer";

// export default function ServiceDropDown() {
//   const ABOUT_DATA = [
//     {
//       image: "/images/1(13).jpg",
//       title: "Voiceover",
//       text: "Only real-sounding brands get remembered",
//       href: "/voiceover-service",
//     },
//     {
//       image: "/images/placeholder.jpg",
//       title: "Music & Sound Design",
//       text: "The tech powering your creative edge",
//       href: "/music-sound-design",
//     },
//     {
//       image: "/images/1(12).jpg",
//       title: "Immersive & Experiential Audio",
//       text: "Meet our dedicated team",
//       href: "/Immersive-experiential-audio",
//     },
//   ];
//   return (
//     <div className="relative z-5">
//       <div className="pointer-events-auto relative top-full left-0 w-screen bg-white shadow-lg py-12 ">
//         <div className="grid grid-cols-3 gap-8 mx-container h-fit">
//           {ABOUT_DATA.map((itm, idx) => {
//             return (
//               <Link to={itm.href}>
//                 <div className="w-full flex flex-col gap-4 group" key={idx}>
//                   <div
//                     className="w-full h-60 bg-center
//                             bg-[length:100%]
//                             group-hover:bg-[length:105%]
//                             transition-all
//                             duration-300"
//                     style={{ backgroundImage: `url('${itm.image}')` }}
//                   />
//                   <div>
//                     <HoverContainer color="#0a211f">
//                       <p className="text-[#0a211f] ">{itm.title}</p>
//                     </HoverContainer>
//                     <p className="text-sm text-[#0a211f] mt-1">{itm.text}</p>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
