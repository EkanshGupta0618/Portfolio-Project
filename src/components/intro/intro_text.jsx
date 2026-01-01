import { memo } from "react";

const IntroText = () => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      
      {/* availability badge */}
      <div className="
        rounded-full px-6 py-2
        bg-linear-to-br from-slate-900 via-slate-900
        backdrop-blur-lg border border-white/10
        h-12 w-70
        mt-16 sm:mt-20
        flex items-center justify-center gap-3 tracking-wide
      ">
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e]" />
        <span className="text-green-400">Available for new projects</span>
      </div>

      {/* heading */}
      <div className="mt-10 sm:mt-15">
        <span className="
          text-4xl sm:text-6xl md:text-7xl lg:text-8xl
          text-slate-100 font-extrabold leading-none
        ">
          Designing the
          <br />
          <span className="
            bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500
            bg-clip-text text-transparent font-extrabold
          ">
            Future of Web
          </span>
        </span>
      </div>

      {/* description */}
      <span className="
        text-base sm:text-lg md:text-xl lg:text-2xl
        mt-6 sm:mt-10
        text-slate-300 tracking-wider
        max-w-3xl
      ">
        I'm Ekansh Gupta, a Full Stack Developer specializing <br />
        in building exceptional digital experiences. I craft accessible, <br />
        pixel-perfect, and performant web applications.
      </span>
    </div>
  );
};

export default memo(IntroText);
