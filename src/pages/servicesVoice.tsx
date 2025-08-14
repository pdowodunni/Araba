// import { useEffect, useState } from "react";
// import BrandCarousel from "../components/hero/brand-carousel";
// import SlideUpButton from "../components/shared/slide-up-button";
// import VerticalSnapCarousel from "../components/shared/testimonial";
// import { Lightbulb, NotebookPenIcon, Star } from "lucide-react";

// function Service() {
// 	return (
// 		<>
// 			<main className="">
// 				<ServiceHero />
// 				<BrandCarousel />
// 				<Solution />
// 				<StoryItem />
// 				<VerticalSnapCarousel />
// 			</main>
// 		</>
// 	);
// }

// export default Service;

// function ServiceHero() {
// 	return (
// 		<>
// 			<header>
// 				<div className="flex bg-primary items-center justify-center min-h-screen mt-10 relative">
// 					<div className="mx-container">
// 						<div className="grid grid-cols-1 md:grid-cols-2 ">
// 							<div className="flex flex-col justify-center gap-4">
// 								<p className="text-white text-xs">VOICEOVER SERVICES</p>
// 								<h3 className="text-[#8DFDBA] font-interTight-regular">
// 									<span className="font-instrumental-serif">
// 										In a noisy, fast-scrolling world,
// 									</span>
// 									only the brands that sound real will be remembered.
// 								</h3>
// 								<div className="max-w-[540px]">
// 									<p className="text-white">
// 										Professional, authentic, and emotionally powerful voiceovers
// 										that connect with your audience and make your story
// 										unforgettable.
// 									</p>
// 								</div>
// 								<div className="flex gap-1 z-10">
// 									<SlideUpButton
// 										type="fill"
// 										bgColor="var(--color-green-accent)"
// 										textColor="var(--color-primary)">
// 										Let's Talk
// 									</SlideUpButton>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="absolute inset-0 bg-[url('/images/1(13).jpg')] bg-cover opacity-10 z-0 scale-x-[-1]"></div>
// 				</div>
// 			</header>
// 		</>
// 	);
// }

// const problemList = [
// 	"Not because your product isn’t great or your story isn't powerful But because the delivery didn’t connect. Sound familiar?",
// 	"You're stuck using whoever’s available, not who fits the story.",
// 	"Your script sounds like a script, not like real people talking.",
// 	" Your last VO project felt… flat.",
// 	"The voice didn’t feel the emotion.",
// 	" You’re wasting time giving feedback, doing pickups, and still not getting what you want.",
// 	" You’re using AI voice tools… but deep down, you know they’re missing a soul.",
// ];

// function Solution() {
// 	const [loaded, setLoaded] = useState(false);
// 	const [show, setShow] = useState(false);

// 	useEffect(() => {
// 		setShow(true);
// 	}, []);

// 	return (
// 		<>
// 			<div className="bg-white text-primary py-10 ">
// 				<div className="mx-container w-full">
// 					<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2">
// 						<div className="flex flex-col justify-center gap-2">
// 							<p className="text-base">SOUND THAT FEELS REAL</p>
// 							<div className="border-t mt-1 w-full"></div>
// 							<h3 className="font-interTight-regular">
// 								Let’s be honest. You’ve got a message worth hearing!
// 							</h3>
// 							<h5 className="font-interTight-regular">
// 								But if your voiceover sounds meh, robotic, generic, or just
// 								wrong for the story, your audience scrolls, Tunes out or{" "}
// 								<span className="font-instrumental-serif">Clicks away.</span>
// 							</h5>
// 							<div className="max-w-[540px]">
// 								<ul>
// 									{problemList.map((item, index) => (
// 										<li
// 											className={`list-disc pb-1 transform transition-opacity duration-500 ${
// 												show ? "opacity-100" : "opacity-0"
// 											}`}
// 											style={{ transitionDelay: `${index * 1000}ms` }}
// 											key={index}>
// 											{item}
// 										</li>
// 									))}
// 								</ul>
// 								<h5 className="">And that’s where we come in</h5>
// 							</div>
// 							<div className="flex gap-1">
// 								<SlideUpButton type="fill" bgColor="black" textColor="white">
// 									Get Started
// 								</SlideUpButton>
// 							</div>
// 						</div>
// 						<div className="hidden lg:flex flex-1 items-center justify-center">
// 							<div
// 								className="relative w-full xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-video xl:rounded-lg overflow-hidden flex items-center justify-center"
// 								data-cursor-target
// 								data-cursor-text="PLAY VIDEO">
// 								<video
// 									playsInline
// 									autoPlay
// 									muted
// 									loop
// 									onLoadedData={() => setLoaded(true)}
// 									className="absolute inset-0 w-full h-full object-cover">
// 									<source src="/video/video.mp4" type="video/mp4" />
// 								</video>
// 								{!loaded && (
// 									<img
// 										src="/images/thumb.jpg"
// 										alt="background logo"
// 										className="opacity-0"
// 									/>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// const storyItem = [
// 	{
// 		icon: Lightbulb,
// 		subText: "Warm & Friendly",
// 		heading: "Share Your Story",
// 		text: "Send your script and tell us your vision",
// 	},
// 	{
// 		icon: NotebookPenIcon,
// 		subText: "Bold & Energetic",
// 		heading: "We Bring It to Life",
// 		text: "Tailored voice style, tone, and emotion",
// 	},
// 	{
// 		icon: Star,
// 		subText: "Calm & Inspiring",
// 		heading: "You Get the Perfect Take",
// 		text: "Ready-to-use, high-quality audio",
// 	},
// ];

// function StoryItem() {
// 	return (
// 		<>
// 			<div className="bg-white text-primary py-30 ">
// 				<div className="border-t-2 mt-1 mb-4 w-full"></div>
// 				<div className="mx-container">
// 					<div className="text-center">
// 						<p className="text-xs">YOUR STORY DESERVES TO BE HEARD</p>
// 						<h5 className="font-inter Tight-regular mb-8">
// 							We bring human warmth, emotional depth, and professional precision
// 							to{" "}
// 							<span className="font-instrumental-serif">every voiceover.</span>
// 						</h5>
// 					</div>
// 					<div className="flex flex-col justify-between items-center gap-2 md:flex-row">
// 						{storyItem.map((item) => (
// 							<div key={item.heading} className="flex items-start gap-2">
// 								<div className="bg-slate-400 flex items-center justify-center p-2">
// 									<item.icon className="text-primary" />
// 								</div>
// 								<div>
// 									<p className="text-xs">{item.subText}</p>
// 									<h5 className="font-interTight-regular">{item.heading}</h5>
// 									<p className="text-sm">{item.text}</p>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
