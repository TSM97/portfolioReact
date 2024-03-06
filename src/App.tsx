import About from "./Components/About/About";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <FloatingShapes />
      <HeroSection />
      <About />
      <Skills />
    </>
  );
}

export default App;
