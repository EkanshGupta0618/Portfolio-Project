import { memo } from "react";

const Button = () => {
  return (
    <div className="mt-10 flex justify-center gap-8">
        {/* view projects button */}
      <button className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white px-4 py-2 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-[0_0_6px_#3b82f6]">
        <span>View Projects</span>
      </button>




      <button>Download Resume</button>
    </div>
  );
};

export default memo(Button);
