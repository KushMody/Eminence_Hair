"use client";

import { useEffect, useRef } from "react";

interface VideoShowcaseProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  id?: string;
  onPlay?: (id: string) => void;
  activeId?: string | null;
}

export default function VideoShowcase({
  src,
  poster,
  overlay = true,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  id,
  onPlay,
  activeId,
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  // Coordinated playback logic
  useEffect(() => {
    if (activeId && id && activeId !== id && videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeId, id]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        controls={controls}
        onPlay={() => id && onPlay?.(id)}
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-background/40 bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />
      )}
    </div>
  );
}
