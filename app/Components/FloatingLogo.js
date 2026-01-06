'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingLogo() {
  return (
    <motion.div 
      className="fixed top-6 left-6 z-50 hidden md:block"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="cursor-pointer select-none">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg group"
        >
          <span className="font-bold text-xl flex items-center gap-0.5">
            <span className="bg-gradient-to-tr from-blue-500 to-cyan-400 text-transparent bg-clip-text">N</span>
            <span className="text-foreground group-hover:text-blue-400 transition-colors">M</span>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
