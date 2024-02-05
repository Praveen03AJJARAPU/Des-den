import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../app/globals.css';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designers Den",
  description: "Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-hidden">
          <Hero />
          <div className="px-5">
          <About />
          <Featured />
          <Footer />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
