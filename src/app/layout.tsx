import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import {Poppins} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/app/authContext";

const poppins = Poppins({ weight:"400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Carefinder",
  description: "Carefinder is a platform that helps you find healthcare facilities near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <ChakraProvider>
        <div className="flex flex-col justify-between min-h-[100vh]">
          <div>
          <Navbar />
          <div className= {poppins.className} >
          {children}
          </div>
          </div>
          <Footer />
          </div>
          </ChakraProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
