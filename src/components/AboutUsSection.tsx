
const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/1eaa6c24-f8b6-43b8-bcdd-0ceab0cfd71a.png" 
              alt="Sistema Hospitality en funcionamiento" 
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-insight-dark mb-6">Sobre Insight</h2>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                En insight., somos una empresa líder en el desarrollo de soluciones tecnológicas, publicidad y mercadeo diseñadas para el sector de Hospitality. Con más de 10 años de experiencia, nos especializamos en crear aplicaciones innovadoras, sistemas de conectividad avanzados y estrategias de marketing que transforman la experiencia de huéspedes y potencian el crecimiento de empresas y hoteles.
              </p>
              
              <p className="text-gray-700 mb-6">
                Nuestra misión es ofrecer herramientas y servicios que simplifiquen la gestión operativa, optimicen la interacción con los clientes y posicionen a nuestros aliados estratégicos como líderes en su mercado. Desde plataformas digitales personalizadas hasta campañas publicitarias efectivas, proporcionamos soluciones integrales que se adaptan a las necesidades específicas de cada negocio.
              </p>
              
              <p className="text-gray-700 mb-6">
                En insight., combinamos nuestra pasión por la innovación, un profundo conocimiento del sector y la creatividad para desarrollar estrategias que marcan la diferencia. Nos enfocamos en construir relaciones duraderas y generar resultados que impulsen la satisfacción de los clientes y el crecimiento empresarial.
              </p>
              
              <p className="text-gray-700">
                Estamos dedicados a conectar experiencias, potenciar marcas y garantizar que cada interacción con nuestros servicios ofrezca un valor tangible, asegurando una experiencia memorable desde la creación de la estrategia hasta su implementación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
