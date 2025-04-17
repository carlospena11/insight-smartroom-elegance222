
import { MessageSquare, Hotel, Bot, Brain, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AIAgentsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-insight-dark mb-4">Agentes de Inteligencia Artificial</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros agentes de IA revolucionan la experiencia del huésped, brindando atención personalizada las 24 horas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Bot,
              title: "Recepcionistas Virtuales",
              description: "Nuestros agentes de IA actúan como recepcionistas virtuales disponibles en todo momento, eliminando tiempos de espera y mejorando la satisfacción del huésped."
            },
            {
              icon: MessageSquare,
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
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div className="w-14 h-14 bg-insight-green/10 rounded-full flex items-center justify-center mb-5">
                <agent.icon className="w-7 h-7 text-insight-green" />
              </div>
              <h3 className="text-xl font-semibold text-insight-dark mb-3">{agent.title}</h3>
              <p className="text-gray-600">{agent.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gray-50 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-insight-dark mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-insight-green" />
                  Personalización y Eficiencia
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestros agentes aprenden las preferencias de cada huésped para ofrecer recomendaciones personalizadas. Además, reducen la carga de trabajo del personal, permitiéndoles enfocarse en interacciones de alto valor.
                </p>
                <motion.a 
                  href="#contacto" 
                  className="inline-flex items-center px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Descubrir más
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="bg-insight-dark p-8 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png" 
                alt="Agente de IA Insight" 
                className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
