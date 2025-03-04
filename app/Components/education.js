'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const EducationCard = ({ school, degree, duration, location, logo, image, description }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={school}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjw2Uj5AS0pLTEr/2wBDAR"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full">
            <Image
              src={logo}
              alt={`${school} logo`}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">{degree}</h3>
          <p className="text-xl font-semibold">{school}</p>
        </div>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
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
    <div className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <School className="w-6 h-6 md:w-8 md:h-8" />
          Education <span className="bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">Journey</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;