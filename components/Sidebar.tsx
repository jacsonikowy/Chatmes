import React from "react";
import Logo from "./Logo";
import NavElement from "./NavElement";
import { MessageSquare } from "lucide-react";
import { LogOut } from "lucide-react";
import { Users } from "lucide-react";
import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="relative h-screen">
      <div className="mb-[30px]">
        <Logo />
      </div>
      <div className="flex flex-col mt-[37px] gap-[23px]">
        <NavElement text="Messages" logo={<MessageSquare />} />
        <NavElement text="Friends" logo={<Users />} />
        <NavElement text="Settings" logo={<Settings />} />
        <div className="absolute left-0 bottom-10">
          <NavElement text="Logout" logo={<LogOut />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
