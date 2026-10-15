import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact Waffaloo">
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Get In Touch</span>
          <h2 className={styles.heading}>Let's Talk<br />Waffles.</h2>
        </div>

        <div className={styles.grid}>

          {/* Phone */}
          <a href="tel:+919286505879" className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2 11.5 11.5 0 003.6.6 1 1 0 011 1V21a1 1 0 01-1 1C9.6 22 2 14.4 2 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.2 1.1L6.6 10.8z" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className={styles.cardLabel}>Call Us</span>
              <span className={styles.cardValue}>+91 92865 05879</span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:evolvewebstudios@gmail.com" className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 6l-10 7L2 6" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className={styles.cardLabel}>Email</span>
              <span className={styles.cardValue}>evolvewebstudios@gmail.com</span>
            </div>
          </a>

          {/* Studio */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className={styles.cardLabel}>Built by</span>
              <span className={styles.cardValue}>Evolve Web Studios</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
