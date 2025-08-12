import { useEffect, useState, useRef } from 'react';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const sectionRef = useRef(null);

  // Animation for stats counters
  useEffect(() => {
    if (!animate) return;
    
    const yearsTarget = 12;
    const clientsTarget = 500;
    const citiesTarget = 25;
    const duration = 2000;
    const frameRate = 20;
    const frames = duration / frameRate;
    
    let yearsFrame = 0;
    let clientsFrame = 0;
    let citiesFrame = 0;
    
    const yearsIncrement = yearsTarget / frames;
    const clientsIncrement = clientsTarget / frames;
    const citiesIncrement = citiesTarget / frames;
    
    const interval = setInterval(() => {
      if (yearsFrame < frames) {
        setYearsCount(Math.ceil(yearsIncrement * yearsFrame));
        yearsFrame++;
      }
      
      if (clientsFrame < frames) {
        setClientsCount(Math.ceil(clientsIncrement * clientsFrame));
        clientsFrame++;
      }
      
      if (citiesFrame < frames) {
        setCitiesCount(Math.ceil(citiesIncrement * citiesFrame));
        citiesFrame++;
      }
      
      if (yearsFrame >= frames && clientsFrame >= frames && citiesFrame >= frames) {
        clearInterval(interval);
        setYearsCount(yearsTarget);
        setClientsCount(clientsTarget);
        setCitiesCount(citiesTarget);
      }
    }, frameRate);
    
    return () => clearInterval(interval);
  }, [animate]);

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-gray-800 mb-4">¿Quiénes Somos?</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-emerald-500 absolute top-6 -left-6 w-full h-full rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Equipo de profesionales de control de plagas" 
              className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-xl relative z-10"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-['Montserrat'] font-semibold text-2xl text-gray-800 mb-4">Expertos en control y prevención de plagas</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En <span className="font-semibold text-emerald-600">ServiPlagas de Costa Rica</span>, nos dedicamos a proteger su hogar y negocio de plagas no deseadas utilizando técnicas efectivas y respetuosas con el medio ambiente.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo de profesionales altamente capacitados combina conocimientos técnicos con un servicio personalizado, garantizando soluciones duraderas para todo tipo de problemas de plagas. Entendemos que cada situación es única, por lo que desarrollamos planes de tratamiento adaptados a sus necesidades específicas.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-between">
              <div className="text-center px-4 mb-6">
                <div className="text-4xl font-['Montserrat'] font-bold text-emerald-500 mb-2">{yearsCount}+</div>
                <div className="text-gray-500">Años de experiencia</div>
              </div>
              <div className="text-center px-4 mb-6">
                <div className="text-4xl font-['Montserrat'] font-bold text-emerald-500 mb-2">{clientsCount}+</div>
                <div className="text-gray-500">Clientes satisfechos</div>
              </div>
              <div className="text-center px-4 mb-6">
                <div className="text-4xl font-['Montserrat'] font-bold text-emerald-500 mb-2">{citiesCount}+</div>
                <div className="text-gray-500">Ciudades atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;