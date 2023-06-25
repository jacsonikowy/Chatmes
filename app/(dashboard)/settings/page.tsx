"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const theme = useTheme();
  const { toast } = useToast();

  const handleChangeDarkMode = (currentTheme: string) => {
    if (currentTheme === "dark") {
      theme.setTheme("light");
      toast({
        title: "Light Mode",
        description: "Successfully changed to Light Mode",
      });
      return;
    }

    if (currentTheme === "light") {
      theme.setTheme("dark");
      toast({
        title: "Dark Mode",
        description: "Successfully changed to Dark Mode",
      });
      return;
    }

    toast({
      title: "Error",
    });
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <h1 className="text-center py-[13px] text-primary font-semibold text-[48px]">
          Settings
        </h1>
        <hr />
        <div className="w-full p-[32px]">
          <h3>Dark Mode:</h3>
          <Switch
            className="w-[40px]"
            onClick={() => handleChangeDarkMode(theme.theme!)}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
