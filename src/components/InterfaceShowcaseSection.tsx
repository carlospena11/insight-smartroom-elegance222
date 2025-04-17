
import { Tv, Cast, Wifi, Map, CloudSun, Plane, Video, CalendarDays, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const FeatureWithIcon = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <motion.div 
      className="flex items-start gap-4 mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ 
        x: 5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.div 
        className="bg-insight-dark/10 p-2 rounded-lg"
        whileHover={{ 
          backgroundColor: "rgba(140, 209, 79, 0.2)",
          rotate: [0, 5, 0],
          transition: { duration: 0.3 }
        }}
      >
        <Icon className="w-6 h-6 text-insight-dark" />
      </motion.div>
      <div>
        <h3 className="font-bold text-insight-dark mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const InterfaceShowcaseSection = () => {
  const sectionRef = useRef(null);
  
  const features = [
    {
      icon: CloudSun,
      title: "Pronóstico del tiempo",
      description: "Podrás ver las previsiones meteorológicas en tiempo real."
    },
    {
      icon: Plane,
      title: "Tablero de estado de vuelos en tiempo real",
      description: "Llegadas y salidas, herramienta de seguimiento de vuelos."
    },
    {
      icon: Map,
      title: "Lugares turísticos",
      description: "Podrás visualizar los lugares de interés, atractivos turísticos de la ciudad."
    },
    {
      icon: Tv,
      title: "Televisión Digital",
      description: "Podrás acceder a una gran cantidad de canales IPTV, tanto nacionales como internacionales, incluyendo deportes, noticias, canales infantiles y mucho más."
    },
    {
      icon: Video,
      title: "Acceso de Video Streaming",
      description: "Adicionalmente, podrás acceder a otros servicios de streaming como VIX, Disney+, Prime Video, Paramount+ y Spotify."
    },
    {
      icon: Wifi,
      title: "Internet wifi",
      description: "Código QR de acceso a internet WIFI del hotel."
    },
    {
      icon: CalendarDays,
      title: "Eventos del Hotel",
      description: "Cartelera de eventos disponible en pantalla."
    },
    {
      icon: Cast,
      title: "Cast",
      description: "Disponible para conexión con dispositivos de Huéspedes."
    },
    {
      icon: QrCode,
      title: "Codigo QR Sistem",
      description: "Sistema de utilización de QR para hipervínculos de información sin riesgo de seguridad."
    }
  ];

  return (
    <motion.section 
      id="interfaz" 
      className="py-20 bg-gray-50 overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-insight-dark text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          Hospitality Smart Room
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3 
              className="text-2xl font-semibold text-insight-dark mb-8"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Canal de Información para tus invitados los cuales tendrán a la mano información relevante:
            </motion.h3>
            
            <motion.div 
              className="relative mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <img 
                src="/lovable-uploads/d910afa8-d8a5-4cee-83d3-4cd37e6a3997.png" 
                alt="Interface Showcase" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent"></div>
            </motion.div>
            
            <motion.p 
              className="text-center text-xl font-medium text-insight-dark mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Tecnología inteligente para experiencias digitales de huéspedes
            </motion.p>
          </div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              transition={{ duration: 0.5 }}
            >
              {features.map((feature, index) => (
                <FeatureWithIcon 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InterfaceShowcaseSection;
