import Link from "next/link";

import Logo from "@/public/Trello-logo.png";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center"
      data-testid="navbar_wrapper"
    >
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <img src="/Trello-logo.png" className="h-20 w-40" />
      </div>
    </div>
  );
};
