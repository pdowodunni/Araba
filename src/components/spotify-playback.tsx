import { ArrowUpRight, CirclePlay, Play } from "lucide-react";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const SpotifyPlayback = ({
  src,
  name = "Audio File",
  image,
}: {
  src: string;
  name?: string;
  image?: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Toggle play function
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => setPlaying((prev) => !prev);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    // <div className="relative h-[352px] w-full">
    //   {loading && !error && (
    //     <div
    //       className="absolute inset-0 flex items-center justify-center bg-gray-100 text-white"
    //       style={{
    //         backgroundImage: "url('/images/disc-sm-b.png')",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     >
    //       Loading player...
    //     </div>
    //   )}

    //   {error && (
    //     <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600">
    //       Failed to load Spotify player.
    //     </div>
    //   )}
    //   {!error && (
    //     <iframe
    //       data-testid="embed-iframe"
    //       style={{ borderRadius: "12px" }}
    //       src={src}
    //       width="100%"
    //       height="100%"
    //       frameBorder="0"
    //       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    //       loading="lazy"
    //       title="Spotify Player"
    //       onLoad={handleLoad}
    //       onError={handleError}
    //     ></iframe>
    //   )}
    // </div>
    <div className="group w-full flex flex-col cursor-pointer gap-3 mb-4 md:mb-0">
      <div
        className="relative w-full h-[300px] xl:h-[396px] bg-red-800 rounded-[28px] bg-center
                  bg-[length:100%]
                  group-hover:bg-[length:115%]
                  transition-all
                  duration-300"
        onClick={togglePlay}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ReactPlayer
          src={src}
          width="100%"
          height="100%"
          playing={playing}
          // muted={false}
          // loop={false}
          // playsInline={false}
          controls={true}
          config={
            {
              // file: { forceAudio: true },
            }
          }
          onReady={() => setLoading(true)}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div>
        <div className="flex items-center gap-3">
          <h5 className="font-instrumental-serif m-0">{name}</h5>
          <span className="transform scale-100 xl:scale-0 opacity-100 xl:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <CirclePlay strokeWidth={1.5} size={25} />
          </span>
        </div>
        {/* <p className="m-0">{desc}</p> */}
      </div>
    </div>
  );
};

export default SpotifyPlayback;
