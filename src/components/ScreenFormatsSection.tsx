
const ScreenFormatsSection = () => {
  return (
    <section id="formatos" className="py-12 bg-insight-dark text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Formatos adaptados a las necesidades del hotel</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Nuestro sistema se adapta a cualquier tipo de pantalla y formato, brindando una experiencia consistente en todos los dispositivos.
          </p>
        </div>
        
        <div className="relative">
          <img 
            src="/lovable-uploads/8267491d-9223-4994-8a4b-68fe754c774d.png" 
            alt="Diferentes formatos de pantalla del sistema Hospitality" 
            className="w-full rounded-xl shadow-2xl"
          />
          
          <div className="absolute top-4 left-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
            Interfaces personalizables
          </div>
          
          <div className="absolute bottom-4 right-4 bg-insight-green/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
            Compatibilidad multi-dispositivo
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Diseño Responsivo</h3>
            <p className="text-gray-300 text-sm">
              Nuestras interfaces se adaptan automáticamente a cualquier tamaño de pantalla.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Múltiples Layouts</h3>
            <p className="text-gray-300 text-sm">
              Ofrecemos diferentes layouts que se pueden personalizar según las necesidades específicas de cada hotel.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Personalización Total</h3>
            <p className="text-gray-300 text-sm">
              Cada elemento de la interfaz puede ser personalizado para reflejar la imagen de marca del hotel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenFormatsSection;
