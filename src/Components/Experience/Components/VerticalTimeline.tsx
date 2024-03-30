import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "next-themes";
import { SpinnerSvg } from "../../../svgs";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

import { experienceData, experienceDataType } from "../data/experienceData";

export default function VerticalTimelineComp() {
  const { theme } = useTheme();

  return (
    <>
      <VerticalTimeline lineColor={theme === "light" ? "#000" : "#fff"}>
        {experienceData &&
          experienceData.map((el: experienceDataType) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work dark:text-black text-white"
                contentStyle={{
                  background: theme === "light" ? "#000" : "#fff",
                  border: `1px solid ${theme === "light" ? "#000" : "#fff"}`,
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                dateClassName={
                  theme === "light" ? "text-[#000]" : "text-[#fff]"
                }
                contentArrowStyle={{
                  borderRight: `7px solid  ${
                    theme === "light" ? "#000" : "#fff"
                  }`,
                }}
                date={el?.date}
                iconStyle={{
                  background: `${theme === "light" ? "#b2b2b2" : "#fff"}`,
                  color: "#fff",
                }}
                icon={el?.icon}
              >
                <div className="vertical-timeline-element-title text-xl">
                  {el?.jobTitle}
                </div>
                <div className="vertical-timeline-element-subtitle">
                  {el?.subTitle}
                </div>
                <p>{el?.text}</p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
      <div className="mt-10 md:mt-0 flex  gap-3 lg:flex-col lg:items-center lg:ml-0 ml-2">
        <Tooltip
          showArrow={true}
          placement="right-start"
          delay={700}
          content="You know that it'll never load anything, right?"
        >
          <div className="dark:bg-slate-100 dark:border-0 border-[4px] border-black bg-[#b2b2b2] w-fit rounded-full">
            <SpinnerSvg />
          </div>
        </Tooltip>

        <p className="place-content-center text-lg">
          Loading for more Experiences
          {[" . ", " . ", " . "].map((el, i) => (
            <motion.span
              whileInView="visible"
              transition={{
                duration: 1.5,
                delay: i / 3,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1.5,
              }}
              variants={{
                visible: { opacity: [0, 1, 0] },
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </p>
      </div>
    </>
  );
}
