import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Transition from "./Components/Transition/Transition";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";
import { useAnimationControls } from "framer-motion";
// import UnderConstruction from "./Components/UnderConstruction";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";
import useScreenSize from "./hooks/useScreenSize";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import scrollTo from "./utils/scrollTo";

function App() {
  const [transition, setTransition] = useState<boolean>(false);
  const controls = useAnimationControls();
  const { isTablet } = useScreenSize();
  const isTransitioning = useRef(false);

  // Plays the overlay transition while scrolling to the given section id
  const navigateWithTransition = async (sectionId: string) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    try {
      // Mount the overlay and wait a frame so its motion element has
      // subscribed to `controls` before we start animating it.
      flushSync(() => setTransition(true));
      await new Promise((resolve) => requestAnimationFrame(resolve));
      setTimeout(() => scrollTo(sectionId), 60);
      await controls.start({ y: "-600vh", transition: { duration: 1 } });
      await controls.start({ y: "0", transition: { duration: 0 } });
    } finally {
      setTransition(false);
      isTransitioning.current = false;
    }
  };

  return (
    <>
      {transition && <Transition controls={controls} />}
      {/* <UnderConstruction /> */}
      <section id="Header" className="h-[100svh]">
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
      <Footer onNavigate={navigateWithTransition} />
      <ScrollToTop onClick={() => navigateWithTransition("Header")} />
    </>
  );
}

export default App;
