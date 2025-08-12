import { useState } from 'react';

const ServicesData = [
  {
    id: 1,
    icon: "fas fa-bug",
    title: "Control de Insectos",
    description: "Eliminamos y prevenimos infestaciones de cucarachas, hormigas, mosquitos, chinches y otros insectos con métodos efectivos y seguros.",
    image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80"
  },
  {
    id: 2,
    icon: "fas fa-mouse",
    title: "Control de Roedores",
    description: "Implementamos estrategias efectivas para eliminar ratas y ratones, garantizando que no vuelvan a infestar su propiedad.",
    image: "/images/RodentControl.jpg"
  },
  {
    id: 3,
    icon: "fas fa-spider",
    title: "Control de Arácnidos",
    description: "Eliminación segura de arañas, escorpiones y otros arácnidos que pueden representar peligros para su familia o clientes.",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
  },
  {
    id: 4,
    icon: "fas fa-seedling",
    title: "Fumigación Ecológica",
    description: "Utilizamos productos biodegradables y técnicas respetuosas con el medio ambiente que son efectivas contra las plagas pero seguras para su familia y mascotas.",
    image: "https://images.unsplash.com/photo-1635364734236-233060cffa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    id: 5,
    icon: "fas fa-clipboard-check",
    title: "Inspecciones Preventivas",
    description: "Servicios de inspección regular para identificar y solucionar problemas potenciales de plagas antes de que se conviertan en infestaciones graves.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80"
  },
  {
    id: 6,
    icon: "fas fa-building",
    title: "Soluciones Comerciales",
    description: "Programas personalizados de manejo de plagas para negocios, restaurantes, hoteles e instalaciones industriales que cumplen con las normativas sanitarias.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  }
];

const ServiceCard = ({ service, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
      onClick={() => onClick(service)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-white font-['Montserrat'] font-semibold text-xl mb-2">{service.title}</h3>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <i className={`${service.icon} text-xl`}></i>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
        <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center text-sm">
          Saber más <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-64 relative">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30 flex items-end">
            <div className="p-8">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg mr-4">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                <h2 className="text-white font-['Montserrat'] font-bold text-2xl">{service.title}</h2>
              </div>
            </div>
          </div>
          <button 
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            onClick={onClose}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-8">
          <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-gray-800">Descripción del servicio</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
          
          <h3 className="font-['Montserrat'] font-semibold text-xl mb-4 text-gray-800">¿Cómo funciona?</h3>
          <ol className="list-decimal pl-5 space-y-3 mb-6">
            <li className="text-gray-600">
              <span className="font-medium text-gray-800">Inspección:</span> Realizamos una evaluación completa para identificar la plaga y su origen.
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-800">Plan personalizado:</span> Desarrollamos una estrategia adaptada a su situación específica.
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-800">Tratamiento:</span> Aplicamos soluciones efectivas utilizando productos de alta calidad.
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-800">Seguimiento:</span> Verificamos los resultados y realizamos ajustes si es necesario.
            </li>
            <li className="text-gray-600">
              <span className="font-medium text-gray-800">Prevención:</span> Ofrecemos recomendaciones para prevenir futuras infestaciones.
            </li>
          </ol>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://wa.me/50688889999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg text-center flex items-center justify-center"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Consultar por WhatsApp
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onClose(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-gray-800 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales y efectivas para todo tipo de plagas, 
            adaptadas a las necesidades específicas de cada cliente y situación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              onClick={openModal}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-950 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30"
          >
            Solicitar una inspección gratuita
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
      
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Services;