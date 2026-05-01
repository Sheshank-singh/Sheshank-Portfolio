import { motion } from 'framer-motion';
import { personalInfo } from '../data/constants';
import { FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neon-blue font-mono mb-6 ml-1"
          >
            Hi, my name is
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100 mb-4 tracking-tight"
          >
            {personalInfo.name}.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 mb-6"
          >
            {personalInfo.title}.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            {personalInfo.subtitle}. <br />
            <span className="text-gray-300 mt-2 block">"{personalInfo.tagline}"</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center px-8 py-4 bg-neon-blue text-navy-900 font-bold rounded-md hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-bold rounded-md hover:bg-neon-blue/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FileText className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
