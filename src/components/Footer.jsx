import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeError, setSubscribeError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      setSubscribeError('Por favor ingrese un email');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubscribeError('Email inválido');
      return;
    }
    
    // Simulate subscription
    setSubscribeError('');
    setSubscribeSuccess(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubscribeSuccess(false);
    }, 3000);
  };
  
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-emerald-400">Eco</span>
              <span className="text-white">Plagas</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Somos especialistas en control de plagas con soluciones efectivas y 
              respetuosas con el medio ambiente para hogares y negocios.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-400"></i> Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-400"></i> Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-400"></i> Servicios
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-400"></i> Testimonios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-400"></i> Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-bug text-xs mr-2 text-emerald-400"></i> Control de Insectos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-mouse text-xs mr-2 text-emerald-400"></i> Control de Roedores
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-spider text-xs mr-2 text-emerald-400"></i> Control de Arácnidos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-seedling text-xs mr-2 text-emerald-400"></i> Fumigación Ecológica
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <i className="fas fa-clipboard-check text-xs mr-2 text-emerald-400"></i> Inspecciones Preventivas
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Boletín Informativo</h3>
            <p className="text-gray-300 mb-4">
              Suscríbase para recibir noticias, consejos y promociones especiales.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="relative mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribeError('');
                  }}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Su correo electrónico"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 transition-colors duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              {subscribeError && <p className="text-red-400 text-sm mt-1">{subscribeError}</p>}
              {subscribeSuccess && (
                <p className="text-emerald-400 text-sm mt-1">¡Gracias por suscribirse!</p>
              )}
            </form>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                <i className="fas fa-shield-alt mr-2 text-emerald-400"></i> Su información está segura con nosotros
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} EcoPlagas. Todos los derechos reservados.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Términos de Servicio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;