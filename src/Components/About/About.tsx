import Line from "./Components/Line";
import MaskCursor from "./Components/MaskCursor";

function About() {
  return (
    <>
      <section className="min-h-[20dvh] min-w-screen">
        <Line />
      </section>
      <section className="min-h-[80dvh] w-screen">
        <MaskCursor />
      </section>
    </>
  );
}

export default About;
