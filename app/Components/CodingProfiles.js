'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { ExternalLink, Trophy, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Custom SVG for AtCoder since it might be missing in some icon sets
const AtCoderIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 1.5L0 22.5h24L12 1.5zm0 3.6l9.1 16.4H2.9L12 5.1z" />
  </svg>
);

const CodingProfiles = () => {
  const [stats, setStats] = useState({
    leetcode: { solved: null, rank: null, loading: true },
    codeforces: { rating: null, rank: null, loading: true },
    codechef: { rating: null, stars: null, loading: true },
    atcoder: { solved: null, loading: true },
  });

  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/nilesh7757');
        const data = await response.json();
        if (data.status === 'success') {
          setStats(prev => ({
            ...prev,
            leetcode: {
              solved: data.totalSolved,
              rank: data.ranking,
              loading: false
            }
          }));
        } else {
          setStats(prev => ({ ...prev, leetcode: { loading: false } }));
        }
      } catch (error) {
        setStats(prev => ({ ...prev, leetcode: { loading: false } }));
      }
    };

    const fetchCodeforces = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/user.info?handles=nilesh7757');
        const data = await response.json();
        if (data.status === 'OK' && data.result.length > 0) {
          setStats(prev => ({
            ...prev,
            codeforces: {
              rating: data.result[0].rating,
              rank: data.result[0].rank,
              loading: false
            }
          }));
        } else {
          setStats(prev => ({ ...prev, codeforces: { loading: false } }));
        }
      } catch (error) {
        setStats(prev => ({ ...prev, codeforces: { loading: false } }));
      }
    };

    const fetchCodeChef = async () => {
       // CodeChef doesn't have a stable public API, using a placeholder or a scraper if available.
       // For now, we'll try a known community API or fallback gracefully.
       try {
        // Trying a common community API for CodeChef
        const response = await fetch('https://codechef-api.vercel.app/handle/nilesh7757');
        const data = await response.json();
        if (data && data.currentRating) {
           setStats(prev => ({
            ...prev,
            codechef: {
              rating: data.currentRating,
              stars: data.stars,
              loading: false
            }
          }));
        } else {
           setStats(prev => ({ ...prev, codechef: { loading: false } }));
        }
       } catch (error) {
         setStats(prev => ({ ...prev, codechef: { loading: false } }));
       }
    };

    // Fetch AtCoder Stats (Kenkoooo API)
    const fetchAtCoder = async () => {
      try {
        const response = await fetch('https://kenkoooo.com/atcoder/atcoder-api/v3/user/info?user=nilesh7757');
        const data = await response.json();
        if (data && data.accepted_count !== undefined) {
          setStats(prev => ({
            ...prev,
            atcoder: {
              solved: data.accepted_count,
              loading: false
            }
          }));
        } else {
          setStats(prev => ({ ...prev, atcoder: { loading: false } }));
        }
      } catch (error) {
        setStats(prev => ({ ...prev, atcoder: { loading: false } }));
      }
    };

    fetchLeetCode();
    fetchCodeforces();
    fetchCodeChef();
    fetchAtCoder();
  }, []);

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'nilesh7757',
      url: 'https://leetcode.com/nilesh7757',
      icon: SiLeetcode,
      color: '#FFA116',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'group-hover:border-yellow-500/50',
      description: 'Data Structures & Algorithms',
      stats: stats.leetcode.loading ? 'Loading...' :
             stats.leetcode.solved ? `${stats.leetcode.solved} Solved` : 'Active Participant'
    },
    {
      platform: 'Codeforces',
      username: 'nilesh7757',
      url: 'https://codeforces.com/profile/nilesh7757',
      icon: SiCodeforces,
      color: '#1F8ACB',
      bgColor: 'bg-blue-500/10',
      borderColor: 'group-hover:border-blue-500/50',
      description: 'Competitive Programming',
      stats: stats.codeforces.loading ? 'Loading...' :
             stats.codeforces.rating ? `${stats.codeforces.rating} Rating` : 'Active Participant'
    },
    {
      platform: 'CodeChef',
      username: 'nilesh7757',
      url: 'https://www.codechef.com/users/nilesh7757',
      icon: SiCodechef,
      color: '#5B4638',
      bgColor: 'bg-orange-900/10',
      borderColor: 'group-hover:border-orange-900/50',
      description: 'Algorithmic Contests',
      stats: stats.codechef.loading ? 'Loading...' :
             stats.codechef.rating ? `${stats.codechef.rating} Rating` : 'Active Participant'
    },
    {
      platform: 'AtCoder',
      username: 'nilesh7757',
      url: 'https://atcoder.jp/users/nilesh7757',
      icon: AtCoderIcon,
      color: '#000000',
      bgColor: 'bg-foreground/10',
      borderColor: 'group-hover:border-foreground/50',
      description: 'Mathematical Problems',
      stats: stats.atcoder.loading ? 'Loading...' :
             stats.atcoder.solved ? `${stats.atcoder.solved} Problems Solved` : 'Active Participant'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 sm:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <span>Competitive</span>
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Programming</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Actively solving complex algorithmic problems and participating in global contests across multiple platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.platform}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.02}
              transitionSpeed={2500}
              className="h-full"
            >
              <Card className={`h-full border transition-colors duration-300 ${profile.borderColor} hover:shadow-lg group glassmorphism overflow-hidden relative`}>
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full blur-2xl opacity-50 transition-colors duration-500 ${profile.bgColor}`} />
                
                <CardContent className="p-6 flex flex-col items-center text-center h-full relative z-10">
                  <div className={`p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 ${profile.bgColor}`}>
                    <profile.icon 
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                      style={{ color: profile.color === '#000000' ? 'currentColor' : profile.color }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{profile.platform}</h3>
                  <p className="text-sm text-muted-foreground mb-1 font-mono">@{profile.username}</p>
                  
                  <div className="my-3 font-semibold text-primary flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full text-sm">
                     <Activity className="w-3 h-3" />
                     {profile.stats}
                  </div>
                  
                  <div className="mt-auto w-full pt-4">
                    <Button 
                      className="w-full group/btn" 
                      variant="outline"
                      asChild
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        View Profile
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;