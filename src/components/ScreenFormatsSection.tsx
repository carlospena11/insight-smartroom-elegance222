
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Monitor, Smartphone, Tablet, Check } from "lucide-react";

const ScreenFormatsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efectos de scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-2, 2]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.8]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const deviceTypes = [
    { icon: Monitor, name: "Escritorio", features: ["Resolución óptima", "Navegación completa", "Experiencia inmersiva"] },
    { icon: Tablet, name: "Tablet", features: ["Adaptado a pantallas medianas", "Gestos táctiles", "Orientación dinámica"] },
    { icon: Smartphone, name: "Móvil", features: ["Interfaz simplificada", "Accesibilidad máxima", "Vista compacta"] }
  ];

  return (
    <motion.section 
      id="formatos" 
      className="py-20 bg-insight-dark text-white overflow-hidden"
      ref={sectionRef}
      style={{ opacity: opacitySection }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            className="text-insight-green font-medium mb-2 inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ADAPTABILIDAD COMPLETA
          </motion.span>
          <h2 className="text-3xl font-bold mb-4">Formatos adaptados a las necesidades del hotel</h2>
          <div className="w-20 h-1 bg-insight-green mx-auto mb-6"></div>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Nuestro sistema se adapta a cualquier tipo de pantalla y formato, brindando una experiencia consistente en todos los dispositivos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            className="relative"
            style={{ 
              scale: imageScale,
              rotate: imageRotate
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.img 
              src="/lovable-uploads/8267491d-9223-4994-8a4b-68fe754c774d.png" 
              alt="Diferentes formatos de pantalla del sistema Hospitality" 
              className="w-full rounded-xl shadow-2xl"
              whileHover={{ filter: "brightness(1.1)" }}
            />
            
            <motion.div 
              className="absolute top-4 left-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(140, 209, 79, 0.95)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              Interfaces personalizables
            </motion.div>
            
            <motion.div 
              className="absolute bottom-4 right-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(140, 209, 79, 0.95)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              Compatibilidad multi-dispositivo
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={fadeIn}
            >
              Una experiencia perfecta en cada pantalla
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={fadeIn}
            >
              Con nuestra tecnología adaptativa, el sistema Hospitality ofrece una experiencia de usuario perfecta, independientemente del dispositivo que se utilice para acceder.
            </motion.p>
            
            <div className="space-y-6">
              {deviceTypes.map((device, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  variants={fadeIn}
                  custom={index}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-insight-green/20 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      rotate: 360,
                      backgroundColor: "rgba(140, 209, 79, 0.3)",
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  >
                    <device.icon className="w-6 h-6 text-insight-green" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Formato {device.name}</h4>
                    <ul className="space-y-1">
                      {device.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm text-gray-300 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (index * 0.1) + (idx * 0.1) }}
                        >
                          <Check className="w-4 h-4 mr-2 text-insight-green flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Diseño Responsivo",
              description: "Nuestras interfaces se adaptan automáticamente a cualquier tamaño de pantalla, garantizando una visualización óptima."
            },
            {
              title: "Múltiples Layouts",
              description: "Ofrecemos diferentes layouts que se pueden personalizar según las necesidades específicas de cada hotel y tipo de habitación."
            },
            {
              title: "Personalización Total",
              description: "Cada elemento de la interfaz puede ser personalizado para reflejar la imagen de marca del hotel y crear una experiencia única."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="h-1 w-12 bg-insight-green mb-4"
                whileHover={{ width: "100%", transition: { duration: 0.3 } }}
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
              <motion.div 
                className="mt-4 pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <motion.a 
                  href="#contacto"
                  className="text-insight-green text-sm font-medium flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Más información
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScreenFormatsSection;
