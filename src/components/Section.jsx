import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center">
              <span className="text-neon-blue mr-4">/</span>
              {title}
            </h2>
            <div className="h-1 w-20 bg-neon-blue mt-4 rounded-full opacity-80"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
