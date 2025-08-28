import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Award, Play, Image, Camera, Copy, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ComparisonData } from '../types';

const Phase1Section: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  // Gemini Pro vs Amazon Nova data
  const geminiVsNovaData: ComparisonData[] = [
    { feature: 'Semantic Interpretation', geminiPro: 'Excellent', competitor: 'Failed', winner: 'Gemini Pro' },
    { feature: 'Accuracy of Event Log', geminiPro: 'Highly Accurate', competitor: 'Critically Inaccurate', winner: 'Gemini Pro' },
    { feature: 'Context Awareness', geminiPro: 'Flawless', competitor: 'Failed', winner: 'Gemini Pro' },
    { feature: 'Element Identification', geminiPro: 'Highly Specific', competitor: 'Irrelevant', winner: 'Gemini Pro' },
    { feature: 'Alignment with Ground Truth', geminiPro: 'Very High', competitor: 'Zero Correlation', winner: 'Gemini Pro' },
  ];

  // Gemini Pro vs Flash data
  const geminiProVsFlashData: ComparisonData[] = [
    { feature: 'Semantic Interpretation', geminiPro: 'Poor', competitor: 'Excellent', winner: 'Gemini Pro' },
    { feature: 'Accuracy of Event Log', geminiPro: 'Mostly Accurate', competitor: 'Mostly Accurate', winner: 'Tie' },
    { feature: 'Noise Reduction', geminiPro: 'Poor', competitor: 'Excellent', winner: 'Gemini Pro' },
    { feature: 'Element Identification', geminiPro: 'Good+', competitor: 'Good+', winner: 'Tie' },
    { feature: 'Alignment with Ground Truth', geminiPro: 'Low', competitor: 'High', winner: 'Gemini Pro' },
  ];

  // Frame Selection comparison data
  const frameSelectionData: ComparisonData[] = [
    { feature: 'Semantic Interpretation', geminiPro: 'Excellent', competitor: 'Failed multi-step flows', winner: 'Gemini Pro' },
    { feature: 'Accuracy of Event Log', geminiPro: 'Mostly Accurate', competitor: 'Extremely Low', winner: 'Gemini Pro' },
    { feature: 'Noise Reduction', geminiPro: 'Excellent', competitor: 'Damaging hallucinations', winner: 'Gemini Pro' },
    { feature: 'Element Identification', geminiPro: 'Good+', competitor: 'Generic, inaccurate', winner: 'Gemini Pro' },
    { feature: 'Alignment with Ground Truth', geminiPro: 'High', competitor: 'Poor to nonexistent', winner: 'Gemini Pro' },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white">
      <section id="phase1" className="py-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Phase 1: Data Collection from Videos
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The primary goal was to extract user actions from videos using video-to-text LLMs
            </p>
          </motion.div>

          {/* Video-to-Text Block */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-3">Video-to-Text Analysis</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Direct video processing using models trained to understand temporal sequences and user interactions.
              </p>
            </div>

            {/*/!* Demo Video Description *!/*/}
            {/*<motion.div*/}
            {/*  className="mb-12 text-center"*/}
            {/*  initial={{ opacity: 0, y: 20 }}*/}
            {/*  animate={isVisible ? { opacity: 1, y: 0 } : {}}*/}
            {/*  transition={{ duration: 0.8, delay: 0.5 }}*/}
            {/*>*/}
            {/*  <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">*/}
            {/*    This <a*/}
            {/*      href="https://niceonline-my.sharepoint.com/:v:/r/personal/omer_kuleski_nice_com/Documents/Video%20POC/Recordings/SalesForce/2/SALESFORCE_2.mp4?csf=1&web=1&e=I5fFWJ"*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*      className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors"*/}
            {/*    >*/}
            {/*      video*/}
            {/*    </a> shows a user looking for a flight in Skyscanner and then creating a new booking in Salesforce.*/}
            {/*    We let LLMs analyze this video to find user actions.*/}
            {/*  </p>*/}
            {/*</motion.div>*/}

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >

              {/* Gemini Pro vs Flash Comparison */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                  <h5 className="text-xl font-bold text-white mb-2">Amazon Nova vs. Gemini Flash vs. Gemini Pro</h5>
                  <p className="text-blue-100 text-sm">Detailed comparison between Amazon and Google's premium models</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amazon Nova</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gemini Flash</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gemini Pro</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Winner</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {geminiProVsFlashData.map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + 0.7 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.feature}</td>
                            <td className="px-4 py-3 text-sm text-left">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                {geminiVsNovaData[index]?.competitor || '-'}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                row.geminiPro.includes('Excellent') ? 'bg-green-100 text-green-800' :
                                row.geminiPro.includes('Good') ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {row.geminiPro}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                row.competitor.includes('Excellent') ? 'bg-green-100 text-green-800' :
                                row.competitor.includes('Good') ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {row.competitor}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                row.winner.includes('Pro') ? 'bg-blue-100 text-blue-800' :
                                row.winner.includes('Flash') ? 'bg-indigo-100 text-indigo-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                <Award className="w-3 h-3 mr-1" />
                                {row.winner}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-indigo-800">
                      <strong>Critical Difference:</strong> Flash failed to identify copy actions preceding paste operations, which is essential for understanding user workflows.
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Frame Selection Block */}
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-3">Frame Selection Approach</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Alternative method: breaking videos into frames at change points and analyzing with image-to-text models.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Method Explanation */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                  <h5 className="text-lg font-bold text-white flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Method Overview
                  </h5>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <Clock className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Video broken into frames where changes occurred</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <Brain className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Claude Sonnet 3.7 analyzes frame sequences</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <Copy className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Actions inferred from static image analysis</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Comparison Results spanning 2 columns */}
              <motion.div
                className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                variants={itemVariants}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                  <h5 className="text-xl font-bold text-white mb-2">Gemini Pro vs. Claude Sonnet (Frame Analysis)</h5>
                  <p className="text-green-100 text-sm">Gemini is video-to-text and Sonnet is image-to-text</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gemini Pro</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Claude Sonnet</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Winner</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {frameSelectionData.map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + 0.9 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.feature}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  row.geminiPro.includes('Excellent') ? 'bg-green-100 text-green-800' :
                                      row.geminiPro.includes('Good') ? 'bg-blue-100 text-blue-800' :
                                          'bg-yellow-100 text-yellow-800'
                              }`}>
                                {row.geminiPro}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                {row.competitor}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                <Award className="w-3 h-3 mr-1" />
                                {row.winner}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800">
                      <strong>Critical Issues:</strong> Sonnet hallucinated URLs, process names, and data while misinterpreting typing vs. pasting actions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase1Section;
