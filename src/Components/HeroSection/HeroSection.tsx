import { Button } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="self-center pt-20 flex text-foreground bg-background min-w-screen mx-auto flex-col h-[60dvh] gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-3 justify-between">
        <div className="col-span-7 place-self-center">
          <h1 className="font-extrabold text-4xl lg:text-6xl pt-4">
            <span>Hello, I'm </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "John",
                1000,
                "Front-End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <section className="text-lg lg:text-xl py-4">
            <div>
              I'm passionate about cutting-edge, pixel-perfect interfaces that
              catch your eye
            </div>
            <div>and User Experience that just feel right!</div>
          </section>
          <div className="flex gap-unit-sm">
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              className="font-semibold"
            >
              Hire me
            </Button>
            <Button
              color="primary"
              variant="bordered"
              size="lg"
              className="font-semibold border-4"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;