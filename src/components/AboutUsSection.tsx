
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Lightbulb } from "lucide-react";

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efectos de parallax con useTransform
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05]);
  const imageBrightness = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

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
      transition: { duration: 0.6 }
    }
  };

  const valueCards = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos a ofrecer soluciones de máxima calidad."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos estrechamente con nuestros clientes para entender sus necesidades."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Constantemente buscamos nuevas formas de mejorar nuestras soluciones."
    }
  ];

  return (
    <motion.section 
      id="nosotros" 
      className="py-20 bg-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-insight-green/5 rounded-full blur-3xl"
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
          className="absolute -bottom-32 -left-20 w-72 h-72 bg-insight-red/5 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-insight-dark mb-4">Sobre Insight</h2>
          <div className="w-20 h-1 bg-insight-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transformamos la experiencia hotelera con soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            style={{ 
              scale: imageScale,
              filter: `brightness(${imageBrightness})`
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <img 
              src="/lovable-uploads/1eaa6c24-f8b6-43b8-bcdd-0ceab0cfd71a.png" 
              alt="Sistema Hospitality en funcionamiento" 
              className="rounded-lg shadow-xl w-full"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-insight-green/10 to-transparent rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div 
              className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(140, 209, 79, 0.1)" }}
            >
              <span className="text-insight-dark font-bold">Experiencia intuitiva</span>
            </motion.div>
          </motion.div>
          
          <motion.div style={{ y: textY }}>
            <motion.h3 
              className="text-2xl font-bold text-insight-dark mb-6"
              variants={itemVariants}
            >
              Líderes en soluciones Hospitality
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              En insight, somos líderes en el desarrollo de soluciones tecnológicas avanzadas para el sector Hospitality. Nos especializamos en crear aplicaciones innovadoras y sistemas de conectividad que transforman la experiencia de los huéspedes.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              Nuestra misión es proporcionar herramientas inteligentes que simplifiquen la gestión operativa y optimicen la interacción con los clientes, creando experiencias memorables para cada huésped.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              {valueCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                    borderColor: "rgba(140, 209, 79, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-insight-green/10 rounded-full flex items-center justify-center mx-auto mb-3"
                    whileHover={{ 
                      rotate: [0, 10, -10, 0],
                      scale: 1.1,
                      backgroundColor: "rgba(140, 209, 79, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon className="w-6 h-6 text-insight-green" />
                  </motion.div>
                  <h4 className="font-semibold text-insight-dark mb-1">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
