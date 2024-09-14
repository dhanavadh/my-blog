import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

export const metadata: Metadata = {
  title: "Dhanavadh's Home",
  description: "Welcome to my personal website! This is where I showcase my projects and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body>
        <Navbar />    
        {children}
        <Footer />
      </body>
    </html>
  );
}
