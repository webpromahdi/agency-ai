import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Companies from './components/sections/Companies';
import Services from './components/sections/Services';
import OurWork from './components/sections/OurWork';
import Teams from './components/sections/Teams';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero></Hero>
      <Companies></Companies>
      <Services></Services>
      <OurWork></OurWork>
      <Teams></Teams>
      <Contact></Contact>
      <Footer theme={theme}></Footer>
    </div>
  );
};

export default App;
