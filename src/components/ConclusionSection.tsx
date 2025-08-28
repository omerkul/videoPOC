import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ConclusionSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const recommendations = [
    'Superior semantic interpretation of user intent',
    'Exceptional context awareness across applications',
    'Recognizing recuring patterns in user behavior',
    'Excellent in describing business processes'
  ];

  return (
    <div className="bg-gray-50">
      <section id="conclusion" className="py-24">
        <div className="container mx-auto px-6 text-center" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conclusion & Recommendation
            </h3>
          </motion.div>

          {/* Conclusion Block */}
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-100 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="max-w-4xl mx-auto text-gray-700 mb-12 text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Based on comprehensive testing, <strong className="text-gray-900">Gemini 2.5 Pro</strong> is the unequivocally superior model for this task. Its exceptional ability to interpret user intent, maintain context across applications, and produce an accurate, low-noise event log makes it the most reliable and effective solution for automated data collection from videos.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-left bg-white p-4 rounded-xl border border-orange-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{rec}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConclusionSection;
