
import { MessageSquare, Hotel, User } from "lucide-react";

const AIAgentsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-insight-dark mb-4">Agentes de Inteligencia Artificial</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros agentes de IA revolucionan la experiencia del huésped, brindando atención personalizada las 24 horas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-insight-green/10 rounded-full flex items-center justify-center mb-5">
              <User className="w-7 h-7 text-insight-green" />
            </div>
            <h3 className="text-xl font-semibold text-insight-dark mb-3">Recepcionistas Virtuales</h3>
            <p className="text-gray-600">
              Nuestros agentes de IA actúan como recepcionistas virtuales disponibles en todo momento, eliminando tiempos de espera y mejorando la satisfacción del huésped.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-insight-green/10 rounded-full flex items-center justify-center mb-5">
              <MessageSquare className="w-7 h-7 text-insight-green" />
            </div>
            <h3 className="text-xl font-semibold text-insight-dark mb-3">Lenguaje Natural</h3>
            <p className="text-gray-600">
              Interacción mediante lenguaje natural que hace que la comunicación sea fluida e intuitiva. Los huéspedes pueden hacer preguntas como lo harían con un miembro del personal.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-insight-green/10 rounded-full flex items-center justify-center mb-5">
              <Hotel className="w-7 h-7 text-insight-green" />
            </div>
            <h3 className="text-xl font-semibold text-insight-dark mb-3">Información Detallada</h3>
            <p className="text-gray-600">
              Acceso inmediato a información completa sobre el hotel: menús de restaurantes, servicio a la habitación, atracciones cercanas y servicios del hotel.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-insight-dark mb-4">Personalización y Eficiencia</h3>
                <p className="text-gray-600 mb-6">
                  Nuestros agentes aprenden las preferencias de cada huésped para ofrecer recomendaciones personalizadas. Además, reducen la carga de trabajo del personal, permitiéndoles enfocarse en interacciones de alto valor.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-block px-6 py-3 bg-insight-green text-white font-semibold rounded-md hover:bg-opacity-90 transition-all"
                >
                  Descubrir más
                </a>
              </div>
            </div>
            <div className="bg-insight-dark p-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png" 
                alt="Agente de IA Insight" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
