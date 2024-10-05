import { TypeAnimation } from "react-type-animation";
import Line from "./Line";

function HeroSection() {
  return (
    <>
      <section className="self-center pt-20 flex text-foreground  min-w-full  mx-auto flex-col min-h-[65dvh] md:min-h-[70dvh] gap-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 pt-3 justify-between">
          <div className="md:col-span-7 sm:col-span-12 place-self-center">
            <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl pt-4">
              <span>Hello, I'm </span>
              <br />
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Giannis",
                    1000,
                    "A Front-End Developer",
                    1000,
                    "A UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <section className="text-lg lg:text-2xl py-4">
              <div>
                I'm passionate about cutting-edge, pixel-perfect interfaces that
                catch your eye
              </div>
              <div>and User Experience that just feel right!</div>
            </section>
            <div className="flex gap-unit-sm"></div>
          </div>
        </div>
      </section>
      <section className="md:min-h-[10dvh] min-w-screen">
        <Line />
      </section>
    </>
  );
}

export default HeroSection;
