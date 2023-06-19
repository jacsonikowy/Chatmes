"use client";
import React, { ButtonHTMLAttributes, FC } from "react";
import { ChevronRight } from "lucide-react";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "primaryArrow" | "primaryLogin" | "githubLogin";
  navigation?: "login";
}

const Button: FC<IButton> = ({ text, variant, navigation, ...props }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        {
          navigation === "login" && router.replace("/login");
        }
      }}
      {...props}
      className={`${variant}`}
    >
      {variant === "primaryLogin" && <Icons.google />}
      {variant === "githubLogin" && (
        <div className="w-[10px] scale-[0.20] sm:scale-[0.25]">
          <Icons.githubWhite />
        </div>
      )}
      {text}
      {variant === "primaryArrow" && <ChevronRight />}
    </button>
  );
};

export default Button;
