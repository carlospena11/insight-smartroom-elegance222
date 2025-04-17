
const FeaturePoint = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-center p-4">
      <h3 className="font-bold text-insight-dark text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const GuestExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/lovable-uploads/4827b0f3-267c-4c28-b450-53935fa9aeca.png" 
              alt="Guest Experience Interface" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-insight-dark mb-6">Guest Experience</h2>
            <h3 className="text-2xl font-semibold text-insight-dark mb-8">Hospitality Smartroom</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <FeaturePoint 
                title="Solución integral" 
                description="Una solución integral que implementa todos los procesos de un operador de IPTV/OTT."
              />
              
              <FeaturePoint 
                title="Experiencia personalizada" 
                description="Una experiencia de entretenimiento personalizada, como si el huésped estuviera en su propia casa."
              />
              
              <FeaturePoint 
                title="Integración con PMS" 
                description="Integración con PMS para agilizar la personalización de la gestión de huéspedes."
              />
              
              <FeaturePoint 
                title="Personalización de marca" 
                description="Personalización según los estándares de la marca del hotel."
              />
              
              <FeaturePoint 
                title="Acceso sin emparejamiento" 
                description="Facilidad de acceso a todo el contenido sin necesidad de emparejar los dispositivos del huésped."
              />
              
              <FeaturePoint 
                title="Aumento de ingresos" 
                description="Promueve los servicios del hotel y aumenta los ingresos complementarios."
              />
            </div>
            
            <a 
              href="#contacto" 
              className="inline-block px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
            >
              Solicitar demostración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestExperienceSection;
