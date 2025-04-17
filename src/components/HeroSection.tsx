
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-insight-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-insight-red/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-insight-dark mb-4">
              Soluciones <span className="text-insight-green">SmartRoom</span> para hoteles
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transformamos la experiencia del huésped con tecnología inteligente y personalizada para el sector Hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios" 
                className="px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
              >
                Nuestros Servicios
              </a>
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-white text-insight-dark font-semibold rounded-md border border-insight-dark hover:bg-insight-dark hover:text-white transition-all transform hover:scale-105 shadow-sm"
              >
                Contactar
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/c945a5a8-5382-4f39-8400-1511bec5245e.png" 
                alt="Insight SmartRoom Interface" 
                className="rounded-lg shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
