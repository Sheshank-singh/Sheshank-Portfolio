import Section from './Section';
import { achievements } from '../data/constants';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <Section id="achievements" title="Awards & Achievements">
      <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-600 before:to-transparent">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy-900 bg-navy-700 group-hover:bg-neon-blue group-hover:text-navy-900 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10">
              <Trophy size={16} />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-navy-800 border border-navy-700 hover:border-neon-blue/50 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-gray-200">{achievement.title}</div>
              </div>
              <div className="text-sm text-neon-blue mb-2 font-mono">{achievement.date}</div>
              <div className="text-sm text-gray-400 font-medium mb-2">{achievement.organization}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
