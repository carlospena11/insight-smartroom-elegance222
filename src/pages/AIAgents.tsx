
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, Sparkles, Lightbulb, Zap, Languages, Check, ChevronDown } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Demo conversation component
const DemoConversation = () => {
  const [expanded, setExpanded] = useState(false);
  
  const messages = [
    { role: "user", text: "¿Puedo pedir servicio a la habitación?" },
    { role: "assistant", text: "¡Claro! Nuestro servicio a la habitación está disponible las 24 horas. ¿Qué le gustaría ordenar?" },
    { role: "user", text: "Quisiera un desayuno continental" },
    { role: "assistant", text: "Excelente elección. El desayuno continental incluye café o té, jugo de naranja, selección de panes, mermeladas y frutas frescas. ¿Le gustaría agregar algo más a su orden?" },
    { role: "user", text: "No, eso está bien. ¿Cuánto tardará?" },
    { role: "assistant", text: "Su desayuno continental llegará a su habitación en aproximadamente 20 minutos. ¿Hay alguna preferencia sobre el tipo de pan o bebida?" },
    { role: "user", text: "Prefiero pan integral y café negro" },
    { role: "assistant", text: "Perfecto. He registrado su pedido: desayuno continental con pan integral y café negro. Llegará a su habitación en 20 minutos. Su número de orden es #12345. ¿Necesita algo más?" }
  ];

  const displayMessages = expanded ? messages : messages.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-insight-dark p-4 text-white flex items-center">
        <Bot className="w-5 h-5 mr-2 text-insight-green" />
        <h3 className="text-lg font-medium">Conversación con el Asistente Virtual</h3>
      </div>
      
      <div className="p-4 max-h-[400px] overflow-y-auto">
        {displayMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`mb-4 flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "assistant"
                  ? "bg-gray-100 text-insight-dark"
                  : "bg-insight-green text-white"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>
      
      {!expanded && (
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center text-insight-green hover:text-insight-dark transition-colors"
          >
            Ver conversación completa
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// FAQ component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "¿Cómo funcionan los agentes de IA en un hotel?",
      answer: "Los agentes de IA utilizan procesamiento de lenguaje natural para entender y responder a las solicitudes de los huéspedes. Se integran con los sistemas del hotel para proporcionar información actualizada y gestionar solicitudes en tiempo real."
    },
    {
      question: "¿Los agentes de IA reemplazan al personal del hotel?",
      answer: "No, los agentes de IA complementan al personal del hotel, manejando consultas rutinarias para que el personal pueda dedicarse a interacciones de mayor valor con los huéspedes."
    },
    {
      question: "¿Es segura la información que comparto con los agentes de IA?",
      answer: "Sí, todos nuestros sistemas cumplen con estrictos estándares de seguridad y privacidad. La información se cifra y se almacena de manera segura siguiendo normativas de protección de datos."
    },
    {
      question: "¿En qué idiomas pueden comunicarse los agentes de IA?",
      answer: "Nuestros agentes de IA pueden comunicarse en múltiples idiomas, incluyendo español, inglés, francés, alemán, italiano, portugués, chino y japonés, entre otros."
    }
  ];
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
          >
            <span className="font-medium text-insight-dark">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-insight-green transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-gray-50"
            >
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-insight-dark mb-6">
                Agentes de IA <span className="text-insight-green">Revolucionarios</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Descubra cómo nuestros agentes de inteligencia artificial están transformando la experiencia hotelera, proporcionando asistencia personalizada las 24 horas y elevando la satisfacción de los huéspedes.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#demo"
                  className="px-6 py-3 bg-insight-green text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver demostración
                </motion.a>
                <motion.a
                  href="#contacto"
                  className="px-6 py-3 bg-white text-insight-dark font-semibold rounded-md border border-insight-dark hover:bg-insight-dark hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar información
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png"
                  alt="Agente de IA Insight"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div className="absolute -z-10 top-1/4 left-1/4 w-full h-full bg-insight-green/10 rounded-xl transform -rotate-6"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-insight-dark mb-4">Capacidades Avanzadas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros agentes de IA combinan tecnología de vanguardia con interfaces intuitivas para ofrecer una experiencia excepcional.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Conversación Natural",
                description: "Comunicación fluida y natural que simula una conversación humana, adaptándose al contexto y preferencias del usuario."
              },
              {
                icon: Brain,
                title: "Aprendizaje Continuo",
                description: "Algoritmos que aprenden de cada interacción para mejorar constantemente y personalizar la experiencia."
              },
              {
                icon: Sparkles,
                title: "Personalización",
                description: "Adaptación a las preferencias individuales para ofrecer recomendaciones y respuestas personalizadas."
              },
              {
                icon: Languages,
                title: "Multilingüe",
                description: "Soporte para múltiples idiomas, permitiendo atender a huéspedes internacionales en su lengua materna."
              },
              {
                icon: Lightbulb,
                title: "Resolución Proactiva",
                description: "Anticipación a las necesidades del huésped antes de que surjan problemas, mejorando la satisfacción."
              },
              {
                icon: Zap,
                title: "Respuesta Instantánea",
                description: "Atención inmediata 24/7 sin tiempos de espera, disponible en cualquier momento que el huésped lo necesite."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-insight-green/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="w-12 h-12 bg-insight-green/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-insight-green" />
                </div>
                <h3 className="text-xl font-semibold text-insight-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-insight-dark mb-4">Demostración Interactiva</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vea cómo nuestros agentes de IA interactúan con los huéspedes en escenarios reales.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <DemoConversation />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-insight-dark mb-6">Beneficios Clave</h3>
              
              <div className="space-y-4">
                {[
                  "Respuesta inmediata a consultas de huéspedes 24/7",
                  "Liberación del personal para tareas de mayor valor",
                  "Consistencia en la calidad del servicio",
                  "Reducción de costos operativos",
                  "Mayor satisfacción del huésped demostrada",
                  "Adaptación a las preferencias individuales"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-insight-green" />
                    </div>
                    <p className="ml-3 text-gray-600">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a 
                  href="#contacto" 
                  className="inline-flex items-center px-6 py-3 bg-insight-green text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Solicitar una demo personalizada
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-insight-dark mb-6">
                Integración Perfecta
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros agentes de IA se integran perfectamente con los sistemas existentes de su hotel, incluyendo:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-insight-green/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-insight-green" />
                  </div>
                  <span className="text-gray-700">Sistemas de gestión hotelera (PMS)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-insight-green/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-insight-green" />
                  </div>
                  <span className="text-gray-700">Plataformas de servicios a la habitación</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-insight-green/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-insight-green" />
                  </div>
                  <span className="text-gray-700">Sistemas de entretenimiento y TV</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-insight-green/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-insight-green" />
                  </div>
                  <span className="text-gray-700">Aplicaciones móviles del hotel</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-insight-green/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-insight-green" />
                  </div>
                  <span className="text-gray-700">Sistemas de control domótico de habitaciones</span>
                </li>
              </ul>
              
              <motion.a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 bg-insight-dark text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consultar compatibilidad
              </motion.a>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="/lovable-uploads/d910afa8-d8a5-4cee-83d3-4cd37e6a3997.png"
                alt="Integración de sistemas"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-insight-dark/30 to-transparent rounded-xl flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-insight-dark font-semibold">Solución 100% compatible</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-insight-dark mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros agentes de IA.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-insight-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolucione la experiencia de sus huéspedes
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Implemente hoy mismo nuestros agentes de IA y transforme la interacción con sus clientes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contacto" 
                className="inline-flex items-center px-8 py-4 bg-insight-green text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Zap className="w-6 h-6 mr-2" />
                Contactar ahora
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AIAgents;
