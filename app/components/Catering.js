import styles from "./Catering.module.css";

const PACKAGES = [
  {
    name: "The Pop-Up",
    ideal: "Markets & Festivals",
    desc: "A single live cart setup with our full menu. Perfect for public events, weekend markets, and food festivals.",
    includes: ["1 Live Cart", "Full Menu", "2 Staff", "Up to 4 hrs"],
  },
  {
    name: "The Social",
    ideal: "Birthdays & Parties",
    desc: "Bring the Waffaloo experience to your private gathering. Custom toppings bar, branded packaging included.",
    includes: ["1 Live Cart", "Custom Toppings Bar", "3 Staff", "Up to 6 hrs"],
    featured: true,
  },
  {
    name: "The Corporate",
    ideal: "Offices & Brand Events",
    desc: "Elevate your corporate brunch or brand activation with a premium live waffle station and co-branded setup.",
    includes: ["2 Live Carts", "Co-Branded Setup", "4 Staff", "Full Day"],
  },
];

export default function Catering() {
  return (
    <section id="catering" className={styles.section} aria-label="Waffaloo catering">
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Catering &amp; Events</span>
          <h2 className={styles.heading}>Your Event.<br />Our Waffles.</h2>
          <p className={styles.subhead}>
            Live cart experiences for every occasion — from intimate gatherings
            to large-scale brand activations.
          </p>
        </div>

        <div className={styles.packages}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ""}`}>
              {pkg.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <div className={styles.cardTop}>
                <span className={styles.ideal}>{pkg.ideal}</span>
                <h3 className={styles.pkgName}>{pkg.name}</h3>
                <p className={styles.pkgDesc}>{pkg.desc}</p>
              </div>
              <ul className={styles.includes}>
                {pkg.includes.map((inc) => (
                  <li key={inc} className={styles.includeItem}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to book? Let's talk.</p>
          <a href="#contact" className={styles.ctaBtn}>
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
