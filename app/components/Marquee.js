"use client";

import styles from "./Marquee.module.css";

const PRESS = [
  { label: "The Food Journal" },
  { label: "Gourmet Weekly" },
  { label: "Street Eats Mag" },
  { label: "Crispy & Co." },
  { label: "The Waffle Post" },
  { label: "Golden Fork" },
  { label: "Artisan Bites" },
  { label: "Brunch Culture" },
];

const LOCATIONS = [
  { label: "Connaught Place" },
  { label: "Hauz Khas Village" },
  { label: "Cyber Hub" },
  { label: "Khan Market" },
  { label: "Lajpat Nagar" },
  { label: "Saket Select" },
  { label: "Vasant Kunj" },
  { label: "Nehru Place" },
];

function Track({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={styles.trackWrapper}>
      <ul
        className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.itemLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className={styles.section} aria-label="Press and locations">
      <div className={styles.header}>
        <span className={styles.eyebrow}>As Seen In &amp; Where To Find Us</span>
      </div>
      <div className={styles.mask}>
        <Track items={PRESS} reverse={false} />
        <Track items={LOCATIONS} reverse={true} />
      </div>
    </section>
  );
}
