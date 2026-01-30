import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/general/Footer";
import HeaderCondition from "@/components/general/HeaderCondition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code With Jeremiah",
  description: "A learning platform about web development, programming, and technology.",
  icons: {
    icon: "/keyboard.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 bg-blue-950 text-white`}
      >
        <HeaderCondition />
        {children}
        <Footer />
      </body>
    </html>
  );
}
