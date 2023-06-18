import React, { FC } from "react";
import { ChevronRight } from "lucide-react";

interface IButton {
  text: string;
  variant: "primary" | "primaryArrow";
}

const Button: FC<IButton> = ({ text, variant }) => {
  return (
    <button className={`${variant}`}>
      {text} {variant === "primaryArrow" && <ChevronRight />}
    </button>
  );
};

export default Button;
