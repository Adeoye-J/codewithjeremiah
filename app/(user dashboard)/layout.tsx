
import Sidebar from "@/components/projects/Sidebar"
import Topbar from "@/components/projects/Topbar";

import type { Metadata } from "next";
import { 
    // Geist, 
    // Geist_Mono, 
    Inter 
} from "next/font/google";
import "../globals.css";
import Footer from "@/components/general/Footer";
import HeaderCondition from "@/components/general/HeaderCondition";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard - Code With Jeremiah",
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
        className={`
            ${inter.variable} 
            antialiased m-0 p-0 min-h-screen flex flex-col justify-between`
        }
      >
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="flex-1 bg-gray-100 dark:bg-black/50 p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
      </body>
    </html>
  );
}
