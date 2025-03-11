import ArrowR from "./icons/ArrowR";
import ArrowL from "./icons/ArrowL";
const Day = () => {
  return (
    <section className="flex justify-center items-center gap-8 my-20 [&>p]:text-gray-500">
      <p className="cursor-pointer">
        <ArrowL />
      </p>
      <div className="w-[155px]">
        <h4 className="text-4xl font-medium">Thursday</h4>
        <p className="text-gray-500">Mar 23, 2025</p>
      </div>
      <p className="cursor-pointer">
        <ArrowR />
      </p>
    </section>
  );
};

export default Day;
