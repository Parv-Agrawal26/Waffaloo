import styles from "./Locations.module.css";

const LOCATIONS = [
  { city: "Connaught Place", area: "Central Delhi", hours: "10am – 10pm", days: "Mon – Sun", tag: "Flagship" },
  { city: "Hauz Khas Village", area: "South Delhi", hours: "12pm – 11pm", days: "Tue – Sun", tag: "Popular" },
  { city: "Cyber Hub", area: "Gurugram", hours: "11am – 10pm", days: "Mon – Sun", tag: "" },
  { city: "Khan Market", area: "Central Delhi", hours: "10am – 9pm", days: "Mon – Sat", tag: "" },
  { city: "Saket Select City", area: "South Delhi", hours: "11am – 10pm", days: "Mon – Sun", tag: "New" },
  { city: "Vasant Kunj", area: "South-West Delhi", hours: "12pm – 10pm", days: "Wed – Sun", tag: "" },
];

export default function Locations() {
  return (
    <section id="locations" className={styles.section} aria-label="Waffaloo locations">
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Find Us</span>
          <h2 className={styles.heading}>We're Closer<br />Than You Think.</h2>
          <p className={styles.subhead}>
            Roll up to any of our carts — fresh waffles pressed on the spot.
          </p>
        </div>

        <div className={styles.grid}>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.city}>{loc.city}</h3>
                  <span className={styles.area}>{loc.area}</span>
                </div>
                {loc.tag && <span className={styles.tag}>{loc.tag}</span>}
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Hours</span>
                  <span className={styles.detailValue}>{loc.hours}</span>
                </div>
                <div className={styles.detailDivider} aria-hidden="true" />
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Days</span>
                  <span className={styles.detailValue}>{loc.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
