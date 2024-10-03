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
import useScreenSize from "../../../hooks/useScreenSize";

export default function VerticalTimelineComp() {
  const { theme } = useTheme();
  const { isMobile } = useScreenSize();

  return (
    <>
      <VerticalTimeline lineColor={theme === "light" ? "#121212" : "#ec6554"}>
        {experienceData &&
          experienceData.map((el: experienceDataType) => {
            return (
              <VerticalTimelineElement
                key={el?.id}
                className="vertical-timeline-element--work dark:text-black text-white mr-10 xl:mr-0"
                contentStyle={{
                  background: theme === "light" ? "#121212" : "#ecedee",
                  border: `1px solid ${
                    theme === "light" ? "#121212" : "#ecedee"
                  }`,
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                dateClassName={
                  theme === "light"
                    ? isMobile
                      ? "text-[#ecedee]"
                      : "text-[#121212]"
                    : isMobile
                    ? "text-black"
                    : "text-white"
                }
                contentArrowStyle={{
                  borderRight: `7px solid  ${
                    theme === "light" ? "#121212X" : "#ecedee"
                  }`,
                }}
                date={el?.date}
                iconStyle={{
                  background: `${theme === "light" ? "#b2b2b2" : "#ecedee"}`,
                  color: "#ecedee",
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
      <div className=" flex  gap-3 lg:flex-col lg:items-center lg:ml-0 ml-2">
        <Tooltip
          showArrow={true}
          placement="right-start"
          delay={700}
          content="You know that it'll never load anything, right?"
        >
          <div className="dark:bg-slate-100 dark:border-0 border-[4px] border-black bg-[#b2b2b2] w-fit rounded-full">
            <SpinnerSvg className={isMobile ? `h-[50px] w-[50px]` : ""} />
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
