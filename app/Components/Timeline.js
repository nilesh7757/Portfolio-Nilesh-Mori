'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import experiences from '@/lib/experience';

const educationData = [
  {
    type: 'education',
    role: "B.Tech (Honours) in ICT with minor in Computational Science",
    company: "Dhirubhai Ambani Institute of ICT",
    link: "https://www.daiict.ac.in/",
    duration: "2023 - 2027 | Pursuing",
    location: "Gandhinagar, Gujarat",
    description: "Currently pursuing advanced studies in Information and Communication Technology with a focus on computational science and modern software development."
  },
  {
    type: 'education',
    role: "HSC Science",
    company: "Sigma Public School",
    link: "https://www.sigmaschoolpbr.org/",
    duration: "2021 - 2023 | Completed",
    location: "Porbandar, Gujarat",
    description: "Completed higher secondary education with focus on science and mathematics, laying the foundation for engineering studies."
  }
];

const timelineData = [
  { ...experiences[0], type: 'work' }, // Craft Silicon (2024)
  educationData[0], // DAIICT (2023-2027)
  educationData[1], // Sigma (2021-2023)
];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Line Marker */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center">
        {item.type === 'work' ? (
          <Briefcase className="w-4 h-4 text-primary" />
        ) : (
          <GraduationCap className="w-4 h-4 text-primary" />
        )}
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
      >
        <Card className="glassmorphism hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <span className={`text-xs font-bold px-2 py-1 rounded-full w-fit ${item.type === 'work' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}`}>
                {item.duration}
              </span>
              
              <h3 className="text-xl font-bold">{item.role}</h3>
              
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                {item.company}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {item.location && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>
              )}

              <p className="text-muted-foreground mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="education" className="w-full px-4 py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            <span>My</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A timeline of my professional and academic milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;