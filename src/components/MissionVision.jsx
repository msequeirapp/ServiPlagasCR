import { useEffect, useRef } from 'react';

const MissionVision = () => {
  const cardsRef = useRef([]);

  // Add animation when cards enter viewport
  useEffect(() => {
    const cards = cardsRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-gray-800 mb-4">Nuestra Filosofía</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro enfoque está centrado en brindar soluciones efectivas y sustentables,
            priorizando la seguridad de nuestros clientes y el cuidado del medio ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div 
            ref={el => cardsRef.current[0] = el} 
            className="bg-white rounded-xl p-8 shadow-lg transition-all duration-700 opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-200 transition-colors duration-300">
              <i className="fas fa-bullseye text-2xl text-emerald-500"></i>
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-xl text-center mb-4">Misión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Brindar soluciones efectivas e innovadoras para el control de plagas,
              protegiendo la salud de las familias y empresas con métodos seguros y 
              amigables con el medio ambiente.
            </p>
          </div>
          
          {/* Vision Card */}
          <div 
            ref={el => cardsRef.current[1] = el} 
            className="bg-white rounded-xl p-8 shadow-lg transition-all duration-700 opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
              <i className="fas fa-binoculars text-2xl text-blue-900"></i>
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-xl text-center mb-4">Visión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Ser la empresa líder en control de plagas reconocida por nuestro
              compromiso con la excelencia, la innovación y la sustentabilidad,
              mejorando la calidad de vida en cada espacio que protegemos.
            </p>
          </div>
          
          {/* Values Card */}
          <div 
            ref={el => cardsRef.current[2] = el} 
            className="bg-white rounded-xl p-8 shadow-lg transition-all duration-700 opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors duration-300">
              <i className="fas fa-award text-2xl text-yellow-600"></i>
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-xl text-center mb-4">Valores</h3>
            <ul className="text-gray-600 leading-relaxed flex flex-col gap-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Responsabilidad ambiental</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Profesionalismo y ética</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Compromiso con resultados</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Innovación constante</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                <span>Orientación al cliente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;