'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the window load event to ensure all assets are loaded
    const handleLoad = () => {
      // Add a small delay for a smoother experience
      setTimeout(() => setIsLoading(false), 800);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback: if load event doesn't fire quickly (e.g. single page nav), force load after timeout
      const timeoutId = setTimeout(handleLoad, 3000); 
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative flex h-24 w-24">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
                <span className="relative inline-flex rounded-full h-24 w-24 border-4 border-primary/20 border-t-primary animate-spin"></span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium text-primary animate-pulse"
              >
                Loading Experience...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 
        We render children immediately but hidden or covered 
        so they can hydrate/load in the background 
      */}
      {children}
    </>
  );
}
