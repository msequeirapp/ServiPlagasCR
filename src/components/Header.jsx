import { useState, useEffect } from 'react';

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/assets/images/logo.jpg" 
              alt="ServiPlagas de Costa Rica" 
              className="h-12 mr-2"
            />
            <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
              scrollY > 50 ? 'text-blue-900' : 'text-white'
            }`}>
              ServiPlagas
              <span className="block text-xs md:text-sm font-medium">de Costa Rica</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`}>Inicio</a>
            <a href="#about" className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`}>Nosotros</a>
            <a href="#services" className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`}>Servicios</a>
            <a href="#testimonials" className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`}>Testimonios</a>
            <a href="#contact" className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`}>Contacto</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            id="menu-toggle"
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors duration-300">Inicio</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors duration-300">Nosotros</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors duration-300">Servicios</a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors duration-300">Testimonios</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors duration-300">Contacto</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-start">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-700/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-xl">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Protegemos su hogar y negocio
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Soluciones efectivas contra plagas con técnicas respetuosas con el medio ambiente y su familia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/50688889999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 text-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Contactar por WhatsApp
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-xl transition-all duration-300 text-center"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;