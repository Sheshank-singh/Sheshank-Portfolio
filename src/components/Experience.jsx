import Section from './Section';
import { experience } from '../data/constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Section id="experience" title="Where I've Worked">
      <div className="max-w-3xl space-y-12">
        {experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="md:col-span-1 mb-2 md:mb-0 text-sm text-gray-500 font-mono mt-1">
                {exp.duration}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-gray-200">
                  {exp.role} <span className="text-neon-blue">@ {exp.company}</span>
                </h3>
                <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                
                <ul className="space-y-3 list-none">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-neon-blue">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
