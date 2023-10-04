import { ApolloProvider } from "@apollo/client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

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
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
