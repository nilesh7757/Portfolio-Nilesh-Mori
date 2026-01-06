'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, BookMarked } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { getGithubStats } from '@/lib/github';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="h-full"
  >
    <Card className="h-full glassmorphism border-0 shadow-lg relative overflow-hidden group">
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        <Icon className="w-16 h-16" />
      </div>
      <CardContent className="p-6 flex flex-col justify-between h-full relative z-10">
        <div className={`p-3 rounded-full w-fit mb-4 ${color} bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${color.replace('text-', '')}`} />
        </div>
        <div>
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="text-muted-foreground text-sm">{label}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const GithubStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await getGithubStats('nilesh7757');
      setData(stats);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground animate-pulse">Loading GitHub Stats...</p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const { stats, topLanguages } = data;

  return (
    <section className="w-full px-4 py-12 md:py-20" id="github">
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
            My code activity and open source stats on GitHub.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard icon={BookMarked} label="Repositories" value={stats.public_repos} color="text-blue-500" />
          <StatCard icon={Star} label="Total Stars" value={stats.total_stars} color="text-yellow-500" />
          <StatCard icon={GitFork} label="Total Forks" value={stats.total_forks} color="text-purple-500" />
          <StatCard icon={Users} label="Followers" value={stats.followers} color="text-green-500" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Top Languages */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full glassmorphism">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  Top Languages
                </h3>
                <div className="space-y-4">
                  {topLanguages.map((lang, index) => (
                    <div key={lang.name} className="relative">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.count} repos</span>
                      </div>
                      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(lang.count / stats.public_repos) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contribution Chart */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full glassmorphism overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                  Contribution Graph
                </h3>
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                  <img 
                    src="https://ghchart.rshah.org/3b82f6/nilesh7757" 
                    alt="Nilesh's Github Chart" 
                    className="min-w-[600px] w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
