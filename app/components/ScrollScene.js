"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollScene.module.css";

// ─── Config ──────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 100;
const FRAME_PATH = (n) =>
  `https://res.cloudinary.com/dq9lvxqef/image/upload/f_auto,q_auto/ezgif-frame-${String(n).padStart(3, "0")}.png`;

// Lerp factor — higher = snappier catch-up (0.08 = silky smooth)
const LERP = 0.1;

// How many frames to load eagerly before first paint
const EAGER_FRAMES = 12;

// ─── Utility ─────────────────────────────────────────────────────────────────
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ScrollScene({ scrollRef }) {
  const canvasRef = useRef(null);
  const stateRef  = useRef({
    frames:       new Array(TOTAL_FRAMES).fill(null), // HTMLImageElement[]
    loaded:       new Array(TOTAL_FRAMES).fill(false),
    currentFrame: 0,        // float — lerped display index
    targetFrame:  0,        // int   — raw scroll-mapped index
    rafId:        null,
    reducedMotion: false,
    hasDrawn:     false,    // guard — ensures frame 0 always paints on first load
  });

  // ── 1. Preload frames ─────────────────────────────────────────────────────
  useEffect(() => {
    const s = stateRef.current;

    // Check prefers-reduced-motion once
    s.reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Load a single frame by index, return a promise
    const loadFrame = (i) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = FRAME_PATH(i + 1);          // frames are 1-indexed
        img.decoding = "async";
        img.onload = () => {
          s.frames[i] = img;
          s.loaded[i] = true;
          // ── Instant first-paint: draw frame 0 the moment it arrives ──
          // The rAF loop skips drawing when delta ≈ 0 (optimisation),
          // so we kick an immediate draw here to avoid the black flash.
          if (i === 0 && !s.hasDrawn) {
            const canvas = canvasRef.current;
            if (canvas) {
              // drawFrame is defined in the rAF useEffect; call via a
              // one-shot rAF so the canvas context is guaranteed ready.
              requestAnimationFrame(() => {
                if (!s.hasDrawn) {
                  s.hasDrawn = true;
                  // Inline minimal draw so we don't depend on closure scope
                  const ctx = canvas.getContext("2d");
                  const dpr = window.devicePixelRatio || 1;
                  const w   = canvas.width  / dpr;
                  const h   = canvas.height / dpr;
                  const imgAR = img.naturalWidth / img.naturalHeight;
                  const canAR = w / h;
                  let dw, dh, dx, dy;
                  if (imgAR > canAR) {
                    dh = h; dw = h * imgAR; dx = (w - dw) / 2; dy = 0;
                  } else {
                    dw = w; dh = w / imgAR; dx = 0; dy = (h - dh) / 2;
                  }
                  ctx.clearRect(0, 0, w, h);
                  ctx.drawImage(img, dx, dy, dw, dh);
                  const vignette = ctx.createRadialGradient(w/2, h/2, h*0.28, w/2, h/2, h*0.85);
                  vignette.addColorStop(0,   "rgba(12,10,8,0)");
                  vignette.addColorStop(0.6, "rgba(12,10,8,0.18)");
                  vignette.addColorStop(1,   "rgba(12,10,8,0.82)");
                  ctx.fillStyle = vignette;
                  ctx.fillRect(0, 0, w, h);
                  const btm = ctx.createLinearGradient(0, h*0.45, 0, h);
                  btm.addColorStop(0,   "rgba(12,10,8,0)");
                  btm.addColorStop(0.6, "rgba(12,10,8,0.72)");
                  btm.addColorStop(1,   "rgba(12,10,8,0.96)");
                  ctx.fillStyle = btm;
                  ctx.fillRect(0, 0, w, h);
                }
              });
            }
          }
          resolve();
        };
        img.onerror = () => resolve();         // never block on a missing frame
      });

    // Eager-load first N frames, then background-load the rest
    const eagerIdx = Array.from({ length: EAGER_FRAMES }, (_, i) => i);
    const lazyIdx  = Array.from(
      { length: TOTAL_FRAMES - EAGER_FRAMES },
      (_, i) => i + EAGER_FRAMES
    );

    Promise.all(eagerIdx.map(loadFrame)).then(() => {
      // Load remaining in small batches to avoid network saturation
      const BATCH = 8;
      let i = 0;
      const next = () => {
        if (i >= lazyIdx.length) return;
        const batch = lazyIdx.slice(i, i + BATCH);
        i += BATCH;
        Promise.all(batch.map(loadFrame)).then(next);
      };
      next();
    });

    return () => {
      // No cleanup needed — images are GC'd when component unmounts
    };
  }, []);

  // ── 2. Canvas setup + rAF loop ────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx    = canvas.getContext("2d");
    const s      = stateRef.current;
    let destroyed = false;

    // DPR-aware resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();

    const resizeObs = new ResizeObserver(resize);
    resizeObs.observe(document.documentElement);

    // Draw a single frame index (float floored), fall back to nearest loaded
    const drawFrame = (idx) => {
      let i = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(idx)));
      if (!s.frames[i]) {
        // walk backwards to find the nearest loaded frame
        while (i > 0 && !s.frames[i]) i--;
      }
      const img = s.frames[i];
      if (!img) return;

      const w = canvas.width  / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      // Cover-fit the image
      const imgAR  = img.naturalWidth / img.naturalHeight;
      const canAR  = w / h;
      let dw, dh, dx, dy;
      if (imgAR > canAR) {
        dh = h; dw = h * imgAR;
        dx = (w - dw) / 2; dy = 0;
      } else {
        dw = w; dh = w / imgAR;
        dx = 0; dy = (h - dh) / 2;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, dx, dy, dw, dh);

      // ── Edge-blending mask ───────────────────────────────────────────────
      // Radial vignette that fades to the hero background colour (#0c0a08)
      const vignette = ctx.createRadialGradient(
        w / 2, h / 2, h * 0.28,   // inner circle
        w / 2, h / 2, h * 0.85    // outer circle
      );
      vignette.addColorStop(0,    "rgba(12,10,8,0)");
      vignette.addColorStop(0.6,  "rgba(12,10,8,0.18)");
      vignette.addColorStop(1,    "rgba(12,10,8,0.82)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // Bottom fade — heavier, so UI text stays readable
      const bottomFade = ctx.createLinearGradient(0, h * 0.45, 0, h);
      bottomFade.addColorStop(0,   "rgba(12,10,8,0)");
      bottomFade.addColorStop(0.6, "rgba(12,10,8,0.72)");
      bottomFade.addColorStop(1,   "rgba(12,10,8,0.96)");
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, 0, w, h);
    };

    // ── rAF loop (scroll-driven lerp) ────────────────────────────────────
    const tick = () => {
      if (destroyed) return;
      s.rafId = requestAnimationFrame(tick);

      if (s.reducedMotion) {
        // Snap directly, no lerp
        if (s.currentFrame !== s.targetFrame) {
          s.currentFrame = s.targetFrame;
          drawFrame(s.currentFrame);
        }
        return;
      }

      const prev = s.currentFrame;
      s.currentFrame = lerp(s.currentFrame, s.targetFrame, LERP);

      const delta = Math.abs(s.currentFrame - prev);

      // Draw if frame changed meaningfully OR if we haven't drawn yet
      // (the delta=0 optimisation would otherwise block the initial paint)
      if (delta > 0.005 || !s.hasDrawn) {
        if (s.loaded[0]) {        // only draw once at least frame 0 exists
          s.hasDrawn = true;
          drawFrame(s.currentFrame);
        }
      }
    };

    s.rafId = requestAnimationFrame(tick);

    return () => {
      destroyed = true;
      resizeObs.disconnect();
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, []);

  // ── 3. Scroll → targetFrame mapping ─────────────────────────────────────
  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const s = stateRef.current;
    const canvas = canvasRef.current;

    const onScroll = () => {
      const rect        = container.getBoundingClientRect();
      const totalScroll = container.offsetHeight - window.innerHeight;
      const scrolled    = Math.max(0, -rect.top);
      const progress    = Math.min(1, scrolled / totalScroll);
      // Map frames to first 75% of scroll — last 25% holds the final frame as a pause
      const FRAME_END   = 0.6;
      const frameProgress = Math.min(1, progress / FRAME_END);
      s.targetFrame     = frameProgress * (TOTAL_FRAMES - 1);

      // Hide canvas once the scroll container has fully left the viewport
      if (canvas) {
        const pastHero = rect.bottom <= 0;
        canvas.style.opacity = pastHero ? "0" : "1";
        canvas.style.pointerEvents = "none";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
      role="presentation"
    />
  );
}
