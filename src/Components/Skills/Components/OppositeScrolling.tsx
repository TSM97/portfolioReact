import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { dynamicCards, textCards } from "../data/dynamicCards";
import SkillCard from "./skillCards";
import SkillCardText from "./skillCardText";

// * Should try fix smoothness of scrolling - Correction

const OppositeScrolling = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-400dvh", "400dvh"]);

  return (
    <section ref={targetRef} className="h-[500dvh] bg-background">
      <section className="flex justify-center gap-5">
        <div>
          {dynamicCards.map((card, i) => {
            return <SkillCard card={card} key={card.id} />;
          })}
        </div>
        <div className="overflow-y-hidden w-[40dvw] sticky top-0">
          <motion.div
            className="absolute h-[100dvh] left-0 right-0"
            style={{ top: y }}
          >
            {textCards.map((card, i) => {
              return <SkillCardText card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default OppositeScrolling;
