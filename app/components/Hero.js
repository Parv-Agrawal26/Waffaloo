"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const brandRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["About", "Menu", "Locations", "Catering", "Contact"];

  return (
    <section className={styles.hero} aria-label="WAFFALOO hero">
      {/* ── Nav ── */}
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={styles.navLogo}>
          <span className={styles.navLogoText}>Waffaloo</span>
        </div>
        <ul className={styles.navLinks} role="list">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={styles.navLink} id={`nav-${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.navLogoText}>Waffaloo</span>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>




      {/* ── Content ── */}
      <div className={styles.content}>
        {/* Badge */}
        <div className={`${styles.badge} ${mounted ? styles.badgeIn : ""}`} role="status" aria-label="Availability status">
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>FRESH &amp; HOT DAILY</span>
        </div>

        {/* Headline above brand text */}
        <p className={`${styles.eyebrow} ${mounted ? styles.eyebrowIn : ""}`}>
          Handcrafted in Every Bite
        </p>
      </div>

      {/* ── Oversized Brand Text (bottom-left, like "Helious") ── */}
      <div className={styles.brandBlock} ref={brandRef}>
        <h1 className={`${styles.brandText} ${mounted ? styles.brandIn : ""}`} aria-label="WAFFALOO">
          WAFFALOO
        </h1>
      </div>

      {/* ── Bottom-right info block ── */}
      <div className={`${styles.infoBlock} ${mounted ? styles.infoIn : ""}`}>
        <p className={styles.infoDesc}>
          Golden, crispy waffles crafted with premium ingredients, artisan toppings,
          and poured with pure golden love — every single day.
        </p>
        <div className={styles.ctaRow}>
          <a
            href="#locations"
            id="cta-find-cart"
            className={styles.ctaPrimary}
            aria-label="Find our cart locations"
          >
            Find Our Cart
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#menu"
            id="cta-view-menu"
            className={styles.ctaSecondary}
            aria-label="View our full menu"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* ── Decorative grain overlay ── */}
      <div className={styles.grain} aria-hidden="true" />
    </section>
  );
}
