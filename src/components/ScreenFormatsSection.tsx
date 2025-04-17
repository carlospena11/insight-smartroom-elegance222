
const ScreenFormatsSection = () => {
  return (
    <section id="formatos" className="py-20 bg-insight-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Formatos adaptados a las necesidades del hotel</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Diseño Responsivo</h3>
            <p className="text-gray-300">
              Nuestras interfaces se adaptan automáticamente a cualquier tamaño de pantalla, desde pequeños monitores hasta grandes pantallas de hotel.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Múltiples Layouts</h3>
            <p className="text-gray-300">
              Ofrecemos diferentes layouts que se pueden personalizar según las necesidades específicas de cada hotel y tipo de habitación.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Personalización Total</h3>
            <p className="text-gray-300">
              Cada elemento de la interfaz puede ser personalizado para reflejar la imagen de marca y el estilo visual del hotel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenFormatsSection;
