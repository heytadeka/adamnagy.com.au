"use client";

import { useEffect, useRef, useState } from "react";
import type { SyntheticEvent } from "react";
import { Reveal } from "@/components/Reveal";
import styles from "./TheVideo.module.css";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function TheVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Driven by native listeners rather than React's synthetic media-event
  // props (onPlay/onTimeUpdate/etc.) — those didn't reliably fire in testing
  // here (duration and currentTime kept advancing on the element itself
  // while the synthetic handlers never ran), so this reads state directly
  // off the element instead of trusting the events to be delivered.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncAll = () => {
      setIsPlaying(!video.paused && !video.ended);
      setCurrentTime(video.currentTime);
      if (Number.isFinite(video.duration)) setDuration(video.duration);
    };
    const onEnded = () => {
      video.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    };

    syncAll();
    const events = ["loadedmetadata", "durationchange", "play", "pause", "timeupdate", "seeked"];
    events.forEach((evt) => video.addEventListener(evt, syncAll));
    video.addEventListener("ended", onEnded);

    // Belt-and-suspenders poll: covers any environment where these events
    // are dropped entirely (as above) while a video is actively playing.
    const poll = window.setInterval(() => {
      if (!video.paused) syncAll();
    }, 250);

    return () => {
      events.forEach((evt) => video.removeEventListener(evt, syncAll));
      video.removeEventListener("ended", onEnded);
      window.clearInterval(poll);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const seekTo = (event: SyntheticEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.nativeEvent as MouseEvent).clientX - rect.left) / rect.width);
    video.currentTime = ratio * duration;
    setCurrentTime(video.currentTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section id="video" data-screen-label="The video" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className="eyebrow">
          <span>03</span>
          <span />
          <span>THE VIDEO</span>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.panel} data-playing={isPlaying ? "true" : "false"}>
            <video
              ref={videoRef}
              className={styles.videoEl}
              src="/videos/reel.mp4"
              poster="/images/reel-poster.jpg"
              aria-label="Adam Nagy — a personal introduction"
              playsInline
              preload="metadata"
              onClick={togglePlay}
            />
            <div className={styles.overlay}>
              <div className={styles.topRow}>
                <span>AN — REEL 01</span>
                <span>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <div className={styles.center}>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className={styles.playButton}
                >
                  <span className={styles.ring} />
                  <span className={styles.ring} />
                  <span className={styles.glow} />
                  {isPlaying ? (
                    <span className={styles.pauseIcon} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  ) : (
                    <span className={styles.triangle} aria-hidden="true" />
                  )}
                </button>
                <div className={styles.caption}>WATCH: WHO I AM</div>
              </div>
              <div className={styles.bottomRow}>
                <div
                  className={styles.progressTrack}
                  onClick={seekTo}
                  role="slider"
                  aria-label="Seek"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                >
                  <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
