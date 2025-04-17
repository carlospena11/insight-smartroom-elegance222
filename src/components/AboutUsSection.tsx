
import { motion } from "framer-motion";

const AboutUsSection = () => {
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
      transition: { duration: a0.6 }
    }
  };

  return (
    <motion.section 
      id="nosotros" 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <img 
              src="/lovable-uploads/1eaa6c24-f8b6-43b8-bcdd-0ceab0cfd71a.png" 
              alt="Sistema Hospitality en funcionamiento" 
              className="rounded-lg shadow-xl"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-insight-green/10 to-transparent rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          
          <div>
            <motion.h2 
              className="text-3xl font-bold text-insight-dark mb-4"
              variants={itemVariants}
            >
              Sobre Insight
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-4"
              variants={itemVariants}
            >
              En insight., somos líderes en el desarrollo de soluciones tecnológicas avanzadas para el sector Hospitality. Nos especializamos en crear aplicaciones innovadoras y sistemas de conectividad que transforman la experiencia de los huéspedes.
            </motion.p>
            
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              Nuestra misión es proporcionar herramientas inteligentes que simplifiquen la gestión operativa y optimicen la interacción con los clientes.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
