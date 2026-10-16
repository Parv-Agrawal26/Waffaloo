import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import BentoGrid from "./components/BentoGrid";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <HeroSection />
      <BentoGrid />
      <Marquee />
      <About />
      <MenuSection />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
