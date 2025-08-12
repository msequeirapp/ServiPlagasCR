import { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-['Open_Sans'] text-gray-800">
      <Header scrollY={scrollY} />
      <main>
        <AboutUs />
        <MissionVision />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;