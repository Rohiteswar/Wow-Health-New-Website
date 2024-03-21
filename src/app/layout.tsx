import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import localFont from "next/font/local";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});

export const metadata: Metadata = {
  title: "Wow Health",
  description: "We Give Healthy Diet and Minimal Cost Services To The Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
