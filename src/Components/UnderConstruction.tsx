import UnderConstructionSVG from "../svgs/UnderConstructionSVG";

export default function UnderConstruction() {
  return (
    <section className="fixed top-3 right-[50%] translate-x-[50%] z-50">
      <div className="flex gap-3 items-center text-xl font-bold text-red-700 border-red-700 border-2 rounded-3xl px-4 bg-red-200 opacity-85">
        <div>Site Under Construction</div>
        <UnderConstructionSVG className="w-[8dvh] h-[8dvh] stroke-red-700 fill-red-700" />
      </div>
    </section>
  );
}
