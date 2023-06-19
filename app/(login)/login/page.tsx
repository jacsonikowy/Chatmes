import React from "react";
import Logo from "@/components/Logo";
import SignInField from "@/components/SignInField";

const page = () => {
  return (
    <div className="text-center py-[35vh]">
      <div className="absolute left-0 top-0 p-[30px]">
        <Logo />
      </div>
      <div className="m-[20px] sm:m-auto max-w-[584px]">
        <SignInField />
      </div>
    </div>
  );
};

export default page;
