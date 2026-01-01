import { memo } from "react";

const Resume = () => {
  return (
    <div className="flex items-center">
      <button
        className="
          bg-white hover:bg-blue-600 hover:text-white text-black
          px-4 py-2 sm:px-5 sm:py-2.5
          text-sm sm:text-base
          rounded-2xl
          flex items-center gap-3
          transition-all duration-300 hover:scale-105
          whitespace-nowrap
        "
      >
        <span>Let's Talk</span>
      </button>
    </div>
  );
};

export default memo(Resume);
