import { memo } from "react";
import "remixicon/fonts/remixicon.css";
import Links from "./links";
import Resume from "./resume";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="
      h-20
      flex items-center justify-between
      sticky top-0 z-50
      bg-slate-900
      px-4 sm:px-8 md:px-16 lg:px-24
    ">
      <Logo />
      <Links />
      <Resume />
    </div>
  );
};

export default memo(Navbar);
