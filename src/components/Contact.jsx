import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "El nombre es requerido";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email inválido";
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "El teléfono es requerido";
      isValid = false;
    } else if (!/^\d{8,10}$/.test(formData.phone.replace(/[()-\s]/g, ''))) {
      tempErrors.phone = "Teléfono inválido";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "El mensaje es requerido";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "El mensaje es muy corto";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-gray-800 mb-4">Contáctenos</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tiene problemas con plagas? ¡ServiPlagas de Costa Rica está aquí para ayudarle! Complete el formulario y un especialista 
            se pondrá en contacto con usted a la brevedad.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-6 md:p-8">
            {submitSuccess ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-500"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-green-700 font-medium">Mensaje enviado con éxito</p>
                    <p className="text-green-600 text-sm mt-1">Nos pondremos en contacto con usted lo antes posible.</p>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300`}
                    placeholder="Ingrese su nombre"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300`}
                    placeholder="8888-9999"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300 bg-white"
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="presupuesto">Solicitar presupuesto</option>
                    <option value="info">Información general</option>
                    <option value="emergencia">Emergencia de plagas</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              
              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-300`}
                  placeholder="Describa su situación o consulta"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-emerald-500/30'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Dirección</h4>
                    <p>Calle Principal #123, San José, Costa Rica</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Teléfono</h4>
                    <p>+506 8888-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Email</h4>
                    <p>info@serviplagas.cr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Horario de Atención</h4>
                    <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p>Sábados: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-white/90 mb-3">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125759.41797326528!2d-84.17509393214474!3d9.93562873247897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1650564214506!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;