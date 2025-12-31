import { memo } from "react";
import "remixicon/fonts/remixicon.css";
import Links from "./links";
import Resume from "./resume";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="bg-slate-900 text-black h-16 flex items-center justify-between px-50">
      <Logo />
      <Links />
      <Resume />
    </div>
  );
};

export default memo(Navbar);
