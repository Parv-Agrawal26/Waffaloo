"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFading(true);
      setTimeout(() => setGone(true), 400);
    };
    const imgs = Array.from({ length: 100 }, (_, i) => {
      const n = String(i + 1).padStart(3, "0");
      const img = new Image();
      img.src = `https://res.cloudinary.com/dq9lvxqef/image/upload/f_auto,q_auto/ezgif-frame-${n}.png`;
      return new Promise((res) => { img.onload = res; img.onerror = res; });
    });
    Promise.all(imgs).then(hide);
    const t = setTimeout(hide, 15000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.loader} ${fading ? styles.fading : ""}`}>
      <div className={styles.spinner} />
    </div>
  );
}
