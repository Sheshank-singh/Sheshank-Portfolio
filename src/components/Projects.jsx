import Section from './Section';
import { projects } from '../data/constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  return (
    <Section id="projects" title="Some Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-navy-800 rounded-lg p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-neon-blue/20 flex flex-col h-full border border-navy-700 hover:border-neon-blue/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="text-neon-blue">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="flex space-x-3 text-gray-400">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-neon-blue transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 mt-auto">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
