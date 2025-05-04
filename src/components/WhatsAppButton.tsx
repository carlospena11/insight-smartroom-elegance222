
import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const [whatsappNumber, setWhatsappNumber] = useState<string>("+123 456 7890");

  // Load WhatsApp number from localStorage
  useEffect(() => {
    try {
      const contactInfo = localStorage.getItem("insight-contact-info");
      if (contactInfo) {
        const parsedInfo = JSON.parse(contactInfo);
        if (parsedInfo.whatsapp) {
          setWhatsappNumber(parsedInfo.whatsapp);
        }
      }
    } catch (error) {
      console.error("Error loading WhatsApp number:", error);
    }
  }, []);

  // Format WhatsApp number for URL - remove spaces and special characters
  const formatWhatsAppNumber = (number: string) => {
    return number.replace(/\s+/g, "").replace(/[^\d+]/g, "");
  };

  const whatsappUrl = `https://wa.me/${formatWhatsAppNumber(whatsappNumber)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <motion.div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <MessageSquare className="w-8 h-8" />
          </motion.div>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">¿Necesitas ayuda?</h3>
            <p className="text-sm text-gray-600">Escríbenos por WhatsApp y te responderemos lo antes posible.</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Iniciar chat
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WhatsAppButton;
