import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import {HomeDefaultNavbar,HomeDefaultFooter} from "@/components/ui/public/";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vachanavayal-2 Web App",
  description: "Official website of vachanavayal-2 App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-zinc-100`}>
        <HomeDefaultNavbar />
        {children}
        <HomeDefaultFooter />
      </body>
    </html>
  );
}
