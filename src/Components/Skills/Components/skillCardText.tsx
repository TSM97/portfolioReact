const SkillCardText = ({ card }) => {
  console.log(card.text);
  return (
    <div
      key={card.id}
      className="h-[100dvh] w-[40dvw] even:bg-foreground odd:text-foreground text-foreground-100 p-[10%]"
    >
      <div className="flex inset-0 h-full flex-col w-full z-10 items-end justify-between">
        <p className="text-5xl">{card.title}</p>

        <div>
          <p className="text-3xl text-right pb-6">{card?.text1}</p>
          <p className="text-3xl text-right">{card?.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCardText;