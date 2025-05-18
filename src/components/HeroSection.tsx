
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";
import { useRef } from "react";
import { ImageManager } from "./ImageManager";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax effect
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        duration: 0.6
      }
    }
  };

  const buttonPrimaryVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -4,
      boxShadow: "0 8px 16px rgba(140, 209, 79, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98, y: 0 }
  };

  const buttonSecondaryVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -4,
      boxShadow: "0 8px 16px rgba(26, 31, 44, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98, y: 0 }
  };

  return (
    <section 
      id="inicio" 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-adirem-green/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-adirem-red/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating elements in background */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-8 h-8 bg-adirem-green/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[10%] w-6 h-6 bg-adirem-red/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            style={{ y: textY, opacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-adirem-dark mb-4"
              variants={itemVariants}
            >
              <span className="inline-flex flex-wrap items-center">
                <span>Soluciones</span>{" "}
                <span className="text-adirem-dark relative">
                  para hoteles
                </span>{" "}
              </span>
              <span className="text-adirem-green relative inline-flex items-center">
                <img 
                  src="/lovable-uploads/4e05bd4d-c863-47c3-98a2-4459683c8d14.png" 
                  alt="SmartRoom Logo" 
                  className="h-10 md:h-12 lg:h-14 inline-block align-middle"
                />
                <motion.span 
                  className="absolute -top-6 -right-8 text-yellow-400"
                  animate={{ 
                    rotate: [0, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Star className="w-6 h-6 fill-current" />
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Transformamos la experiencia del huésped con tecnología inteligente y personalizada para el sector Hospitality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#servicios" 
                className="group px-6 py-3 bg-adirem-green text-white font-semibold rounded-md shadow-md flex items-center justify-center"
                variants={buttonPrimaryVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Nuestros Servicios
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-md"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </motion.a>
              
              <motion.a 
                href="#contacto" 
                className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center"
                variants={buttonSecondaryVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Zap className="w-5 h-5 mr-2" /> Contactar
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/lovable-uploads/c945a5a8-5382-4f39-8400-1511bec5245e.png" 
                alt="Adirem SmartRoom Interface" 
                className="rounded-lg shadow-2xl mx-auto"
              />
              <motion.div 
                className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-60"
                animate={{ opacity: [0.6, 0.4, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div 
                className="absolute -right-4 -bottom-4 bg-white p-3 rounded-lg shadow-lg flex items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              >
                <motion.div 
                  className="text-adirem-dark font-semibold flex items-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-adirem-green mr-2">+</span> Interfaz Intuitiva
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
