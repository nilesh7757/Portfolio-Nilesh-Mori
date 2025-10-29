import { Inter, Poppins } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-poppins" });
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Nilesh Mori | Full Stack Developer | Web & Mobile Innovator",
  description: "Explore the portfolio of Nilesh Mori, a passionate Full Stack Developer specializing in cutting-edge web development, robust mobile applications, and innovative tech solutions. Featuring projects in Next.js, React, Node.js, and more.",
  keywords: "Nilesh Mori, Full Stack Developer, Web Development, Mobile Apps, Tech Innovator, Portfolio, React, Next.js, Node.js, JavaScript, MongoDB, Tailwind CSS, Software Engineer",
  openGraph: {
    title: "Nilesh Mori | Full Stack Developer | Web & Mobile Innovator",
    description: "Explore the portfolio of Nilesh Mori, a passionate Full Stack Developer specializing in cutting-edge web development, robust mobile applications, and innovative tech solutions.",
    type: "website",
    locale: "en_US",
    url: "https://nilesh7757.github.io/",
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
