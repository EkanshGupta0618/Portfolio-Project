import { memo } from "react";
import Skill_text from "./skill_text";

const SkillsText = () => {
  return (
    <section
      className="
        w-full
        bg-[radial-gradient(circle_at_top,#040d1f_0%,#020b1a_45%,#020617_100%)]
        py-20
      "
    >
      {/* CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4">
        <Skill_text />
      </div>
    </section>

    
  );
};

export default memo(SkillsText);
