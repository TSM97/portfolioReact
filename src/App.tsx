import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Transition from "./Components/Transition/Transition";
import { useState } from "react";
import "./App.css";
import { useAnimationControls } from "framer-motion";
import UnderConstruction from "./Components/UnderConstruction";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";
import useScreenSize from "./hooks/useScreenSize";

function App() {
  const [transition, setTransition] = useState<boolean>(false);
  const controls = useAnimationControls();
  const { isTablet } = useScreenSize();

  return (
    <>
      {transition && <Transition controls={controls} />}
      <UnderConstruction />
      <section id="Header" className="h-[100dvh]">
        <NavBar />
        {isTablet ? null : <FloatingShapes />}
        <HeroSection />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <Footer setTransition={setTransition} controls={controls} />
    </>
  );
}

export default App;
