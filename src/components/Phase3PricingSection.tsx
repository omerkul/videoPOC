import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase3PricingSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const pricingData = [
    { component: "1-minute video input", calculation: "(1.25$ / 1,000,000) * 60", cost: "$0.000075" },
    { component: "Prompt (~500 characters)", calculation: "(1.25$ / 1,000,000) * 500", cost: "$0.000625" },
    { component: "Output (200-300 tokens)", calculation: "(10$ / 1,000,000) * 300", cost: "$0.003" },
    { component: "Total per minute", calculation: "Sum of above", cost: "~$0.0037" }
  ];

  return (
    <div className="bg-gray-50">
      <section className="py">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Pricing Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Pricing Analysis</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Token Analysis</span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>• 1 min video = ~16K tokens</p>
                    <p>• No token limitation problem</p>
                    <p>• Output: ~200-300 tokens (1-2 routines)</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-800">Component</th>
                      <th className="text-left p-4 font-bold text-gray-800">Calculation</th>
                      <th className="text-right p-4 font-bold text-gray-800">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-25' : ''} ${index === pricingData.length - 1 ? 'border-b-2 border-yellow-200 bg-yellow-50' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <td className={`p-4 ${index === pricingData.length - 1 ? 'font-bold text-yellow-800' : 'text-gray-700'}`}>
                          {row.component}
                        </td>
                        <td className={`p-4 ${index === pricingData.length - 1 ? 'font-bold text-yellow-800' : 'text-gray-600'} font-mono text-sm`}>
                          {row.calculation}
                        </td>
                        <td className={`p-4 text-right ${index === pricingData.length - 1 ? 'font-bold text-yellow-800 text-lg' : 'text-gray-700'} font-mono`}>
                          {row.cost}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Daily Cost Analysis */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mt-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <h6 className="text-lg font-bold text-gray-900">Daily Cost Analysis</h6>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-100">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-green-700">For an 8-hour shift:</span>
                  </p>
                  <p className="text-gray-800 font-mono">
                    Cost per agent per day: ~$0.0037 × 60 × 8 = <span className="font-bold text-green-600">$1.776</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase3PricingSection;
