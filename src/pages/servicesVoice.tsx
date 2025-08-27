import { useEffect, useState } from "react";
import BrandCarousel from "../components/hero/brand-carousel";
import SlideUpButton from "../components/shared/slide-up-button";
import VerticalSnapCarousel from "../components/shared/testimonial";
import {
	Lightbulb,
	MessageSquare,
	Mic,
	Microscope,
	NotebookPenIcon,
	Shuffle,
} from "lucide-react";
import { StickyCard, type Feature } from "../components/hero/how-solve-problem";

function VoiceOverService() {
	return (
		<>
			<main>
				<ServiceHero />
				<BrandCarousel />
				<Solution />
				<CreativeAds />
				<StoryItem />
				<VerticalSnapCarousel />
			</main>
		</>
	);
}

export default VoiceOverService;

// Carousel at hero section not added

function ServiceHero() {
	return (
		<>
			<section>
				<div className="flex items-center justify-center min-h-screen relative">
					<div className="mx-container">
						<div className="grid grid-cols-1 md:grid-cols-2 ">
							<div className="flex flex-col justify-center gap-4 z-10">
								<p className="text-white text-xs">VOICEOVER SERVICES</p>
								<h3 className="text-[#8DFDBA] font-interTight-regular">
									<span className="font-instrumental-serif">
										In a noisy, fast-scrolling world,
									</span>
									only the brands that sound real will be remembered.
								</h3>
								<div className="max-w-[540px]">
									<p className="text-white">
										Professional, authentic, and emotionally powerful voiceovers
										that connect with your audience and make your story
										unforgettable.
									</p>
								</div>
								<div className="flex gap-1">
									<SlideUpButton
										type="fill"
										bgColor="var(--color-green-accent)"
										textColor="var(--color-primary)">
										Let's Talk
									</SlideUpButton>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute inset-0 bg-[url('/images/113.jpg')] bg-cover opacity-95 z-0 scale-x-[-1]"></div>
				</div>
			</section>
		</>
	);
}

const problemList = [
	"Not because your product isn’t great or your story isn't powerful But because the delivery didn’t connect. Sound familiar?",
	"You're stuck using whoever’s available, not who fits the story.",
	"Your script sounds like a script, not like real people talking.",
	" Your last VO project felt… flat.",
	"The voice didn’t feel the emotion.",
	" You’re wasting time giving feedback, doing pickups, and still not getting what you want.",
	" You’re using AI voice tools… but deep down, you know they’re missing a soul.",
];

function Solution() {
	const [loaded, setLoaded] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<>
			<div className="bg-white text-primary py-10 ">
				<div className="mx-container w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2">
						<div className="flex flex-col justify-center gap-2">
							<p className="text-base">SOUND THAT FEELS REAL</p>
							<div className="border-t mt-1 w-full"></div>
							<h3 className="font-interTight-regular">
								Let’s be honest. You’ve got a message worth hearing!
							</h3>
							<h5 className="font-interTight-regular">
								But if your voiceover sounds meh, robotic, generic, or just
								wrong for the story, your audience scrolls, Tunes out or{" "}
								<span className="font-instrumental-serif">Clicks away.</span>
							</h5>
							<div className="max-w-[540px]">
								<ul>
									{problemList.map((item, index) => (
										<li
											className={`list-disc pb-1 transform transition-opacity duration-500 ${
												show ? "opacity-100" : "opacity-0"
											}`}
											style={{ transitionDelay: `${index * 1000}ms` }}
											key={index}>
											{item}
										</li>
									))}
								</ul>
								<h5 className="">And that’s where we come in</h5>
							</div>
							<div className="flex gap-1">
								<SlideUpButton type="fill" bgColor="black" textColor="white">
									Get Started
								</SlideUpButton>
							</div>
						</div>
						<div className="hidden lg:flex flex-1 items-center justify-center">
							<div
								className="relative w-full xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-video xl:rounded-lg overflow-hidden flex items-center justify-center"
								data-cursor-target
								data-cursor-text="PLAY VIDEO">
								<video
									playsInline
									autoPlay
									muted
									loop
									onLoadedData={() => setLoaded(true)}
									className="absolute inset-0 w-full h-full object-cover">
									<source src="/video/video.mp4" type="video/mp4" />
								</video>
								{!loaded && (
									<img
										src="/images/thumb.jpg"
										alt="background logo"
										className="opacity-0"
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const storyItem = [
	{
		icon: Lightbulb,
		heading: "CONCEPTING",
		text: "Original ideas and script writing based on your brief.",
	},
	{
		icon: NotebookPenIcon,
		heading: "CASTING",
		text: "Let us find you the perfect voice from our private database or casting agency partners.",
	},
	{
		icon: MessageSquare,
		heading: "DIRECTING",
		text: "Let us provide direction to get the best of your talent.",
	},
	{
		icon: Mic,
		heading: "PRODUCTION",
		text: "We'll help you start and complete a finished and highly polished product ready to air.",
	},
	{
		icon: Microscope,
		heading: "SCRIPT CONSULTING",
		text: "We provide reviews and critiques on scripts that could be award winning.",
	},
	{
		icon: Shuffle,
		heading: "CAMPAIGN INTEGRATION",
		text: "We can help fill in the holes with scripts that integrate with your existing campaigns.",
	},
];

function StoryItem() {
	return (
		<>
			<div className="bg-white text-primary py-30 ">
				<div className="border-t-2 mb-20 w-full"></div>
				<div className="mx-container">
					<div className="text-center">
						<h2 className="mb-10">WHAT WE OFFER</h2>
						<p className="font-inter Tight-regular mb-20">
							Our job is to make sure you've heard, and we can do that in a
							number of different ways.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 justify-between md:items-center gap-2 gap-y-10 flex-wrap">
						{storyItem.map((item) => (
							<div key={item.heading} className="flex items-start gap-2">
								<div className="bg-white flex items-center justify-center p-5">
									<item.icon className="text-primary w-10 h-10" />
								</div>
								<div>
									<h5 className="font-interTight-regular">{item.heading}</h5>
									<p className="text-sm">{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

const FEATURES: Feature[] = [
	{
		title: (
			<h5>
				Right Voice <em className="font-instrumental-serif">Right Emotion</em>
			</h5>
		),
		text: "Whether you're voicing a product, a mission, a moment, or a full-blown brand anthem we help you make it hit home. From casting to coaching to post-production, we handle the magic behind the mic.",
		img: "/images/placeholder.jpg",
		bg: "bg-green-accent-dark text-[#8DFDBA]",
	},
	{
		title: (
			<h5>
				<em className="font-instrumental-serif">Voices That Sell,</em> Stories
				That Stick
			</h5>
		),
		text: "From commercials to brand anthems, we craft voices that cut through the noise and land in people’s hearts. Casting, coaching, post-production we handle it all.",
		img: "/images/114.webp",
		bg: "bg-mid-bg text-primary",
	},
	{
		title: (
			<h5>
				<em className="font-instrumental-serif">Script to Sound,</em> To Perfect
				Every Word
			</h5>
		),
		text: "We manage the entire journey behind the mic casting, coaching, and post-production to deliver voice work that resonates.",
		img: "/images/115.webp",
		bg: "bg-green-accent text-primary",
	},
];

function CreativeAds() {
	return (
		<>
			<div className="bg-white text-primary pt-30">
				<div className="mx-container">
					<div className="text-center">
						<p className="text-xs">ENGINEERED FOR EMOTION</p>
						<h3 className="font-inter Tight-regular mb-8">
							We engineer emotion into
							<span className="font-instrumental-serif"> sound.</span>
						</h3>
						<p className="md:max-w-[520px] lg:max-w-[890px] mx-auto mb-20">
							Whether you're voicing a product, a mission, a moment, or a
							full-blown brand anthem…we help you make it hit home. From casting
							to coaching to post-production, we handle the magic behind the
							mic, because when the right voice meets the right emotion, people
							<em> Feel you</em>,<em> Trust you, </em>
							<em>and they Buy-in.</em>
						</p>
					</div>
					<StickyCard features={FEATURES} />
				</div>
			</div>
		</>
	);
}
