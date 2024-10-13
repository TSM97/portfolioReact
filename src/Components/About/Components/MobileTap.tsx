import Tap from "../../../svgs/Tap";
import Arrow from "../../../svgs/Arrow";

export default function MobileTap() {
  return (
    <section className="absolute top-[15vh] left-[5%] text-foreground">
      <div className="flex text-foreground text-xl align-baseline">
        <div>You have to Tap to discover!</div>
        <Tap className="w-10 h-10 stroke-foreground fill-foreground" />
      </div>
      <div className="pl-5 pt-4">
        <Arrow className="w-10 h-10 stroke-foreground fill-foreground rotate-90" />
      </div>
    </section>
  );
}
