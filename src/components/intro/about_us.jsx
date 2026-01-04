import { memo } from "react";
import Intro_text from "./intro_text";
import Button from "./button";

const AboutUs = () => {
  return (
    <div className="
      min-h-[calc(100vh-5rem)] w-full
      bg-[radial-gradient(circle_at_top_right,#0b2a4a_0%,#0e1a24_35%,#120b2a_65%,#0a0f14_100%)]
      flex flex-col
      items-center
      pt-20 sm:pt-20">
      <Intro_text />
      <Button />
    </div>
  );
};

export default memo(AboutUs);
