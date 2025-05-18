
import { motion } from "framer-motion";

interface SectionTitleProps {
  titleY: any;
}

const SectionTitle = ({ titleY }: SectionTitleProps) => {
  return (
    <div className="text-center mb-14 relative">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-adirem-dark mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        style={{ y: titleY }}
      >
        Agentes de Inteligencia Artificial
      </motion.h2>
      <motion.div
        className="w-20 h-1 bg-adirem-green mx-auto mb-6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.p 
        className="text-lg text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Nuestros agentes de IA revolucionan la experiencia del huésped, brindando atención personalizada las 24 horas.
      </motion.p>
    </div>
  );
};

export default SectionTitle;
