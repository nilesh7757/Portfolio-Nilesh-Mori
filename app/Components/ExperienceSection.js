import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Intern',
    company: 'Craft Silicon Foundation',
    link:'https://www.craftsilicon.com/about/craft-silicon-foundation/',
    duration: 'Rural Internship 2024',
    description: 'Helped Society to improve at Sadanpur,Panchmahal '
  },
];

const ExperienceSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    className="space-y-6"
  >
    {experiences.map((exp, index) => (
      <motion.div
        key={exp.role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        className="relative pl-4 border-l-2 border-blue-600 transform-gpu"
      >
        <h6 className="text-lg md:text-xl font-semibold">{exp.role}</h6>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer" 
          href={exp.link}
        >
          {exp.company}
        </a>
        <p className="text-sm text-gray-500">{exp.duration}</p>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{exp.description}</p>
      </motion.div>
    ))}
  </motion.div>
);

export default ExperienceSection; 