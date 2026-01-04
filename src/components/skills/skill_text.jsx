import { memo } from "react";
import TechSkills from "./tech_skills";

const Skill_text = () => {
  return (
    <div className="flex flex-col gap-12">
      
      {/* 🔹 HEADER ROW */}
      <div
        className="
          flex flex-col md:flex-row
          justify-between
          items-start
          gap-6
        "
      >
        {/* LEFT */}
        <div>
          <p className="text-blue-500 text-sm uppercase tracking-wider">
            Expertise
          </p>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold">
            Technical Skills
          </h2>
        </div>

        {/* RIGHT */}
        <p
          className="
            text-gray-400
            max-w-md
            md:text-right
            text-sm md:text-base
            md:pt-8
          "
        >
          A curated list of technologies I use to bring ideas to life, focusing on
          performance and scalability.
        </p>
      </div>

      {/* 🔹 SKILLS GRID (NEECHE) */}
      <div
        className="
          grid grid-cols-2
          sm:grid-cols-3
          md:flex md:flex-row
          gap-6
        "
      >
        <TechSkills />
      </div>
    </div>
  );
};

export default memo(Skill_text);
