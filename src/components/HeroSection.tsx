import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  return (
    <section className="pt-32 pb-12 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LLM-based Data Collection from Videos
            </span>
            <br />
            <motion.span
              className="text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-4xl mx-auto text-gray-600 text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            This report details our investigation into using Large Language Models (LLMs) to automatically extract user actions from screen recordings, enabling more efficient process discovery and analysis.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
