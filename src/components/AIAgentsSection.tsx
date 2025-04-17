
import { MessageSquare, Hotel, Bot, Brain, Zap, Code, Lightbulb, Languages } from "lucide-react";
import { motion } from "framer-motion";

const AIAgentsSection = () => {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2 
            className="text-3xl font-bold text-insight-dark mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            Agentes de Inteligencia Artificial
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Nuestros agentes de IA revolucionan la experiencia del huésped, brindando atención personalizada las 24 horas.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((agent, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-sm bg-white/80 rounded-xl p-8 shadow-lg border border-gray-200/50"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                background: "rgba(255, 255, 255, 0.95)"
              }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-insight-green/20 rounded-full flex items-center justify-center mb-5"
                whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "rgba(140, 209, 79, 0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <agent.icon className="w-8 h-8 text-insight-green" />
              </motion.div>
              <h3 className="text-xl font-semibold text-insight-dark mb-3">{agent.title}</h3>
              <p className="text-gray-600">{agent.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 backdrop-blur-md bg-white/60 rounded-xl shadow-xl overflow-hidden border border-gray-200/50"
          whileHover={{ scale: 1.03, boxShadow: "0 25px 35px rgba(0,0,0,0.1)" }}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-insight-dark mb-4 flex items-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Brain className="w-6 h-6 mr-2 text-insight-green" />
                  Personalización y Eficiencia
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Nuestros agentes aprenden las preferencias de cada huésped para ofrecer recomendaciones personalizadas. Además, reducen la carga de trabajo del personal, permitiéndoles enfocarse en interacciones de alto valor.
                </motion.p>
                <motion.a 
                  href="/ai-agents" 
                  className="inline-flex items-center px-6 py-3 bg-insight-green text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(140, 209, 79, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Descubrir más
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="bg-insight-dark/90 p-8 flex items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-insight-green/20 to-transparent opacity-60"
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1]  
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <motion.img 
                src="/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png" 
                alt="Agente de IA Insight" 
                className="w-full max-w-md rounded-lg shadow-lg relative z-10"
                whileHover={{ scale: 1.08, rotate: 2 }}
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 10px 25px rgba(0,0,0,0.2)",
                    "0 15px 35px rgba(0,0,0,0.3)",
                    "0 10px 25px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
