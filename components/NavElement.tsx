import React, { ButtonHTMLAttributes, FC } from "react";

interface INavElement extends ButtonHTMLAttributes<HTMLButtonElement> {
  logo: React.ReactNode;
  text: string;
}

const NavElement: FC<INavElement> = ({ logo, text, ...props }) => {
  return (
    <button
      {...props}
      className="flex gap-[15px] items-center max-w-[130px] hover:text-primary active:text-green-700 cursor-pointer"
    >
      {logo}
      <p className="text-[18px]">{text}</p>
    </button>
  );
};

export default NavElement;
