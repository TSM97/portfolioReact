import UnderConstructionSVG from "../svgs/UnderConstructionSVG";

export default function UnderConstruction() {
  return (
    <section className="fixed bottom-3  md:bottom-[90vh] right-[50%] translate-x-[50%] z-50">
      <div className="flex gap-3 items-center text-md lg:text-xl font-bold text-black border-black border-2 rounded-3xl px-4 bg-[#ec4e39] opacity-85">
        <div>Site Under Construction</div>
        <UnderConstructionSVG className="w-[8vh] h-[8vh] stroke-black fill-black" />
      </div>
    </section>
  );
}
