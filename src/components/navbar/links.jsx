import { memo } from 'react';

const Links = () => {
  return (
      <div className="flex gap-16 text-white rounded-full px-6 py-2 bg-linear-to-br from-slate-900 via-slate-900 backdrop-blur-lg border border-white/10">
        {["About", "Skills", "Experience", "Projects", "Contact"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="relative text-white after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 hover:scale-120">
              {item}
            </a>
          )
        )}
      </div>    
  );
};

export default memo(Links);