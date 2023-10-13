import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/apollo";
import ProviderSet from "@/components/Layout/ProviderSet";

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
        <ProviderSet>
          <Provider>{children}</Provider>
        </ProviderSet>
      </body>
    </html>
  );
}
