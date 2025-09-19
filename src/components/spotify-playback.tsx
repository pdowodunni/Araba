import React, { useState } from "react";

const SpotifyPlayback = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="relative h-[352px] w-full">
      {loading && !error && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-white"
          style={{
            backgroundImage: "url('/images/disc-sm-b.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Loading player...
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600">
          Failed to load Spotify player.
        </div>
      )}
      {!error && (
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
          onLoad={handleLoad}
          onError={handleError}
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayback;
