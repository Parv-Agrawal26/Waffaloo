"use client";
import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const NAV = ["About", "Menu", "Locations", "Catering", "Contact"];

export default function Footer() {
  const [year, setYear] = useState(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
  return (
    <footer className={styles.footer} aria-label="Site footer">

      {/* ── Top CTA band ── */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaHeading}>Ready for a golden bite?</h2>
            <p className={styles.ctaSub}>Find our cart near you — fresh waffles pressed on the spot.</p>
          </div>
          <a href="#locations" className={styles.ctaBtn}>
            Find Our Cart
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Brand column */}
          <div className={styles.brand}>
            <span className={styles.brandName}>Waffaloo</span>
            <p className={styles.brandTagline}>
              Golden, crispy handcrafted waffles — pressed fresh daily from our gourmet cart.
            </p>
            <div className={styles.contactList}>
              <a href="tel:+919286505879" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2 11.5 11.5 0 003.6.6 1 1 0 011 1V21a1 1 0 01-1 1C9.6 22 2 14.4 2 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.2 1.1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +91 92865 05879
              </a>
              <a href="mailto:evolvewebstudios@gmail.com" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                evolvewebstudios@gmail.com
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Navigate</h3>
            <ul className={styles.colList}>
              {NAV.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={styles.colLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Locations</h3>
            <ul className={styles.colList}>
              {["Connaught Place", "Hauz Khas Village", "Cyber Hub", "Khan Market", "Saket Select City", "Vasant Kunj"].map((loc) => (
                <li key={loc}>
                  <a href="#locations" className={styles.colLink}>{loc}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours column */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Hours</h3>
            <ul className={styles.colList}>
              <li className={styles.colText}>Mon – Fri</li>
              <li className={styles.colTextMuted}>10:00 am – 10:00 pm</li>
              <li className={styles.colText} style={{marginTop: "10px"}}>Sat – Sun</li>
              <li className={styles.colTextMuted}>9:00 am – 11:00 pm</li>
            </ul>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              Open Today
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} Waffaloo. All rights reserved.
          </p>
          <p className={styles.credit}>
            A concept project by{" "}
            <a href="https://evolvewebstudios.in" target="_blank" rel="noopener noreferrer" className={styles.studioLink}>
              Evolve Web Studios
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
