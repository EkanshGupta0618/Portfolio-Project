import { memo } from "react";
import Navbar from "./components/navbar/navbar";
import About_us from "./components/intro/about_us";
import Skills from "./components/skills/skills";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <About_us />
      <Skills />
    </div>
  );
};

export default memo(App);