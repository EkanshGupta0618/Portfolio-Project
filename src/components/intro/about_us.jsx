import { memo } from "react";
import Intro_text from "./intro_text";
import Button from "./button";

const AboutUs = () => {
  return (
    <div className="
      h-screen min-h-screen w-full
      bg-[radial-gradient(circle_at_top_right,#0b2a4a_0%,#0e1a24_35%,#120b2a_65%,#0a0f14_100%)]
      flex flex-col
      items-center
      justify-center
      px-4 sm:px-8 md:px-16 lg:px-24">
      <Intro_text />
      <Button />
    </div>
  );
};

export default memo(AboutUs);
