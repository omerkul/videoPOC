import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase2Section2: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
  const [isReady, setIsReady] = useState(false);

  // Add a state to ensure component is properly mounted before animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Only render animations when component is ready
  const shouldAnimate = isVisible && isReady;

  const multiUserAnalysisData = [
    {
      criterion: 'Quality of "Business Flow" Identification',
      description: 'Finding meaningful business tasks',
      gemini: 'Excellent. The labels describe clear business objectives like "Search for Customer in Flex Terminal" or "Update Financial Figures in CDM PROD". The summaries narrate a logical business process from start to finish.',
      gpt: 'Poor. The labels describe generic, low-level actions like "Copy data within Excel" or "Navigate and click controls in ABSA Web App". These are not business flows; they are descriptions of UI interactions without capturing the user\'s intent.',
      winner: 'Gemini'
    },
    {
      criterion: 'Cross-Application Pattern Detection',
      description: 'Finding sequences that span multiple apps',
      gemini: 'Excellent. This is the model\'s key strength. Almost every pattern identified is a cross-application workflow. Example: "Search for Customer Identity..." correctly traces a user\'s journey from View Application to SMAPP to XDS. This is a perfect example of what was requested.',
      gpt: 'Poor. Most patterns are confined to a single application (processname is the same throughout the sequence, e.g., "Excel", "Outlook"). The few that hint at a cross-app flow are generic OS interactions, not a meaningful transfer of data between business systems.',
      winner: 'Gemini'
    },
    {
      criterion: 'Semantic Richness & Context',
      description: 'Providing useful context and data',
      gemini: 'Excellent. The pattern_sequence_summary is a human-readable narrative of the task. The variation_notes are insightful, explaining why different sequences were grouped (e.g., "The source application varies... The destination application also varies... The core task... is consistent"). The example_sequence is rich with data, including the actual text copied ("VINCENT NTSHOLO", "11,000") and specific window titles.',
      gpt: 'Poor. The pattern_sequence_summary is a simplistic, mechanical list of actions ("Click... Copy... Click..."). The variation_notes are generic and repetitive ("Minor timing/order differences..."). The example_sequence data is sparse. The text field is almost always null, and target_element identifiers are often empty, removing crucial context.',
      winner: 'Gemini'
    },
    {
      criterion: 'Grouping & Fuzzy Matching',
      description: 'Grouping semantically similar but non-identical sequences',
      gemini: 'Excellent. The model demonstrates sophisticated grouping. The "Copy Case/Customer Details" pattern correctly groups sequences where the source could be CDM, BTP, or View Application, and the destination could be Word, Excel, or Sticky Notes. It understood the semantic intent was the same.',
      gpt: 'Poor. The grouping is very literal and surface-level. It found patterns like "Copy data within Excel" and "Copy data within Outlook" as separate items. It failed to identify a higher-level, more abstract pattern about copying data for a specific purpose.',
      winner: 'Gemini'
    },
    {
      criterion: 'Actionability & Usefulness',
      description: 'Providing results a business could act on',
      gemini: 'High. A business analyst can immediately understand the workflows and identify automation opportunities. For example, the "Update Financial Figures..." pattern (copy once, paste three times) is a prime candidate for automation. The results are clear and directly usable.',
      gpt: 'Low. The findings are not actionable. Knowing a user "Clicks a button in Outlook" or "Copies data in Excel" provides no insight into the business process being performed or how to improve it. An analyst would have to ask, "What data? For what purpose?"',
      winner: 'Gemini'
    }
  ];

  // Safe text rendering component
  const RatingText: React.FC<{ text: string }> = ({ text }) => {
    const ratingColors = {
      'Excellent': 'text-green-700 font-bold',
      'Good': 'text-blue-700 font-bold',
      'Fair': 'text-yellow-700 font-bold',
      'High': 'text-green-700 font-bold',
      'Medium': 'text-yellow-700 font-bold',
      'Poor': 'text-red-700 font-bold',
      'Low': 'text-red-700 font-bold'
    };

    const words = text.split(' ');
    return (
      <span>
        {words.map((word, index) => {
          const cleanWord = word.replace(/[.,]/g, '');
          const punctuation = word.replace(cleanWord, '');
          const colorClass = ratingColors[cleanWord as keyof typeof ratingColors];

          return (
            <span key={index}>
              {colorClass ? (
                <span className={colorClass}>{cleanWord}</span>
              ) : (
                cleanWord
              )}
              {punctuation}
              {index < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="bg-white">
      <section className="py">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Multi-User Analysis Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-2 text-center">Multi-User Analysis: Finding Common Routines</h5>
              <p className="text-gray-600 text-center mb-4">Testing with 3 different users to identify similar routines across users</p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-8 max-w-4xl mx-auto">
                <p className="text-blue-900 text-center text-sm">
                  <strong>Challenge:</strong> We analyzed data from 3 different users and searched for similar routines between them.
                  Only Gemini found meaningful cross-user patterns in this complex scenario.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-800 w-1/5">Evaluation Criterion</th>
                      <th className="text-left p-4 font-bold text-gray-800 w-2/5">Gemini 2.5 Pro</th>
                      <th className="text-left p-4 font-bold text-gray-800 w-2/5">GPT-5</th>
                      <th className="text-center p-4 font-bold text-gray-800 w-1/5">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {multiUserAnalysisData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                      >
                        <td className="p-4 align-top">
                          <div className="font-bold text-gray-900 mb-1">{index + 1}. {row.criterion}</div>
                          <div className="text-xs text-gray-500 italic">{row.description}</div>
                        </td>
                        <td className="p-4 text-gray-600 text-xs align-top">
                          <div>
                            <RatingText text={row.gemini} />
                          </div>
                        </td>
                        <td className="p-4 text-gray-600 text-xs align-top">
                          <div>
                            <RatingText text={row.gpt} />
                          </div>
                        </td>
                        <td className="p-4 align-top text-center">
                          <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium ${
                            row.winner === 'Gemini' ? 'bg-blue-100 text-blue-800' :
                            row.winner === 'GPT-5' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {row.winner}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Final Insights */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-200"
            initial={{ opacity: 0, y: 50 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Insights</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h6 className="font-bold text-gray-900 mb-4 text-green-700">GPT Strengths</h6>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    High-level insight and user intent understanding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Human-readable labels and summaries
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Excellent action flagging (copy/paste detection)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Good generalization across workflows
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h6 className="font-bold text-gray-900 mb-4 text-blue-700">Gemini Strengths</h6>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Process-oriented, end-to-end business workflows
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Highly specific and actionable patterns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Detailed structured data with metadata
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    Captures longer, complex sequences
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-blue-900 text-center">
                <strong>Conclusion:</strong> Neither output is definitively "better"—they serve different purposes.
                GPT excels at high-level reporting and user behavior understanding, while Gemini is superior
                for deep process analysis and RPA discovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase2Section2;
