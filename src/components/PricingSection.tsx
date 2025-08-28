import React from 'react';
import { motion } from 'framer-motion';
import {DollarSign, TrendingUp, AlertCircle, Zap} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PricingSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const pricingData = [
    {
      provider: 'Vertex AI (Google)',
      models: [
        { name: 'Gemini Pro', cost: '$0.105', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
        { name: 'Gemini Flash', cost: '$0.036', color: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
      ],
      note: 'Best performance and accuracy'
    },
    {
      provider: 'AWS Bedrock',
      models: [
        { name: 'Nova Pro', cost: '$0.032', color: 'text-gray-700', bgColor: 'bg-gray-100', borderColor: 'border-gray-200' },
      ],
      note: 'Performance was poor. Sonnet is 5-9x more expensive.',
      warning: true
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing Analysis
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We analyzed the cost-effectiveness of the top-performing models. Pricing is based on a pay-as-you-go model, typically billed per 1,000,000 units.
            </p>
          </motion.div>

          {/* Pricing Block */}
          <motion.div
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border border-emerald-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {pricingData.map((provider, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6">
                    <h4 className="text-xl font-bold text-white">{provider.provider}</h4>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      {provider.models.map((model, modelIndex) => (
                        <motion.div
                          key={modelIndex}
                          className={`${model.bgColor} p-6 rounded-xl border ${model.borderColor} text-center`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + modelIndex * 0.1 + 0.7 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <h5 className="font-semibold text-gray-800 mb-2">1-Min Video Cost</h5>
                          <motion.p
                            className={`text-3xl font-bold ${model.color} mb-1`}
                            initial={{ scale: 0 }}
                            animate={isVisible ? { scale: 1 } : {}}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              delay: index * 0.2 + modelIndex * 0.1 + 0.8
                            }}
                          >
                            {model.cost}
                          </motion.p>
                          <p className="text-base font-medium text-gray-500">/ {model.name}</p>
                        </motion.div>
                      ))}
                    </div>

                    {provider.note && (
                      <motion.div
                        className={`flex items-start space-x-3 p-4 rounded-xl ${
                          provider.warning ? 'bg-amber-50 border border-amber-200' : 'bg-emerald-50 border border-emerald-200'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                      >
                        {provider.warning ? (
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={`text-sm font-medium ${
                          provider.warning ? 'text-amber-800' : 'text-emerald-800'
                        }`}>
                          {provider.note}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cost comparison visualization */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
            </motion.div>
          </motion.div>
          {/* Overall Assessment */}
          <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 max-w-6xl mx-auto">
              <div className="mb-6">
                <Zap className="w-8 h-8 mx-auto text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Phase 1 Key Findings</h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-4 bg-white rounded-xl border border-blue-100">
                  <h5 className="font-bold text-blue-800 mb-2">Video-to-Text Superior</h5>
                  <p className="text-gray-700 text-sm">Gemini Pro's native video understanding significantly outperformed all alternatives, providing superior semantic interpretation.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-indigo-100">
                  <h5 className="font-bold text-indigo-800 mb-2">Pricing is expensive</h5>
                  <p className="text-gray-700 text-sm">Using Gemini Pro 2.5 is too expensive at this time</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-green-100">
                  <h5 className="font-bold text-green-800 mb-2">Frame Analysis Limitation</h5>
                  <p className="text-gray-700 text-sm">Breaking videos into frames caused loss of temporal context and introduced significant hallucinations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
