import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export const metadata = {
  title: "Nilesh Mori's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div  className="h-20 z-10 backdrop-blur bg-transparent sticky top-0"><Navbar/></div>
        {children}
       <Footer/>
        </body>
    </html>
  );
}
