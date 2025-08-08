import { useState } from "react";
import BrandCarousel from "../components/hero/brand-carousel";
import SlideUpButton from "../components/shared/slide-up-button";
import VerticalSnapCarousel from "../components/shared/testimonial";

function Service() {
	return (
		<>
			<main className="">
				<ServiceHero />
				<BrandCarousel />
				<Solution />
				<DifferencesItem />
				<VerticalSnapCarousel />
			</main>
		</>
	);
}

export default Service;

function ServiceHero() {
	return (
		<>
			<header>
				<div className="flex items-center justify-center min-h-screen bg-primary mt-10">
					<div className="mx-container">
						<div className="grid grid-cols-1 md:grid-cols-2 ">
							<div className="flex flex-col justify-center gap-4">
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
				</div>
			</header>
		</>
	);
}

const problemList = [
	"Not because your product isn’t great or your story isnt powerful But because the delivery didn’t connect. Sound familiar?",
	"You're stuck using whoever’s available, not who fits the story.",
	"Your script sounds like a script, not like real people talking.",
	" Your last VO project felt… flat.",
	"The voice didn’t feel the emotion.",
	" You’re wasting time giving feedback, doing pickups, and still not getting what you want.",
	" You’re using AI voice tools… but deep down, you know they’re missing a soul.",
];
function Solution() {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<div className="bg-white text-primary py-30 ">
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
									{problemList.map((item) => (
										<li className="pb-1 list-disc">{item}</li>
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

// System is currently at 8%, I will continue now once done
//
function DifferencesItem() {
	return (
		<>
			<div className="bg-white text-primary py-30 ">
				<div className="mx-container">
					<p className="text-white text-xs">OUR DIFFERENCES</p>
				</div>
			</div>
		</>
	);
}
