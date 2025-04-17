
import { Monitor, Smartphone, Tv, Cast, QrCode, Calendar, Info, BarChart4 } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-insight-green/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-insight-green" />
      </div>
      <h3 className="text-xl font-semibold text-insight-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Sistema Centralizado de Información",
      description: "Toda la información relevante en un único sistema, permitiendo un acceso fácil y rápido tanto para los huéspedes como para el personal del hotel."
    },
    {
      icon: Smartphone,
      title: "Personalización Completa del Sistema",
      description: "Desde la interfaz de usuario hasta las funcionalidades disponibles, garantizando una experiencia única y alineada con la marca del cliente."
    },
    {
      icon: BarChart4,
      title: "Manejo de Estadísticas y Análisis de Datos",
      description: "Herramientas de análisis avanzadas que permiten monitorear el rendimiento del sistema y obtener insights clave sobre el comportamiento de los huéspedes."
    },
    {
      icon: QrCode,
      title: "Acceso a Servicios con Lectores de QR",
      description: "Facilitamos el acceso a servicios y funcionalidades mediante códigos QR, permitiendo a los huéspedes interactuar de manera rápida y sencilla."
    },
    {
      icon: Cast,
      title: "Acceso a Plataformas Digitales",
      description: "Acceso a una plataforma digital centralizada, diseñada para ofrecer una experiencia interactiva y eficiente tanto para huéspedes como para el personal."
    },
    {
      icon: Info,
      title: "Publicidad directa del Hotel",
      description: "Permite al hotel promocionar sus servicios, ofertas especiales y paquetes exclusivos directamente a los huéspedes."
    },
    {
      icon: Calendar,
      title: "Información de Eventos",
      description: "Mantén a los huéspedes informados sobre eventos y actividades dentro del hotel o en la zona, asegurando una experiencia completa."
    },
    {
      icon: Tv,
      title: "Pantallas de Publicidad en Diversos Puntos",
      description: "Pantallas en áreas estratégicas del hotel para promover eventos, servicios o publicidad personalizada, asegurando que la información llegue a la audiencia adecuada."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-insight-dark mb-4">Principales Características del Sistema</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema Hospitality Smartroom está diseñado para optimizar la operación del hotel y mejorar la experiencia del huésped.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-insight-dark mb-4">Tecnología inteligente para experiencias digitales de huéspedes</h3>
                <p className="text-gray-600 mb-6">
                  Este conjunto de características está diseñado para optimizar la operación del hotel, mejorar la experiencia del huésped y proporcionar herramientas efectivas de promoción y gestión para el sector Hospitality.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-block px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all"
                >
                  Solicitar información
                </a>
              </div>
            </div>
            <div className="bg-insight-dark">
              <img 
                src="/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png" 
                alt="Smartroom Interface" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
