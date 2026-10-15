"use client";

import styles from "./BentoGrid.module.css";

const MENU_ITEMS = [
  { name: "Lotus Biscoff Dream", tag: "Bestseller" },
  { name: "Nutella Berry Bliss", tag: "Fan Favourite" },
  { name: "Salted Caramel Cloud", tag: "Seasonal" },
  { name: "Classic Maple Butter", tag: "Original" },
];

export default function BentoGrid() {
  return (
    <section className={styles.section} aria-label="Menu and experience">

      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Crafted With Love</span>
        <h2 className={styles.heading}>The Waffaloo Experience</h2>
      </div>

      {/* ── Grid ── */}
      <div className={styles.grid}>

        {/* A — Large feature card (tall left) */}
        <div className={`${styles.card} ${styles.cardA}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <div className={styles.cardTag}>Signature</div>
          <div className={styles.cardBody}>
            <p className={styles.cardEyebrow}>Our Craft</p>
            <h3 className={styles.cardTitle}>Golden Crisp,<br />Every Time</h3>
            <p className={styles.cardDesc}>
              Each waffle is pressed to perfection — crispy on the outside,
              cloud-soft within, finished with hand-poured toppings.
            </p>
          </div>
          <div className={styles.cardWaffleArt} aria-hidden="true">
            <span className={styles.waffleEmoji}>🧇</span>
          </div>
        </div>

        {/* B — Wide top-right stat card */}
        <div className={`${styles.card} ${styles.cardB}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>12+</span>
              <span className={styles.statLabel}>Signature Flavours</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>City Locations</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Fresh Daily</span>
            </div>
          </div>
        </div>

        {/* C — Menu list card */}
        <div className={`${styles.card} ${styles.cardC}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <p className={styles.cardEyebrow}>On The Menu</p>
          <h3 className={styles.cardTitleSm}>Top Picks</h3>
          <ul className={styles.menuList}>
            {MENU_ITEMS.map((item) => (
              <li key={item.name} className={styles.menuItem}>
                <span className={styles.menuName}>{item.name}</span>
                <span className={styles.menuTag}>{item.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* D — Ingredients / quality card */}
        <div className={`${styles.card} ${styles.cardD}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <div className={styles.iconRow}>
            {["🌾", "🍯", "🥛", "🫐"].map((e) => (
              <span key={e} className={styles.ingredientIcon}>{e}</span>
            ))}
          </div>
          <p className={styles.cardEyebrow}>Ingredients</p>
          <h3 className={styles.cardTitleSm}>Premium,<br />Always</h3>
          <p className={styles.cardDescSm}>
            Stone-milled flour, raw honey, farm cream — no shortcuts, ever.
          </p>
        </div>

        {/* E — Catering / events card */}
        <div className={`${styles.card} ${styles.cardE}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <div className={styles.cardTag}>New</div>
          <p className={styles.cardEyebrow}>Events &amp; Catering</p>
          <h3 className={styles.cardTitleSm}>Bring Waffaloo<br />To Your Event</h3>
          <p className={styles.cardDescSm}>
            Corporate brunches, weddings, pop-ups — our live cart experience
            is the centrepiece your guests will remember.
          </p>
          <a href="#catering" className={styles.cardCta}>
            Book a Cart
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* F — Vibe / quote card */}
        <div className={`${styles.card} ${styles.cardF}`}>
          <div className={styles.cardGlow} aria-hidden="true" />
          <blockquote className={styles.quote}>
            "Not just a waffle — it's a moment."
          </blockquote>
          <cite className={styles.quoteCite}>— Waffaloo, est. 2023</cite>
        </div>

      </div>
    </section>
  );
}
