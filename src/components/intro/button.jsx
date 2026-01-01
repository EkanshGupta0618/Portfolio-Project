import { memo } from "react";

const Button = () => {
  return (
    <div className="
      mt-10
      flex flex-col sm:flex-row
      items-center
      justify-center
      gap-4 sm:gap-8
    ">
      <button className="
        bg-blue-500 hover:bg-blue-600 hover:text-white text-white
        px-4 py-2
        rounded-full
        flex items-center gap-3
        transition-all duration-300 hover:scale-105
        shadow-[0_0_4px_#3b82f6]
      ">
        <span>View Projects</span>
      </button>

      <button className="
        text-white rounded-full px-4 py-2
        bg-linear-to-br from-slate-900 via-slate-900
        backdrop-blur-lg border border-white/10
        transition-all duration-300 hover:scale-105
        gap-2 flex items-center
      ">
        <i className="ri-download-line animate-bounce"></i>
        <span>Download Resume</span>
      </button>
    </div>
  );
};

export default memo(Button);
