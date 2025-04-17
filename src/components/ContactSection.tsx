
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-insight-dark mb-2">Contáctanos</h2>
          <p className="text-gray-600">¿Interesado en transformar la experiencia de tus huéspedes?</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="bg-insight-dark text-white p-6">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-insight-green" />
                  <span>info@insight-smartroom.com</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-insight-green" />
                  <span>+123 456 7890</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-insight-green" />
                  <span>Avenida Principal 123, Ciudad</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-2 p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                
                <button className="px-5 py-2 bg-insight-green text-white font-medium rounded-md hover:bg-opacity-90 transition-all">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
