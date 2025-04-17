
import { motion } from "framer-motion";

const ScreenFormatsSection = () => {
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

  return (
    <motion.section 
      id="formatos" 
      className="py-12 bg-insight-dark text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="text-center mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-3">Formatos adaptados a las necesidades del hotel</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Nuestro sistema se adapta a cualquier tipo de pantalla y formato, brindando una experiencia consistente en todos los dispositivos.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="/lovable-uploads/8267491d-9223-4994-8a4b-68fe754c774d.png" 
            alt="Diferentes formatos de pantalla del sistema Hospitality" 
            className="w-full rounded-xl shadow-2xl"
          />
          
          <motion.div 
            className="absolute top-4 left-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Interfaces personalizables
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 right-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            Compatibilidad multi-dispositivo
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Diseño Responsivo",
              description: "Nuestras interfaces se adaptan automáticamente a cualquier tamaño de pantalla."
            },
            {
              title: "Múltiples Layouts",
              description: "Ofrecemos diferentes layouts que se pueden personalizar según las necesidades específicas de cada hotel."
            },
            {
              title: "Personalización Total",
              description: "Cada elemento de la interfaz puede ser personalizado para reflejar la imagen de marca del hotel."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScreenFormatsSection;
