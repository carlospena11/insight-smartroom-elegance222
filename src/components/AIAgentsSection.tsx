import { MessageSquare, Hotel, Bot, Languages } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AgentCard from "./ai-agents/AgentCard";
import AgentImage from "./ai-agents/AgentImage";
import SectionTitle from "./ai-agents/SectionTitle";

const AIAgentsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  const agents = [
    {
      icon: Bot,
      title: "Recepcionistas Virtuales",
      description: "Nuestros agentes de IA actúan como recepcionistas virtuales disponibles en todo momento, eliminando tiempos de espera y mejorando la satisfacción del huésped."
    },
    {
      icon: Languages,
      title: "Lenguaje Natural",
      description: "Interacción mediante lenguaje natural que hace que la comunicación sea fluida e intuitiva. Los huéspedes pueden hacer preguntas como lo harían con un miembro del personal."
    },
    {
      icon: Hotel,
      title: "Información Detallada",
      description: "Acceso inmediato a información completa sobre el hotel: menús de restaurantes, servicio a la habitación, atracciones cercanas y servicios del hotel."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-100 to-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-insight-green/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-insight-red/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, scale }}
      >
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <SectionTitle titleY={titleY} />
            
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 w-full items-stretch">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {agents.map((agent, index) => (
                  <AgentCard 
                    key={index}
                    icon={agent.icon}
                    title={agent.title}
                    description={agent.description}
                    index={index}
                  />
                ))}
              </div>
              
              <AgentImage />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIAgentsSection;
