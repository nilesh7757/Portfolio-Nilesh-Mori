'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const EducationCard = ({ school, degree, duration, location, logo, image, description }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="w-full transform-gpu"
  >
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 glassmorphism">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={school}
          className="object-cover transform-gpu will-change-transform"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjw2Uj5AS0pLTEr/2wBDAR"
        />
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="p-4 rounded-full">
            <Image
              src={logo}
              alt={`${school} logo`}
              width={64}
              height={64}
              className="h-16 w-16 object-contain rounded-full transform-gpu"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <CardContent className="p-6 space-y-4 bg-transparent">
        <div>
          <h3 className="text-2xl font-bold text-primary">{degree}</h3>
          <p className="text-xl font-semibold text-foreground">{school}</p>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      school: "Dhirubhai Ambani Institute of ICT",
      link:"https://www.daiict.ac.in/",
      degree: "B.Tech (Honours) in ICT with minor in Computational Science",
      duration: "2023-2027 | Pursuing",
      location: "Gandhinagar, Gujarat",
      logo: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/DAIICTLogo.png",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/DAIICT.png",
      description: "Currently pursuing advanced studies in Information and Communication Technology with a focus on computational science and modern software development."
    },
    {
      school: "Sigma Public School",
      link:"https://www.sigmaschoolpbr.org/",
      degree: "HSC Science",
      duration: "2021-2023 | Completed",
      location: "Porbandar, Gujarat",
      logo: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/SigmaLogo.png",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/Sigma.png",
      description: "Completed higher secondary education with focus on science and mathematics, laying the foundation for engineering studies."
    }
  ];

  return (
    <div className="w-full px-4 py-12 md:py-20">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12 transform-gpu"
          whileHover={{ scale: 1.05 }}
        >
          <School className="w-6 h-6 md:w-8 md:h-8" />
          Education <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 bg-transparent">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;