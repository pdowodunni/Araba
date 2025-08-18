import { useState } from "react";
import ReactPlayer from "react-player";

// ==========================
// I am using react-player for it
// ==========================

function CaseStudyVideoHeader({
	videoUrl,
	poster,
}: {
	videoUrl: string;
	videoFormat?: string;
	poster?: string;
}) {
	const [loaded, setLoaded] = useState(false);
	return (
		<section>
			<div className="max-w-[1680px] mx-auto px-0 lg:px-8">
				<div className="py-sm-pad">
					<div className="w-full relative aspect-video bg-mid-bg lg:rounded-lg overflow-hidden">
						<ReactPlayer
							src={videoUrl}
							width="100%"
							height="100%"
							playing={true}
							muted={true}
							loop={true}
							playsInline={true}
							config={{
								youtube: { rel: 0 },
							}}
							onReady={() => setLoaded(true)}
							className="absolute top-0 left-0 w-full h-full"
						/>
						{!loaded && poster && (
							<img
								src={poster}
								alt="Video poster"
								className="absolute top-0 left-0 w-full h-full object-cover"
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CaseStudyVideoHeader;
