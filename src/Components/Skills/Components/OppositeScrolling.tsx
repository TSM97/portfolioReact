import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cards } from "../data/card";
import SkillCard from "./skillCards";

// * Should try fix smoothness of scrollig - Correction

const OppositeScrolling = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-250vh", "250vh"]);

  console.log("y: " + y.get());

  return (
    <section ref={targetRef} className="h-[350dvh] bg-background">
      <section className="flex justify-center gap-x-2">
        <div>
          {cards.map((card) => {
            return <SkillCard card={card} key={card.id} />;
          })}
        </div>
        <div className="overflow-y-hidden w-[40dvw] sticky top-0">
          <motion.div
            className="absolute h-screen left-0 right-0"
            style={{ top: y }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {cards.map((card) => {
              return <SkillCard card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default OppositeScrolling;
