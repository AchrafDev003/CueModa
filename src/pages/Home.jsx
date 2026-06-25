import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import BrandsSection from "../components/sections/BrandsSection";
import EventsSection from "../components/sections/EventsSection";
import GallerySection from "../components/sections/GallerySection";
import StatsSection from "../components/sections/StatsSection";
import ContactSection from "../components/sections/ContactSection";

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <EventsSection />
      <GallerySection />
      
      <ContactSection />

      <Footer />
    </>
  );
}

export default Home;