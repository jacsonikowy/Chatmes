import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Theme from "@/components/Theme";
import Provider from "@/components/Provider";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Provider session={session}>
            {children}
            <Toaster />
          </Provider>
        </Theme>
      </body>
    </html>
  );
}
