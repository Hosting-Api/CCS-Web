import Image from "next/image";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Slider from "./components/Slider";
import HeroSection from "./components/Hero";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="clients">
        <Slider />
      </div>

      <div id="contact">
        {/* <WhatsappBtn /> */}
        <Contact />
      </div>
    </div>
  );
}
