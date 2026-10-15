import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "WAFFALOO — Handcrafted Gourmet Waffles",
  description:
    "WAFFALOO serves golden, crispy handcrafted Belgian waffles with premium toppings — fresh daily from our gourmet cart. Find us near you.",
  keywords: "gourmet waffles, waffle cart, handcrafted waffles, Belgian waffles, street food",
  openGraph: {
    title: "WAFFALOO — Handcrafted Gourmet Waffles",
    description: "Golden, crispy handcrafted Belgian waffles with premium toppings. Fresh daily.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
