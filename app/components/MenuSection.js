import styles from "./MenuSection.module.css";

const MENU = [
  {
    category: "Classics",
    items: [
      { name: "Classic Maple Butter", desc: "Pure Canadian maple, whipped butter, sea salt flakes.", price: "₹199" },
      { name: "Cinnamon Sugar Dust", desc: "Warm cinnamon, powdered sugar, vanilla cream drizzle.", price: "₹179" },
      { name: "Honey & Thyme", desc: "Raw wildflower honey, fresh thyme, ricotta dollop.", price: "₹219" },
    ],
  },
  {
    category: "Indulgent",
    items: [
      { name: "Lotus Biscoff Dream", desc: "Biscoff spread, crushed cookies, caramel ribbon.", price: "₹249" },
      { name: "Nutella Berry Bliss", desc: "Nutella, fresh strawberries, whipped cream, mint.", price: "₹259" },
      { name: "Salted Caramel Cloud", desc: "House caramel, fleur de sel, vanilla bean ice cream.", price: "₹269" },
    ],
  },
  {
    category: "Seasonal",
    items: [
      { name: "Mango Saffron Royale", desc: "Alphonso mango coulis, saffron cream, pistachio crumble.", price: "₹289" },
      { name: "Dark Chocolate Noir", desc: "70% dark ganache, candied orange zest, gold dust.", price: "₹279" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className={styles.section} aria-label="Waffaloo menu">
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Menu</span>
          <h2 className={styles.heading}>Every Waffle,<br />A Masterpiece.</h2>
          <p className={styles.subhead}>
            Pressed fresh to order. Finished by hand. Served with love.
          </p>
        </div>

        <div className={styles.categories}>
          {MENU.map((cat) => (
            <div key={cat.category} className={styles.category}>
              <h3 className={styles.catLabel}>{cat.category}</h3>
              <div className={styles.items}>
                {cat.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <div className={styles.itemLeft}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemDesc}>{item.desc}</span>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <span className={styles.noteDot} aria-hidden="true" />
          All waffles are made fresh on order. Gluten-free batter available on request.
        </div>

      </div>
    </section>
  );
}
