import About from "./Components/About/About";
import FloatingShapes from "./Components/FloatingShapes/FloatingShapes";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <FloatingShapes />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
