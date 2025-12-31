import { memo } from 'react';

const Logo = () => {
  return (
      <div className="flex items-center gap-3">
        <div className="font-bold text-xl bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
          <i className="ri-code-s-slash-line"></i>
        </div>
        <h1 className="text-xl text-white font-semibold">Ekansh Gupta</h1>
      </div>    
  );
};

export default memo(Logo);