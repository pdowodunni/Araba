import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

function SoundButton({
  muted,
  setMuted,
}: {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const t = textRef.current;
    if (!t) return;
    gsap.set(t, {
      width: 0,
      opacity: 0,
      overflow: "hidden",
      display: "inline-block",
      whiteSpace: "nowrap",
    });
    tlRef.current?.kill();
  }, []);

  const showLabel = () => {
    const t = textRef.current;
    const b = btnRef.current;
    if (!t || !b) return;

    const targetWidth = t.scrollWidth;
    tlRef.current?.kill();
    const tl = gsap.timeline();
    tl.to(
      b,
      {
        gap: "20px",
        duration: 0.18,
        ease: "power2.out",
      },
      0
    );
    tl.to(
      t,
      {
        width: targetWidth,
        opacity: 1,
        duration: 0.22,
        ease: "power2.out",
      },
      0.02
    );
    // tlRef.current = tl;
  };

  const hideLabel = () => {
    const t = textRef.current;
    const b = btnRef.current;
    if (!t || !b) return;

    tlRef.current?.kill();

    const tl = gsap.timeline();
    tl.to(
      t,
      {
        width: 0,
        opacity: 0,
        duration: 0.16,
        ease: "power2.in",
      },
      0
    );
    tl.to(
      b,
      {
        gap: "0px",
        duration: 0.14,
        ease: "power2.in",
      },
      0.08
    );
    // tlRef.current = tl;
  };
  return (
    <button
      type="button"
      ref={btnRef}
      onClick={() => setMuted((m: boolean) => !m)}
      onMouseEnter={showLabel}
      onMouseLeave={hideLabel}
      onFocus={showLabel}
      onBlur={hideLabel}
      className="absolute top-4 right-4 z-10 rounded-full bg-black/60 text-white px-2 py-2 text-sm flex cursor-pointer items-center"
      aria-pressed={!muted}
      aria-label={muted ? "Unmute video" : "Mute video"}
    >
      {muted ? <Volume2 /> : <VolumeX />}
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          verticalAlign: "middle",
        }}
        aria-hidden="true"
      >
        {muted ? "Tap to unmute" : "Tap to mute"}
      </span>
    </button>
  );
}

export default SoundButton;
