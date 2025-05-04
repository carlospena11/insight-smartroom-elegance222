
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageManager, siteImages } from "./ImageManager";

const CompatibilitySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  // Array of compatibility logos to map through
  const compatibilityLogos = [
    { key: 'compatibilityLogo1', number: 1 },
    { key: 'compatibilityLogo2', number: 2 },
    { key: 'compatibilityLogo3', number: 3 },
    { key: 'compatibilityLogo4', number: 4 },
    { key: 'compatibilityLogo5', number: 5 },
    { key: 'compatibilityLogo6', number: 6 },
  ];

  return (
    <section id="compatibilidad" className="py-20 bg-[#F5F5DC]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.7 }
            }
          }}
        >
          <h2 className="text-3xl font-bold text-insight-dark mb-4">Compatibilidad del Sistema Hospitality</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema se integra perfectamente con televisores mediante la instalación de un dispositivo compatible con Android TV 14 o superior.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/2 prose max-w-none"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.7, delay: 0.3 }
              }
            }}
          >
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                El sistema Hospitality de NeuraTech está diseñado para integrarse perfectamente con televisores mediante la instalación de un dispositivo compatible con Android TV 14 o superior. Este dispositivo transforma cualquier televisor en un Smart TV completamente funcional, ofreciendo todas las características modernas que los huéspedes esperan, pero con un enfoque 100% personalizado y adaptado a las necesidades del hotel.
              </p>
              
              <motion.h3 
                className="text-xl font-semibold text-insight-dark mt-8 mb-4"
                variants={fadeIn}
              >
                Principales Ventajas:
              </motion.h3>
              
              {[
                {
                  title: "1. Funcionalidad de Smart TV",
                  description: "Los huéspedes podrán disfrutar de todas las características de un Smart TV, como acceso a aplicaciones, contenido multimedia y navegación fluida, con la diferencia de que la experiencia está completamente adaptada al entorno del hotel."
                },
                {
                  title: "2. Personalización y Customización Exclusiva",
                  description: "Todo el sistema está diseñado para reflejar la identidad y los servicios del hotel. Desde la interfaz de usuario hasta el contenido disponible, cada detalle es ajustado para garantizar una experiencia única y alineada con la marca del establecimiento."
                },
                {
                  title: "3. Control de Contenido Configurado",
                  description: "Los huéspedes tendrán acceso únicamente al contenido previamente configurado por el hotel. Esto incluye servicios y aplicaciones seleccionadas, contenido promocional, información de eventos y entretenimiento aprobado, asegurando una experiencia segura y controlada."
                },
                {
                  title: "4. Interacción Segura y Controlada",
                  description: "Este enfoque limita el acceso a configuraciones sensibles o aplicaciones externas, garantizando que el sistema se utilice exclusivamente como se ha planeado, manteniendo la seguridad y el control en manos del hotel."
                }
              ].map((advantage, idx) => (
                <motion.div 
                  key={idx} 
                  className="mb-6"
                  variants={fadeIn}
                  custom={idx}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-insight-dark">{advantage.title}</h4>
                  <p className="text-gray-700">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50, scale: 0.9 },
              visible: { 
                opacity: 1, 
                x: 0,
                scale: 1,
                transition: { duration: 0.7, delay: 0.5 }
              }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-md">
              <motion.img 
                src="/lovable-uploads/27a90f52-eb00-4ffd-baf1-e4fe55ae9d2a.png" 
                alt="Dispositivo SmartRoom y control" 
                className="mx-auto mb-8 rounded-lg"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              />
              
              <motion.div 
                className="text-center mb-6 py-4 border-t border-b border-gray-200"
                variants={fadeIn}
                whileHover={{ backgroundColor: "rgba(140, 209, 79, 0.05)" }}
              >
                <p className="text-sm text-gray-500">Modelo referencial puede variar en base a proyecto</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.7
                    }
                  }
                }}
              >
                {compatibilityLogos.map((logo) => (
                  <motion.div
                    key={logo.key}
                    className="relative"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, 5, 0], 
                      transition: { duration: 0.5 } 
                    }}
                  >
                    <ImageManager
                      src={siteImages[logo.key]}
                      alt={`Logo compatibilidad ${logo.number}`}
                      className="h-10 object-contain"
                    />
                    <span className="absolute -top-2 -right-2 bg-insight-green text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {logo.number}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
