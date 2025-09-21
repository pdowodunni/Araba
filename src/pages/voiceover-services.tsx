import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Bulb, Clipper, Mic, Script, Video, Voice } from "../assets/icons";
import AuxHeader from "../components/shared/aux-header";
import type { Item } from "../components/shared/card-slider";
import IndxGrdLt from "../components/shared/case-study/index-gird-list";
import TwoRowGrdTxtHolder from "../components/shared/layout/2-row-grid-text-holder";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import LogoCarousel from "../components/shared/logo-carousel";
import ScrollReveal from "../components/shared/scrool-reveal";
import { ShowCaseCardHorizontal } from "../components/shared/showcase-card-horizontal";
import SlideUpButton from "../components/shared/slide-up-button";
import VerticalSnapCarousel from "../components/shared/testimonial";
import SpotifyPlayback from "../components/spotify-playback";
import BrandCarousel from "../components/hero/brand-carousel";

function VoiceOver() {
  /* ===== AUXHEADER DATA ===== */
  const AUX_HEADER_DATA = {
    head: (
      <h1 className=" font-instrumental-regular leading-tight xl:leading-[90px] text-start text-[44px] md:text-[70px] xl:text-[100px]">
        <span>VOICEOVER SERVICES</span>
      </h1>
    ),
    text: (
      <div className="flex flex-col gap-2 max-w-[1000px]">
        <p className="text-white font-instrumental-serif text-start p-lg">
          “In a noisy, fast-scrolling world, only the brands that sound real
          will be remembered.”
        </p>
        <div className="flex flex-col gap-0 my-4">
          <p className="text-white text-start md:text-xl">
            Let's be honest. You've got a message worth hearing! But …
          </p>
          <ul className="pl-5 list-disc xl:text-xl flex flex-col gap-0 mt-2 text-white">
            <li>
              You're stuck using whoever's available, not who fits the story.
            </li>
            <li>
              Your script sounds like a script, not like real people talking.
            </li>
            <li>
              You're wasting time giving feedback, doing pickups, and still not
              getting what you want.
            </li>
            <li>
              You're using AI voice tools… but deep down, you know they're
              missing a soul.
            </li>
          </ul>
        </div>
        <p className="text-white text-start xl:text-xl">
          And that's where we come in.
        </p>
      </div>
    ),
  };
  const SCROLL_ITEMS: Item[] = [
    {
      backgroundLink: "/images/13.jpg",
      text: "Commercials & Radio Ads",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Explainers",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Corporate Narration",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "E-learning",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "IVR",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Character / Animation",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Documentary Voiceovers",
    },
    {
      backgroundLink: "/images/13.jpg",
      text: "Commercials & Radio Ads",
    },
    {
      backgroundLink: "/images/110.jpg",
      text: "Explainers",
    },
    {
      backgroundLink: "/images/17.jpg",
      text: "Corporate Narration",
    },
    {
      backgroundLink: "/images/111.jpg",
      text: "E-learning",
    },
    {
      backgroundLink: "/images/15.jpg",
      text: "IVR",
    },
    {
      backgroundLink: "/images/18.jpg",
      text: "Character / Animation",
    },
    {
      backgroundLink: "/images/14.jpg",
      text: "Documentary Voiceovers",
    },
  ];

  /* ===== ENGINEERED FOR EMOTION ===== */
  const ENGINEERED_EMOTION = {
    heading: "ENGINEERED FOR EMOTION",
    subheading: (
      <h4 className="font-medium leading-tight text-gray-900">
        We <em className="font-instrumental-serif">engineer emotion</em> into
        sound.
      </h4>
    ),
    text: (
      <div className="flex flex-col gap-6">
        <h5 className="leading-tight">
          Whether you're voicing a product, a mission, a moment, or a full-blown
          brand anthem…we help you make it hit home.
        </h5>
        <p className="p-lg">
          From casting to coaching to post-production, we handle the magic
          behind the mic, because when the right voice meets the right emotion,
          people Feel you, Trust you. And they Buy-in.
        </p>

        <div className="flex gap-4">
          <SlideUpButton
            type="fill"
            bgColor="var(--color-primary)"
            textColor="white"
          >
            Let's talk
          </SlideUpButton>
        </div>
      </div>
    ),
  };

  /* ===== CLIENTS DATA ===== */

  const WHATS_INCLUDED = [
    {
      head: "Concepting",
      Icon: Bulb,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Original Ideas and scriptwriting based on your brief
          </p>
        </div>
      ),
    },
    {
      head: "Script Consulting",
      Icon: Script,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            You send us the rough. We send you something tight, clean, and
            emotionally magnetic. Every word earns its place.
          </p>
        </div>
      ),
    },
    {
      head: "Voice casting",
      Icon: Mic,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            NO MORE RANDOM VOICES. We curate from our private talent pool, scout
            through partner agencies,
          </p>
        </div>
      ),
    },
    {
      head: "Live direction",
      Icon: Clipper,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            We coach and direct talents live so you don't have to. One session.
            Fewer edits. Better delivery.
          </p>
        </div>
      ),
    },
    {
      head: "Production",
      Icon: Video,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Recording, mixing, mastering done with love, precision, and our
            trusted studio partners.
          </p>
        </div>
      ),
    },
    {
      head: "Multilingual & Cultural Matching",
      Icon: Voice,
      text: (
        <div className="flex flex-col gap-4 text-center">
          <p className="p-lg">
            Whether it's Yoruba, Igbo, Swahili, Arabic, French, Hausa, or
            Transatlantic, we work with native.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main>
      <AuxHeader
        listItems={SCROLL_ITEMS}
        sHeading="AUDIOSTORYTELLING BY SOUNDBAKING COMPANY"
        backgroundImageLink="/images/23.jpg"
        {...AUX_HEADER_DATA}
      />

      <BrandCarousel />
      {/* <TxtImgSec {...ENGINEERED_EMOTION} /> */}
      <section
        style={{
          backgroundImage: "url('/images/n-b-l.png')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
        className="bg-primary text-light-bg"
      >
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">WHY US</p>
              <h3 className="m-0 p-0 max-w-[700px]">
                Here’s Why Clients Choose Us{" "}
                <em className="font-instrumental-serif">(Again and Again)</em>
              </h3>
            </div>
            <div>
              {/* <TwoRowGrdTxtHolder data={WHATS_INCLUDED} /> */}
              <div className="mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {WHATS_INCLUDED.map(({ head, text, Icon }, idx) => (
                  <div key={idx} className="flex gap-3 flex-col items-center">
                    <div className="logo-box">
                      <Icon color="#f6f9f2" />
                    </div>
                    <h5 className="p-0 m-0 font-interTight-medium text-center">
                      {head}
                    </h5>
                    <div>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WorkShowcase /> */}

      <VerticalSnapCarousel />

      {/* <section>
        <div className="mx-container">
          <div className="pt-md-pad pb-sm-pad flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-wide">WHAT YOU GET</p>
              <h3 className="m-0 p-0 max-w-[700px]">
                Our clients{" "}
                <em className="font-instrumental-serif">
                  walk away with stories that
                </em>
              </h3>
            </div>
            <div>
              <IndxGrdLt data={WHAT_YOU_GET_DATA} />
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default VoiceOver;

// function WorkShowcase() {
//   const PROJECT_LIST = [
//     [
//       {
//         span: 2,
//         src: "https://open.spotify.com/embed/track/716GnuBzDqqebPIzsEUjcm?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1879421190&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="PCNG MULTILINGUAL RADIO - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/pcng-multilingual-radio"
//                 title="PCNG MULTILINGUAL RADIO"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 PCNG MULTILINGUAL RADIO
//               </a>
//             </div>
//           </div>
//         ),
//       },
//       {
//         span: 2,
//         src: "https://open.spotify.com/embed/track/2Udl0TzzW2pYjPmf6P9M2W?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1556102719&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/more-data-corporate-conversational-commercial-for-9mobile"
//                 title="MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE
//               </a>
//             </div>
//           </div>
//         ),
//       },
//       {
//         span: 4,
//         src: "https://open.spotify.com/embed/track/716GnuBzDqqebPIzsEUjcm?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1964817215&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="LIGHT AND FIRE PROMOTION - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/light-and-fire-promotion"
//                 title="LIGHT AND FIRE PROMOTION"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 LIGHT AND FIRE PROMOTION
//               </a>
//             </div>
//           </div>
//         ),
//       },
//     ],
//     [
//       {
//         span: 4,
//         src: "https://open.spotify.com/embed/track/5IJoT05BMfQsvisqGPfdxK?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1964895867&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="LETSHEGO ENGLISH UPDATE - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/letshego-english-update"
//                 title="LETSHEGO ENGLISH UPDATE"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 LETSHEGO ENGLISH UPDATE
//               </a>
//             </div>
//           </div>
//         ),
//       },
//       {
//         span: 2,
//         src: "https://open.spotify.com/embed/track/76Rgxf2M8Uger78wSBI4Fh?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1964912715&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="COWRYWISE SAVINGS CHALLENGE - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/cowrywise-savings-challenge"
//                 title="COWRYWISE SAVINGS CHALLENGE"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 COWRYWISE SAVINGS CHALLENGE
//               </a>
//             </div>
//           </div>
//         ),
//       },
//       {
//         span: 2,
//         src: "https://open.spotify.com/embed/track/716GnuBzDqqebPIzsEUjcm?utm_source=generator",
//         frame: (
//           <div>
//             <iframe
//               width="100%"
//               height="166"
//               scrolling="no"
//               frameBorder="0"
//               allow="autoplay"
//               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1556102719&color=%234c3c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//               title="MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE - Soundbaking company"
//               style={{ border: "none", borderRadius: "8px" }}
//             ></iframe>

//             <div
//               style={{
//                 fontSize: "10px",
//                 color: "#cccccc",
//                 lineBreak: "anywhere",
//                 wordBreak: "normal",
//                 overflow: "hidden",
//                 whiteSpace: "nowrap",
//                 textOverflow: "ellipsis",
//                 fontFamily:
//                   "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
//                 fontWeight: 100,
//                 marginTop: "6px",
//               }}
//             >
//               <a
//                 href="https://soundcloud.com/soundbaking-company"
//                 title="Soundbaking company"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 Soundbaking company
//               </a>{" "}
//               ·{" "}
//               <a
//                 href="https://soundcloud.com/soundbaking-company/more-data-corporate-conversational-commercial-for-9mobile"
//                 title="MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "#cccccc", textDecoration: "none" }}
//               >
//                 MORE DATA - CORPORATE CONVERSATIONAL COMMERCIAL FOR 9MOBILE
//               </a>
//             </div>
//           </div>
//         ),
//       },
//     ],
//   ];

//   return (
//     <section
//     // className="text-light-bg bg-primary"
//     >
//       <div className="mx-container">
//         <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-20">
//           <div className="flex flex-col gap-2 items-center">
//             <p className="text-sm uppercase tracking-wide">WORKS</p>
//             <h3 className="m-0 p-0 max-w-[1000px] text-center">
//               Voiceover samples from Our{" "}
//               <em className="font-instrumental-serif">Client Collaborations</em>
//             </h3>
//           </div>
//           <div className="flex flex-col gap-2 md:gap-20">
//             {PROJECT_LIST.map((row, i) => (
//               <div key={i} className="mx-auto w-full flex justify-center">
//                 <div className="block xl:grid w-full grid-cols-8 md:gap-4">
//                   {row.map((item, idx) => (
//                     <div
//                       // data-cursor-target
//                       // data-cursor-text="PLAY AUDIO"
//                       className="mt-3 xl:mt-0"
//                       style={{
//                         gridColumn: `span ${item.span} / span ${item.span}`,
//                       }}
//                     >
//                       {/* <div>
//                         <div className="group w-full flex flex-col cursor-pointer gap-6 mb-12 md:mb-0">
//                           <div
//                             className="
//                                 w-full h-[180px] xl:h-[396px] rounded-lg
//                                 bg-center
//                                 bg-[length:100%]
//                                 group-hover:bg-[length:115%]
//                                 transition-all
//                                 duration-300
//                               "
//                             style={{
//                               backgroundImage: `url('${item.assetLink}')`,
//                               backgroundPosition: "center",
//                               backgroundSize: "cover",
//                             }}
//                           />

//                           <div>
//                             <div className="flex items-center gap-1">
//                               <h5 className="font-instrumental-serif m-0">
//                                 {item.title}
//                               </h5>
//                               <span className="transform xl:-translate-x-2 xl:translate-y-0 scale-100 xl:scale-0 opacity-100 xl:opacity-0 group-hover:translate-x-1.5 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
//                                 <CirclePlay strokeWidth={1.5} size={30} />
//                               </span>
//                             </div>
//                             <p className="m-0">{item.desc}</p>
//                           </div>
//                         </div>
//                       </div> */}{" "}
//                       {/* <SpotifyPlayback src={item.src} /> */}
//                       <item.frame />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
