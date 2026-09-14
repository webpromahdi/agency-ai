import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Companies from './components/sections/Companies';
import Services from './components/sections/Services';
import OurWork from './components/sections/OurWork';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Teams from './components/sections/Teams';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative overflow-x-hidden w-full max-w-full selection:bg-primary selection:text-white min-h-screen'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Stats />
      <Companies />
      <Services />
      <OurWork />
      <Pricing />
      <Testimonials />
      <Teams />
      <FAQ />
      <Contact />
      <Footer theme={theme} />
      <ScrollToTop />
    </div>
  );
};

export default App;
