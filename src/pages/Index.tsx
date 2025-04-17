
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import FeaturesSection from "@/components/FeaturesSection";
import GuestExperienceSection from "@/components/GuestExperienceSection";
import InterfaceShowcaseSection from "@/components/InterfaceShowcaseSection";
import ScreenFormatsSection from "@/components/ScreenFormatsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <GuestExperienceSection />
      <InterfaceShowcaseSection />
      <ScreenFormatsSection />
      <CompatibilitySection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
