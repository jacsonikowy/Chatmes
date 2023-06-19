import React from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-[12px]">
        <div className="text-black dark:text-white">
          <MessageCircle size={42} />
        </div>
        <p className="text-primary text-[28px] font-medium">Chatmes</p>
      </div>
    </Link>
  );
};

export default Logo;
