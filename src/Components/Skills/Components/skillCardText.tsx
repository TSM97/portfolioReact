import useScreenSize from "../../../hooks/useScreenSize";
import { textCardsType } from "../data/dynamicCards";

const SkillCardText = ({ card }: { card: textCardsType }) => {
  const { isTablet } = useScreenSize();

  return (
    <div
      key={card.id}
      className={`${
        isTablet ? "w-screen h-[60vh]" : "w-[40dvw] h-[100vh] p-[10%]"
      } even:bg-foreground odd:text-foreground text-foreground-100`}
    >
      <div className="flex inset-0 h-full flex-col w-full z-10 items-end justify-between">
        <p className="text-5xl">{card.title}</p>
        <div>
          <p className="text-2xl text-right pb-5">{card.text1}</p>
          <p className="text-2xl text-right">{card.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCardText;
