import Button from "@/components/Button";
import { authOptions } from "@/lib/authOptions";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { RocketIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/messages");
  }

  return (
    <main>
      <div className="flex gap-4 absolute top-0 right-0 p-6">
        <Link href={"http://www.twitter.com/shitgem1"}>
          <Twitter />
        </Link>
        <Link href={"http://www.github.com/jacsonikowy"}>
          <Github />
        </Link>
      </div>
      <div className="flex justify-between items-center px-[20px] py-[120px] sm:px-[180px]">
        <div>
          <h1 className="sm:text-[124px] text-[56px] font-semibold text-primary">
            Chatmes
          </h1>
          <h2 className="text-[21px] sm:text-[48px] font-medium max-w-[572px] text-[#65B4A1]">
            Best messaging app on the World Wide Web
          </h2>
          <div className="mt-[76px] sm:mt-[120px]">
            <Button variant="primaryArrow" text="Chat now" navigation="login" />
          </div>
        </div>
        <div className="hidden xl:block">
          <RocketIcon size={400} />
        </div>
      </div>
    </main>
  );
}
