import About from './Components/About/About';
import FloatingShapes from './Components/FloatingShapes/FloatingShapes';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <section id='Header' className='h-[100dvh]'>
        <NavBar />
        <FloatingShapes />
        <HeroSection />
      </section>
      <section id='About'>
        <About />
      </section>
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
