import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About Waffaloo">
      <div className={styles.inner}>

        <div className={styles.left}>
          <span className={styles.eyebrow}>Our Story</span>
          <h2 className={styles.heading}>Born from a love<br />of golden things.</h2>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.body}>
            Waffaloo started with one simple belief — that a great waffle
            deserves great ingredients, great craft, and a great moment to
            enjoy it in. We press every waffle to order, finish it by hand,
            and serve it straight from our cart to yours.
          </p>
          <p className={styles.body}>
            No shortcuts. No reheats. Just pure, golden, handcrafted joy —
            every single day.
          </p>
          <div className={styles.tags}>
            {["Handcrafted", "Fresh Daily", "Premium Ingredients", "Made with Love"].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.statCard}>
            <span className={styles.statNum}>2023</span>
            <span className={styles.statLabel}>Year Founded</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>8+</span>
            <span className={styles.statLabel}>City Locations</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>50k+</span>
            <span className={styles.statLabel}>Waffles Served</span>
          </div>
          <div className={styles.creditCard}>
            <span className={styles.creditEyebrow}>A Concept Project by</span>
            <span className={styles.creditName}>Evolve Web Studios</span>
            <span className={styles.creditSub}>Brand · Design · Development</span>
          </div>
        </div>

      </div>
    </section>
  );
}
