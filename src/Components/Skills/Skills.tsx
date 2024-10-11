import OppositeScrolling from "./Components/OppositeScrolling";
import MobileScrolling from "./Components/MobileScrolling";
import useScreenSize from "../../hooks/useScreenSize";

const Skills = () => {
  const { isTablet } = useScreenSize();
  return (
    <div className="bg-background lg:py-[15vh]">
      {isTablet ? (
        <>
          <MobileScrolling />
        </>
      ) : (
        <OppositeScrolling />
      )}
    </div>
  );
};

export default Skills;
