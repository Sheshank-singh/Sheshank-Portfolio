import Section from './Section';
import { personalInfo } from '../data/constants';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          I'm currently looking for new opportunities in AI/ML engineering, research, and development. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center px-8 py-4 border-2 border-neon-blue text-neon-blue font-mono rounded hover:bg-neon-blue/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="mr-2" size={20} />
            Say Hello
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-12 flex justify-center space-x-8"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
            <GithubIcon size={28} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
            <LinkedinIcon size={28} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
