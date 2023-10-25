import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/apollo";
import Head from "next/head";
import ProviderSet from "@/components/layout/ProviderSet";

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
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </Head>
      <body className={`font-pretendard`}>
        <ProviderSet>
          <Provider>{children}</Provider>
        </ProviderSet>
      </body>
    </html>
  );
}
