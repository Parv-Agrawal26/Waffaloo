"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "./Hero";
import styles from "./HeroSection.module.css";

// Lazy-load the canvas only on client — avoids SSR canvas issues
const ScrollScene = dynamic(() => import("./ScrollScene"), { ssr: false });

export default function HeroSection() {
  // This ref points to the tall scroll container so ScrollScene can
  // read its bounding rect and compute scroll progress.
  const containerRef = useRef(null);

  return (
    /*
     * Tall scroll container — 400vh gives the user plenty of scroll
     * range to step through all 100 frames.  The sticky child keeps
     * the hero UI visible for the full scroll distance.
     */
    <div ref={containerRef} className={styles.scrollContainer} id="hero-scroll-container">

      {/* Canvas sits fixed behind everything, receives the containerRef
          so it can map scroll progress to frame index */}
      <ScrollScene scrollRef={containerRef} />

      {/* Sticky viewport — holds the hero UI pinned while parent scrolls */}
      <div className={styles.stickyViewport}>
        <Hero />
      </div>

    </div>
  );
}
