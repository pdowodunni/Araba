import { useState } from "react";
import ReactPlayer from "react-player";

function OneImgCrd({
	assetLink,
	assetType,
}: {
	assetLink: string;
	assetType: "image" | "video";
}) {
	const [loaded, setLoaded] = useState(false);

	return (
		<section>
			<div className="case-container my-sm-pad">
				<div className="w-full aspect-[16/10] overflow-hidden bg-mid-bg">
					{assetType === "image" ? (
						<div
							className=" w-full aspect-[16/10] rounded-lg bg-center "
							style={{
								backgroundImage: `url('${assetLink}')`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						/>
					) : assetType === "video" ? (
						<div className="w-full aspect-[16/10] rounded-lg bg-center transition-all duration-300 relative overflow-hidden">
							<ReactPlayer
								src={assetLink}
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
							{!loaded && (
								<img
									src="/images/thumb.jpg"
									alt="background logo"
									className="opacity-0"
								/>
							)}
						</div>
					) : (
						<div
							className="w-full aspect-[16/10] rounded-lg bg-center bg-[length:100%] group-hover:bg-[length:115%] transition-all duration-300"
							style={{ backgroundColor: `#e6ecd6` }}
						/>
					)}
				</div>
			</div>
		</section>
	);
}

export default OneImgCrd;
