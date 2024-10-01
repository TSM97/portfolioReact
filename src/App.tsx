import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Transition from "./Components/Transition/Transition";

import "./App.css";
import { useAnimationControls } from "framer-motion";
import UnderConstruction from "./Components/UnderConstruction";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";

function App() {
  const controls = useAnimationControls();

  return (
    <>
      <Transition controls={controls} />
      <UnderConstruction />
      <section id="Header" className="h-[100dvh]">
        <NavBar />
        <FloatingShapes />
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
      <Footer controls={controls} />
    </>
  );
}

export default App;
