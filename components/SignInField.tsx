"use client";
import React from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInField = () => {
  const router = useRouter();
  return (
    <div className="min-w-[233px] min-h-[168px] border-2 border-[#979797] rounded-lg flex flex-col justify-center items-center gap-[36px] bg-white">
      <h1 className="text-[12px] sm:text-[32px] text-center mt-[24px] dark:text-black">
        Sign In using those providers:
      </h1>
      <div className="flex flex-col gap-[12px] max-w-[128px] sm:max-w-[393px] mb-[36px]">
        <Button
          variant="primaryLogin"
          text="Sign in with Google"
          onClick={() => {
            try {
              signIn();
              router.replace("/");
              console.log("asd");
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Button
          variant="githubLogin"
          text="Sign in with Github"
          onClick={() => {
            signIn("github");
          }}
        />
      </div>
    </div>
  );
};

export default SignInField;
