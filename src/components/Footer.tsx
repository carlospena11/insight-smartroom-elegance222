
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageSquare } from "lucide-react";
import { ImageManager, siteImages } from "./ImageManager";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
}

interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  whatsapp: string;
}

const Footer = () => {
  // Default contact information
  const defaultContactInfo = {
    email: "info@insight-smartroom.com",
    phone: "+123 456 7890",
    address: "Avenida Principal 123, Ciudad",
    whatsapp: "+123 456 7890",
  };

  // Default social media links
  const defaultSocialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/123456789",
  };

  // Load contact info from localStorage or use default
  const getContactInfo = (): ContactInfo => {
    try {
      const savedInfo = localStorage.getItem("insight-contact-info");
      if (savedInfo) {
        return JSON.parse(savedInfo);
      }
    } catch (error) {
      console.error("Error loading contact info:", error);
    }
    return defaultContactInfo;
  };

  // Load social links from localStorage or use default
  const getSocialLinks = (): SocialLinks => {
    try {
      const savedLinks = localStorage.getItem("insight-social-links");
      if (savedLinks) {
        return JSON.parse(savedLinks);
      }
    } catch (error) {
      console.error("Error loading social links:", error);
    }
    return defaultSocialLinks;
  };

  const contactInfo = getContactInfo();
  const socialLinks = getSocialLinks();

  return (
    <footer className="bg-insight-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-semibold mb-4">
              <span className="text-white">&lt;</span>
              <span className="text-white">insight</span>
              <span className="text-insight-red">.</span>
              <span className="text-insight-green">/&gt;</span>
            </div>
            <p className="text-gray-300 mb-4">
              Soluciones tecnológicas para el sector Hospitality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.whatsapp && (
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#caracteristicas" className="text-gray-300 hover:text-white transition-colors">Características</a></li>
              <li><a href="#compatibilidad" className="text-gray-300 hover:text-white transition-colors">Compatibilidad</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hospitality SmartRoom</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart TV Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personalización de Interfaces</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Análisis de Datos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{contactInfo.email}</li>
              <li className="text-gray-300">{contactInfo.phone}</li>
              <li className="text-gray-300">{contactInfo.address}</li>
              <li className="text-gray-300">WhatsApp: {contactInfo.whatsapp}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Insight. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
