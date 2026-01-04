import { memo } from "react";
import { AiOutlinePython } from "react-icons/ai";

const TechSkills = () => {
  return (
    <div
      className="
        bg-linear-to-br from-[#0b1220] via-[#0e1627] to-[#0a0f1c]
        h-28 w-28 sm:h-32 sm:w-32 md:h-35 md:w-35
        rounded-2xl
        flex flex-col items-center justify-center
        text-white
        gap-2

        transition-all duration-300 ease-out
        hover:scale-105
        hover:border-blue-500
        border border-white/10
        hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
      "
    >
      {/* ICON */}
      <AiOutlinePython className="text-6xl sm:text-5xl md:text-7xl text-gray-200" />

      {/* TEXT */}
      <span className="text-xs sm:text-sm md:text-base text-gray-200">
        Python
      </span>
    </div>
  );
};

export default memo(TechSkills);
