import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/header/navbar/navbar";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
});



export const metadata: Metadata = {
  title: "Item Zone | আপনার কেনাকাটার ঠিকানা",
  description:
    "Item Zone-এ খুঁজে নিন আপনার পছন্দের সব পণ্য। সহজ ও স্বাচ্ছন্দ্যময় অনলাইন কেনাকাটা।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      theme-data="light"
      className={`${notoSerifBengali.className}  h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <header>
          <Navbar />
        </header>

        <main className="flex-1">{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
