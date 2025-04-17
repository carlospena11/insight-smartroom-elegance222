
const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/1eaa6c24-f8b6-43b8-bcdd-0ceab0cfd71a.png" 
              alt="Sistema Hospitality en funcionamiento" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-insight-dark mb-6">Sobre Insight</h2>
            
            <p className="text-gray-600 mb-4">
              En insight., somos líderes en el desarrollo de soluciones tecnológicas avanzadas para el sector Hospitality. Con más de 10 años de experiencia, nos especializamos en crear aplicaciones innovadoras y sistemas de conectividad que transforman la experiencia de los huéspedes.
            </p>
            
            <p className="text-gray-600">
              Nuestra misión es proporcionar herramientas inteligentes que simplifiquen la gestión operativa, optimicen la interacción con los clientes y posicionen a nuestros aliados como referentes en su mercado. Combinamos innovación, conocimiento del sector y creatividad para desarrollar soluciones que marcan la diferencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
