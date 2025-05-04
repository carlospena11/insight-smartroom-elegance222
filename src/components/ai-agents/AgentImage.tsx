
import { motion } from "framer-motion";
import { ImageManager, siteImages } from "../ImageManager";

const AgentImage = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
          boxShadow: "0 25px 35px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <ImageManager 
          src={siteImages.aiAgent} 
          alt="Agente de IA"
          className="rounded-2xl shadow-xl w-full h-full object-cover"
          fallbackSrc="/placeholder.svg"
        />
      </motion.div>
    </motion.div>
  );
};

export default AgentImage;
