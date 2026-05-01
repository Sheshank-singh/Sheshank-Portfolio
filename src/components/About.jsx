import Section from './Section';
import { personalInfo } from '../data/constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 text-lg text-gray-400 leading-relaxed space-y-6"
        >
          <p>{personalInfo.about}</p>
          <p>
            Fast-forward to today, and I’ve had the privilege of building <span className="text-neon-blue">modular ML pipelines</span>, implementing <span className="text-neon-blue">Out-of-Distribution detection</span>, and contributing to cutting-edge models like <span className="text-neon-blue">Google Gemma</span>. My main focus these days is building scalable, interpretable, and impactful AI solutions for real-world problems.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-2 border-neon-blue rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-navy-800 rounded-xl overflow-hidden z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300">
              {/* Replace with actual image later, using a solid color block for now */}
              <div className="w-full h-full bg-navy-700 flex items-center justify-center text-4xl text-navy-900 font-bold border border-navy-600 rounded-xl">
                <span className="text-neon-blue">S</span>S
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
