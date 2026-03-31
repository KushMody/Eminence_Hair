'use client';

import React, { useState, useEffect, useRef } from "react";
import { C, serif, body } from "./data";

export function useAnim(): [React.RefObject<HTMLDivElement | null>, boolean] {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, vis];
}

export function Reveal({ children, d = 0, y = 30, x = 0, scale = 1 }: { children: React.ReactNode; d?: number; y?: number; x?: number; scale?: number }) {
  const [ref, vis] = useAnim();
  return (
    <div 
      ref={ref as any} 
      style={{ 
        opacity: vis ? 1 : 0, 
        transform: vis ? "none" : `translate(${x}px, ${y}px) scale(${scale})`, 
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${d}s` 
      }}
    >
      {children}
    </div>
  );
}


export function Stars({ n = 5 }: { n?: number }) {
  return <span style={{ color: C.gold, letterSpacing: 2 }}>{"★".repeat(n)}</span>;
}

export function Eyebrow({ text, center, light }: { text: string; center?: boolean; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: center ? "center" : "flex-start", marginBottom: 18 }}>
      <div style={{ width: 32, height: 1, background: C.gold }} />
      <span style={{ fontFamily: body, fontSize: 11, letterSpacing: 4, color: light ? C.goldLt : C.gold, textTransform: "uppercase" }}>{text}</span>
      {center && <div style={{ width: 32, height: 1, background: C.gold }} />}
    </div>
  );
}

export function Btn({ children, onClick, outline, large, dark, type = "button" }: { children: React.ReactNode; onClick?: () => void; outline?: boolean; large?: boolean; dark?: boolean; type?: "button" | "submit" }) {
  const [h, setH] = useState(false);
  const bg = outline ? "transparent" : (dark ? (h ? "#331E12" : C.dark) : (h ? `linear-gradient(135deg,${C.goldDk},#9A7A3A)` : `linear-gradient(135deg,${C.gold},${C.goldDk})`));
  const tc = outline ? (dark ? C.dark : C.white) : (dark ? C.gold : C.white);
  const bd = outline ? `1px solid ${dark ? C.dark : (h ? C.gold : "rgba(255,255,255,.32)")}` : "none";
  return (
    <button type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      padding: large ? "18px 48px" : "13px 32px", background: bg, border: bd, borderRadius: 2, fontFamily: body, fontSize: large ? 15 : 13, fontWeight: 700,
      letterSpacing: 3, textTransform: "uppercase", color: tc, cursor: "pointer",
      boxShadow: outline ? "none" : h ? "0 4px 24px rgba(201,169,110,.45)" : "0 8px 32px rgba(201,169,110,.28)",
      transition: "all .3s ease",
    }}>{children}</button>
  );
}

export function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeStr, setTimeStr] = useState("0:00 / 0:00");
  const [muted, setMuted] = useState(false);
  const [hover, setHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(p);
    setTimeStr(`${formatTime(videoRef.current.currentTime)} / ${formatTime(videoRef.current.duration)}`);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlePlayEvent = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setPlaying(true);
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      if (v !== e.target) v.pause();
    });
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#000", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        onPlay={handlePlayEvent}
        onPause={() => setPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Big Center Play Overlay (when paused) */}
      {!playing && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: `1px solid rgba(255,255,255,0.6)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
            <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #FFF", marginLeft: 6 }} />
          </div>
        </div>
      )}

      {/* Dark gradient mapping for controls */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", opacity: hover && playing ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }} />

      {/* Custom Control Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 14, opacity: hover && playing ? 1 : 0, transition: "opacity 0.3s ease", zIndex: 10, cursor: "default" }}>

        {/* Progress Timeline */}
        <div onClick={handleSeek} style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.25)", borderRadius: 2, cursor: "pointer", position: "relative" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: C.gold, borderRadius: 2, position: "relative" }}>
            <div style={{ position: "absolute", right: -5, top: -4.5, width: 12, height: 12, borderRadius: "50%", background: "#FFF", boxShadow: "0 2px 4px rgba(0,0,0,0.5)", opacity: hover ? 1 : 0, transition: "opacity 0.2s", transform: "scale(1.1)" }} />
          </div>
        </div>

        {/* Controls Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button onClick={toggle} style={{ background: "transparent", border: "none", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: 20, padding: 0 }}>
              {playing ? ( // Pause icon
                <div style={{ display: "flex", gap: 4, height: 14, alignItems: "center" }}><div style={{ width: 4, height: 14, background: "#FFF", borderRadius: 1 }} /><div style={{ width: 4, height: 14, background: "#FFF", borderRadius: 1 }} /></div>
              ) : ( // Play icon
                <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "12px solid #FFF", display: "block" }} />
              )}
            </button>
            <div style={{ fontFamily: body, fontSize: 13, color: "rgba(255,255,255,.9)", fontWeight: 500, fontVariantNumeric: "tabular-nums", letterSpacing: 0.5 }}>{timeStr}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={toggleMute} style={{ background: "transparent", border: "none", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }}>
              {muted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
              )}
            </button>
            <button onClick={toggleFullscreen} style={{ background: "transparent", border: "none", color: "#FFF", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
