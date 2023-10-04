import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cogni",
  description: "Enjoy your own cafe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" fixed w-screen h-screen top-0 -z-[99999] bg-[#B87D54]">
          {/* bg-top */}
          <div className=" bg-[#BCC7B2] w-full h-[90%]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
