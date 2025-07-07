import { Inter, Poppins } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-poppins" });
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

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
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
