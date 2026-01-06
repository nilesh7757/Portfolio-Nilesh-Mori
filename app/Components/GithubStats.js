'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubStats = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
            <Github className="h-8 w-8" />
            <span>Open Source</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Contributions</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            My recent activity and contributions on GitHub.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-auto"
            >
                <img 
                    src="https://github-readme-stats.vercel.app/api?username=nilesh7757&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=a1a1aa&icon_color=3b82f6&text_bold=false" 
                    alt="Nilesh's GitHub Stats"
                    className="w-full h-auto max-w-md mx-auto"
                />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full md:w-auto"
            >
                <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=nilesh7757&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=a1a1aa&icon_color=3b82f6&text_bold=false" 
                    alt="Nilesh's Top Languages"
                    className="w-full h-auto max-w-md mx-auto"
                />
            </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center"
        >
             <img 
                src="https://ghchart.rshah.org/3b82f6/nilesh7757" 
                alt="Nilesh's Github Chart" 
                className="w-full max-w-4xl"
            />
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
