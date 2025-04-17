
const CompatibilitySection = () => {
  return (
    <section id="compatibilidad" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-insight-dark mb-4">Compatibilidad del Sistema Hospitality</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema se integra perfectamente con televisores mediante la instalación de un dispositivo compatible con Android TV 14 o superior.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                El sistema Hospitality de NeuraTech está diseñado para integrarse perfectamente con televisores mediante la instalación de un dispositivo compatible con Android TV 14 o superior. Este dispositivo transforma cualquier televisor en un Smart TV completamente funcional, ofreciendo todas las características modernas que los huéspedes esperan, pero con un enfoque 100% personalizado y adaptado a las necesidades del hotel.
              </p>
              
              <h3 className="text-xl font-semibold text-insight-dark mt-8 mb-4">Principales Ventajas:</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-insight-dark">1. Funcionalidad de Smart TV</h4>
                <p className="text-gray-700">
                  Los huéspedes podrán disfrutar de todas las características de un Smart TV, como acceso a aplicaciones, contenido multimedia y navegación fluida, con la diferencia de que la experiencia está completamente adaptada al entorno del hotel.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-insight-dark">2. Personalización y Customización Exclusiva</h4>
                <p className="text-gray-700">
                  Todo el sistema está diseñado para reflejar la identidad y los servicios del hotel. Desde la interfaz de usuario hasta el contenido disponible, cada detalle es ajustado para garantizar una experiencia única y alineada con la marca del establecimiento.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-insight-dark">3. Control de Contenido Configurado</h4>
                <p className="text-gray-700">
                  Los huéspedes tendrán acceso únicamente al contenido previamente configurado por el hotel. Esto incluye servicios y aplicaciones seleccionadas, contenido promocional, información de eventos y entretenimiento aprobado, asegurando una experiencia segura y controlada.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-insight-dark">4. Interacción Segura y Controlada</h4>
                <p className="text-gray-700">
                  Este enfoque limita el acceso a configuraciones sensibles o aplicaciones externas, garantizando que el sistema se utilice exclusivamente como se ha planeado, manteniendo la seguridad y el control en manos del hotel.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-md">
              <img 
                src="/lovable-uploads/27a90f52-eb00-4ffd-baf1-e4fe55ae9d2a.png" 
                alt="Dispositivo SmartRoom y control" 
                className="mx-auto mb-8 rounded-lg"
              />
              
              <div className="text-center mb-6 py-4 border-t border-b border-gray-200">
                <p className="text-sm text-gray-500">Modelo referencial puede variar en base a proyecto</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="LG" className="h-10 object-contain" />
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="Google TV" className="h-10 object-contain" />
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="Cast" className="h-10 object-contain" />
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="Android TV" className="h-10 object-contain" />
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="TCL" className="h-10 object-contain" />
                <img src="/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png" alt="Sony" className="h-10 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
