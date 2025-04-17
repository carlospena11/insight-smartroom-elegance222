
import { Tv, Cast, Wifi, Map, CloudSun, Plane, Video, CalendarDays, QrCode } from "lucide-react";

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
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-insight-dark/10 p-2 rounded-lg">
        <Icon className="w-6 h-6 text-insight-dark" />
      </div>
      <div>
        <h3 className="font-bold text-insight-dark mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const InterfaceShowcaseSection = () => {
  return (
    <section id="interfaz" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-insight-dark text-center mb-16">Hospitality Smart Room</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-insight-dark mb-8">
              Canal de Información para tus invitados los cuales tendrán a la mano información relevante:
            </h3>
            
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/d910afa8-d8a5-4cee-83d3-4cd37e6a3997.png" 
                alt="Interface Showcase" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            
            <p className="text-center text-xl font-medium text-insight-dark mb-4">
              Tecnología inteligente para experiencias digitales de huéspedes
            </p>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FeatureWithIcon 
                icon={CloudSun}
                title="Pronóstico del tiempo"
                description="Podrás ver las previsiones meteorológicas en tiempo real."
              />
              
              <FeatureWithIcon 
                icon={Plane}
                title="Tablero de estado de vuelos en tiempo real"
                description="Llegadas y salidas, herramienta de seguimiento de vuelos."
              />
              
              <FeatureWithIcon 
                icon={Map}
                title="Lugares turísticos"
                description="Podrás visualizar los lugares de interés, atractivos turísticos de la ciudad."
              />
              
              <FeatureWithIcon 
                icon={Tv}
                title="Televisión Digital"
                description="Podrás acceder a una gran cantidad de canales IPTV, tanto nacionales como internacionales, incluyendo deportes, noticias, canales infantiles y mucho más."
              />
              
              <FeatureWithIcon 
                icon={Video}
                title="Acceso de Video Streaming"
                description="Adicionalmente, podrás acceder a otros servicios de streaming como VIX, Disney+, Prime Video, Paramount+ y Spotify."
              />
              
              <FeatureWithIcon 
                icon={Wifi}
                title="Internet wifi"
                description="Código QR de acceso a internet WIFI del hotel."
              />
              
              <FeatureWithIcon 
                icon={CalendarDays}
                title="Eventos del Hotel"
                description="Cartelera de eventos disponible en pantalla."
              />
              
              <FeatureWithIcon 
                icon={Cast}
                title="Cast"
                description="Disponible para conexión con dispositivos de Huéspedes."
              />
              
              <FeatureWithIcon 
                icon={QrCode}
                title="Codigo QR Sistem"
                description="Sistema de utilización de QR para hipervínculos de información sin riesgo de seguridad."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceShowcaseSection;
