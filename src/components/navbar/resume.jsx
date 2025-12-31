import { memo } from 'react';

const Resume = () => {
  return (
    <div>
      <button className="bg-white hover:bg-blue-600 hover:text-white text-black px-4 py-2 rounded flex items-center gap-3 transition-all duration-300 hover:scale-105">
        <i className="ri-download-line"></i>
        <span>Resume</span>
      </button>    
      </div>
  );
};

export default memo(Resume);