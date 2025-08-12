import { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position to hide when at the top
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50688889999?text=Hola%2C%20estoy%20interesado%20en%20los%20servicios%20de%20ServiPlagas%20de%20Costa%20Rica', '_blank');
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${scrollPosition < 200 ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
      {/* Popup */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl mb-4 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-right-5 w-64">
          <div className="bg-emerald-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white mr-3">
                  <img 
                    src="/assets/images/logo.jpg" 
                    alt="ServiPlagas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Servicio al Cliente</h4>
                  <p className="text-xs text-white/80">En línea | Responde rápido</p>
                </div>
              </div>
              <button 
                onClick={toggleOpen}
                className="text-white/80 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              Hola 👋 ¿En qué podemos ayudarle hoy? Contáctenos para una consulta rápida o solicite una inspección gratuita.
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 px-4 flex items-center justify-center transition-colors duration-300"
            >
              <i className="fab fa-whatsapp text-xl mr-2"></i>
              Iniciar Chat
            </button>
          </div>
        </div>
      )}
      
      {/* Button */}
      <button 
        onClick={toggleOpen}
        className="bg-emerald-500 hover:bg-emerald-600 w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Chat por WhatsApp"
      >
        {isOpen ? (
          <i className="fas fa-times text-2xl"></i>
        ) : (
          <i className="fab fa-whatsapp text-3xl"></i>
        )}
        
        {/* Pulse effect */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;