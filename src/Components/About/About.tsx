import MaskCursor from "./Components/MaskCursor";

function About() {
  return (
    <>
      <meta
        name="AboutSection"
        content="This is the About section that has some basic information about me and an mask animation using framer motion"
      />
      <section className="min-h-[80dvh] w-screen">
        <MaskCursor />
      </section>
    </>
  );
}

export default About;
