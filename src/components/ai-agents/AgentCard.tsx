
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const AgentCard = ({ icon: Icon, title, description, index }: AgentCardProps) => {
  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/80 rounded-xl p-8 shadow-lg border border-gray-200/50"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
        background: "rgba(255, 255, 255, 0.95)",
        borderColor: "rgba(140, 209, 79, 0.4)"
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileTap={{ scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 80
      }}
    >
      <motion.div 
        className="w-16 h-16 bg-insight-green/20 rounded-full flex items-center justify-center mb-5"
        whileHover={{ 
          scale: 1.2, 
          rotate: 5, 
          backgroundColor: "rgba(140, 209, 79, 0.4)",
          boxShadow: "0 0 12px rgba(140, 209, 79, 0.6)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8 text-insight-green" />
      </motion.div>
      <h3 className="text-xl font-semibold text-insight-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AgentCard;
