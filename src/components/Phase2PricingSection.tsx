import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calculator, TrendingUp, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase2PricingSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const pricingScenarios = [
    {
      title: '200K Input Tokens + 5K Output Tokens',
      scenarios: [
        {
          model: 'Gemini 2.5 Pro',
          inputPrice: 0.125,
          outputPrice: 0.025,
          totalCost: 0.15,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200'
        },
        {
          model: 'GPT-5',
          inputPrice: 0.125,
          outputPrice: 0.025,
          totalCost: 0.15,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
      ]
    },
    {
      title: '500K Input Tokens + 10K Output Tokens',
      scenarios: [
        {
          model: 'Gemini 2.5 Pro',
          inputPrice: 0.625,
          outputPrice: 0.075,
          totalCost: 0.7,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200'
        },
        {
          model: 'GPT-5',
          inputPrice: 0.3125,
          outputPrice: 0.05,
          totalCost: 0.3625,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
      ]
    }
  ];

  const dailyUsageScenarios = [
    {
      title: 'Approach 1: Multiple Small Calls (2.5 × 200K tokens)',
      description: 'Breaking down 500K tokens into smaller 200K chunks',
      scenarios: [
        {
          model: 'Gemini 2.5 Pro',
          calculation: '$0.15 × 2.5 calls',
          totalCost: 0.375,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200'
        },
        {
          model: 'GPT-5',
          calculation: '$0.15 × 2.5 calls',
          totalCost: 0.375,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
      ]
    },
    {
      title: 'Approach 2: Single Large Call (1 × 500K tokens)',
      description: 'Using all 500K tokens in one API call',
      scenarios: [
        {
          model: 'Gemini 2.5 Pro',
          calculation: '$0.70 × 1 call',
          totalCost: 0.7,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200'
        },
        {
          model: 'GPT-5',
          calculation: '$0.3625 × 1 call',
          totalCost: 0.3625,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
      ]
    }
  ];

  const formatPrice = (price: number) => `$${price.toFixed(4)}`;

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
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Phase 2 Pricing Analysis
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Input tokens are the big part of this phase, ranging from 200K to 1M tokens. Gemini charges more for input tokens &gt; 200K, while GPT-5 maintains consistent pricing across all token volumes.
            </p>
          </motion.div>

          {/* Pricing Scenarios */}
          <div className="space-y-16">
            {pricingScenarios.map((scenario, scenarioIndex) => (
              <motion.div
                key={scenarioIndex}
                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: scenarioIndex * 0.3 }}
              >
                <motion.h4
                  className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: scenarioIndex * 0.3 + 0.2 }}
                >
                  {scenario.title}
                </motion.h4>

                <div className="grid md:grid-cols-2 gap-8">
                  {scenario.scenarios.map((model, modelIndex) => (
                    <motion.div
                      key={modelIndex}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: scenarioIndex * 0.3 + modelIndex * 0.2 + 0.4 }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                      }}
                    >
                      <div className={`${model.bgColor} ${model.borderColor} border-b p-6`}>
                        <h5 className="text-xl font-bold text-gray-800 flex items-center">
                          <Zap className={`w-5 h-5 ${model.color} mr-2`} />
                          {model.model}
                        </h5>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Input Price */}
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Input Price:</span>
                          <span className="text-gray-800 font-semibold">{formatPrice(model.inputPrice)}</span>
                        </div>

                        {/* Output Price */}
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Output Price:</span>
                          <span className="text-gray-800 font-semibold">{formatPrice(model.outputPrice)}</span>
                        </div>

                        {/* Total Cost */}
                        <motion.div
                          className={`${model.bgColor} p-6 rounded-xl border ${model.borderColor} text-center`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: scenarioIndex * 0.3 + modelIndex * 0.2 + 0.6 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <DollarSign className={`w-5 h-5 ${model.color} mr-1`} />
                            <span className="text-gray-600 font-medium">Total Cost</span>
                          </div>
                          <motion.p
                            className={`text-3xl font-bold ${model.color}`}
                            initial={{ scale: 0 }}
                            animate={isVisible ? { scale: 1 } : {}}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              delay: scenarioIndex * 0.3 + modelIndex * 0.2 + 0.8
                            }}
                          >
                            {formatPrice(model.totalCost)}
                          </motion.p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Daily Usage Scenarios */}
          <div className="mt-16">
            {/* Section Title for Daily Usage */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Price per User per Day
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                1 user performs approximately 6,000 actions per day, equivalent to ~500K tokens
              </p>
            </motion.div>

            {dailyUsageScenarios.map((dailyScenario, dailyIndex) => (
              <motion.div
                key={dailyIndex}
                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: dailyIndex * 0.3 }}
              >
                <motion.h4
                  className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: dailyIndex * 0.3 + 0.2 }}
                >
                  {dailyScenario.title}
                </motion.h4>

                <p className="text-center text-gray-600 mb-6">
                  {dailyScenario.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {dailyScenario.scenarios.map((model, modelIndex) => (
                    <motion.div
                      key={modelIndex}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: dailyIndex * 0.3 + modelIndex * 0.2 + 0.4 }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                      }}
                    >
                      <div className={`${model.bgColor} ${model.borderColor} border-b p-6`}>
                        <h5 className="text-xl font-bold text-gray-800 flex items-center">
                          <Zap className={`w-5 h-5 ${model.color} mr-2`} />
                          {model.model}
                        </h5>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Calculation Breakdown */}
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Calculation:</span>
                          <p className="text-gray-800 font-semibold">{model.calculation}</p>
                        </div>

                        {/* Total Cost */}
                        <motion.div
                          className={`${model.bgColor} p-6 rounded-xl border ${model.borderColor} text-center`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: dailyIndex * 0.3 + modelIndex * 0.2 + 0.6 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <DollarSign className={`w-5 h-5 ${model.color} mr-1`} />
                            <span className="text-gray-600 font-medium">Total Cost</span>
                          </div>
                          <motion.p
                            className={`text-3xl font-bold ${model.color}`}
                            initial={{ scale: 0 }}
                            animate={isVisible ? { scale: 1 } : {}}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              delay: dailyIndex * 0.3 + modelIndex * 0.2 + 0.8
                            }}
                          >
                            {formatPrice(model.totalCost)}
                          </motion.p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Insights */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Key Insights</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Tiered Pricing Impact:</p>
                <p>Gemini charges more for tokens &gt; 200K, while GPT-5 maintains consistent pricing, creating significant cost differences at scale.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Daily Usage Advantage:</p>
                <p>For typical daily usage (6000 actions), GPT-5 costs $0.7375 vs Gemini's $1.075 - saving over 31% per day.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Scalability Factor:</p>
                <p>At 500K tokens, GPT-5 becomes nearly 2x more cost-effective ($0.3625 vs $0.70), making it ideal for high-volume operations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase2PricingSection;
