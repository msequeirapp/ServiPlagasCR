import { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "Propietario de Restaurante",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "EcoPlagas transformó completamente mi negocio. Llevábamos tiempo lidiando con problemas de plagas que afectaban nuestra reputación. Su equipo profesional implementó un plan integral que eliminó el problema de raíz. ¡Ahora podemos operar con tranquilidad!"
  },
  {
    id: 2,
    name: "María González",
    position: "Madre de familia",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Como madre, mi prioridad es la seguridad de mis hijos. EcoPlagas entendió perfectamente mi preocupación y utilizó productos completamente seguros para mi familia. El resultado fue excelente y el servicio de seguimiento demuestra su compromiso con la calidad."
  },
  {
    id: 3,
    name: "José Fernández",
    position: "Gerente de Hotel",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    stars: 5,
    text: "En el sector hotelero, cualquier problema con plagas puede ser devastador. El equipo de EcoPlagas implementó un sistema preventivo que ha mantenido nuestras instalaciones impecables. Su discreción y profesionalidad son dignas de elogio."
  },
  {
    id: 4,
    name: "Laura Méndez",
    position: "Administradora de Edificios",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    stars: 4,
    text: "Gestiono varios edificios residenciales y encontrar un servicio confiable de control de plagas era complicado hasta que conocimos a EcoPlagas. Su sistema de prevención ha mejorado significativamente la calidad de vida de nuestros residentes."
  },
  {
    id: 5,
    name: "Roberto Sánchez",
    position: "Director de Colegio",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    stars: 5,
    text: "La seguridad de nuestros estudiantes es primordial. EcoPlagas nos ayudó con un problema persistente de hormigas y lo hizo durante el fin de semana para no interrumpir las clases. Apreciamos enormemente su flexibilidad y eficacia."
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 md:p-8 shadow-lg transition-all duration-700 transform ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
      }`}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-emerald-500"
        />
        <div>
          <h4 className="font-['Montserrat'] font-semibold text-lg text-gray-800">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.position}</p>
        </div>
      </div>
      
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star ${i < testimonial.stars ? 'text-yellow-500' : 'text-gray-300'} mr-1`}
          ></i>
        ))}
      </div>
      
      <blockquote className="italic text-gray-600 leading-relaxed">
        "{testimonial.text}"
      </blockquote>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  
  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonialsData.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay]);
  
  // Pause autoplay when user interacts
  const handleNavigation = (index) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
    
    // Resume autoplay after 10 seconds of inactivity
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor indicador de calidad.
            Estas son algunas experiencias de quienes han confiado en nuestros servicios.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="mb-12">
            <TestimonialCard testimonial={testimonialsData[currentIndex]} isActive={true} />
          </div>
          
          {/* Testimonial navigation dots */}
          <div className="flex justify-center space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-emerald-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300"
            onClick={() => handleNavigation((currentIndex - 1 + testimonialsData.length) % testimonialsData.length)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300"
            onClick={() => handleNavigation((currentIndex + 1) % testimonialsData.length)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;