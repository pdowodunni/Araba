import SlideUpButton from "../components/shared/slide-up-button";

function Service() {
	return (
		<>
			<main className="">
				<ServiceHero />
			</main>
		</>
	);
}

export default Service;

function ServiceHero() {
	return (
		<>
			<header>
				<div className="flex items-center justify-center min-h-screen bg-primary">
					<div className="mx-container">
						<div className="grid grid-cols-1 md:grid-cols-2 ">
							<div className="flex flex-col justify-center gap-8">
								<h2 className="text-[#8DFDBA] font-interTight-regular leading-tight">
									<span>
										<span className="font-instrumental-serif">
											Audio storytelling
										</span>{" "}
										by Soundbaking company
									</span>
								</h2>
								<div className="max-w-[540px]">
									<p className="text-white">
										In a noisy, fast-scrolling world, only the brands that
										sounds real will be remembered
									</p>
								</div>
								<div className="flex">
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
