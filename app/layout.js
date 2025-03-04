import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export const metadata = {
  title: "Nilesh Mori | Full Stack Developer",
  description: "Welcome to Nilesh Mori's portfolio - Full Stack Developer specializing in web development, mobile apps, and tech innovation.",
  keywords: "Nilesh Mori, Full Stack Developer, Web Development, Portfolio, React, Next.js",
  openGraph: {
    title: "Nilesh Mori | Full Stack Developer",
    description: "Full Stack Developer specializing in web development, mobile apps, and tech innovation",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
