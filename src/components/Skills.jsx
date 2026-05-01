import Section from './Section';
import { skills } from '../data/constants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-neon-blue/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center">
              <span className="text-neon-blue mr-2 text-sm">▹</span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-navy-900 border border-navy-600 rounded-md text-sm text-gray-300 hover:text-neon-blue hover:border-neon-blue transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
