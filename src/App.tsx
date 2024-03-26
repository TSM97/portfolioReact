import About from "./Components/About/About";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <FloatingShapes />
      <HeroSection />
      <section id="About">
        <About />
      </section>
      <Skills />
      <Experience />
    </>
  );
}

export default App;
