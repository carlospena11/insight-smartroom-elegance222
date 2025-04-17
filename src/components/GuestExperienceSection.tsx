
import { motion } from "framer-motion";

const FeaturePoint = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div 
      className="text-center p-4"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(140, 209, 79, 0.05)",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className="font-bold text-insight-dark text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

const GuestExperienceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.section 
      id="experiencia" 
      className="py-20 relative bg-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img 
              src="/lovable-uploads/4827b0f3-267c-4c28-b450-53935fa9aeca.png" 
              alt="Guest Experience Interface" 
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
          
          <div>
            <motion.h2 
              className="text-3xl font-bold text-insight-dark mb-6"
              variants={itemVariants}
            >
              Guest Experience
            </motion.h2>
            <motion.h3 
              className="text-2xl font-semibold text-insight-dark mb-8"
              variants={itemVariants}
            >
              Hospitality Smartroom
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              variants={itemVariants}
            >
              {[
                {
                  title: "Solución integral",
                  description: "Una solución integral que implementa todos los procesos de un operador de IPTV/OTT."
                },
                {
                  title: "Experiencia personalizada",
                  description: "Una experiencia de entretenimiento personalizada, como si el huésped estuviera en su propia casa."
                },
                {
                  title: "Integración con PMS",
                  description: "Integración con PMS para agilizar la personalización de la gestión de huéspedes."
                },
                {
                  title: "Personalización de marca",
                  description: "Personalización según los estándares de la marca del hotel."
                },
                {
                  title: "Acceso sin emparejamiento",
                  description: "Facilidad de acceso a todo el contenido sin necesidad de emparejar los dispositivos del huésped."
                },
                {
                  title: "Aumento de ingresos",
                  description: "Promueve los servicios del hotel y aumenta los ingresos complementarios."
                }
              ].map((feature, idx) => (
                <FeaturePoint 
                  key={idx}
                  title={feature.title} 
                  description={feature.description}
                />
              ))}
            </motion.div>
            
            <motion.a 
              href="#contacto" 
              className="inline-block px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(140, 209, 79, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar demostración
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GuestExperienceSection;
