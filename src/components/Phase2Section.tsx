import React from 'react';
import { motion } from 'framer-motion';
import { Search, GitBranch, Users, MessageCircle, Brain, Database, AlertTriangle, Zap, Target, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { RoutineItem } from '../types';

const Phase2Section: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  // 150 Actions Test Data
  const mlEngineRoutines: RoutineItem[] = [
    {
      title: 'Freetext Insertion for Travel Booking',
      items: [
        'Creating travel booking in Salesforce',
        'Copying details from Skyscanner',
        'Direct text insertion workflow'
      ]
    },
    {
      title: 'Multi-Application Copy-Paste Routine',
      items: [
        'Travel booking creation in Salesforce',
        'Copying from CRM, Skyscanner, and Viber',
        'Google search integration',
        'Complex multi-source data transfer'
      ]
    }
  ];

  const geminiRoutines: RoutineItem[] = [
    {
      title: 'Flight Search Routine',
      items: [
        'Enter departure and destination locations on Skyscanner',
        'Select travel dates from calendar',
        'Execute flight search',
        'Navigate back through results'
      ]
    },
    {
      title: 'Cross-Application Data Transfer',
      items: [
        'Navigate to source application (Skyscanner, CRM)',
        'Select and copy relevant data',
        'Switch to Salesforce application',
        'Paste data into appropriate fields'
      ]
    }
  ];

  const sonnetRoutines: RoutineItem[] = [
    {
      title: 'Detailed Flight Search',
      items: ['Comprehensive Skyscanner workflow with navigation']
    },
    {
      title: 'CRM to Salesforce Phone Transfer',
      items: ['Copy phone number from CRM and paste into Salesforce form']
    },
    {
      title: 'Travel Booking Creation Process',
      items: ['Complete Salesforce booking creation by copying from Skyscanner']
    },
    {
      title: 'Viber Messaging Routine',
      items: ['Send messages through Viber application']
    },
    {
      title: 'Web Search in New Tab',
      items: ['Perform Google search in browser new tab']
    }
  ];

  // 3676 Actions Test Data
  const mlEngine3676Routines: string[] = [
    'Copy Paste Freetext in absacorp.sharepoint.com i.absa.co.za msedgewebview2 winword',
    'Copy Paste Freetext in i.absa.co.za msedgewebview2 outlook presentationhost sybrin-instance2.absa.co.za',
    'Freetext insertion in forms.office.com xparap01',
    'Pasted text in servicemanagersmapp-prod.pdintsmprod.aws.dsarena.com www.online.xds.co.za',
    'Paste Freetext in flex'
  ];

  const gemini3676Routines: RoutineItem[] = [
    {
      title: 'Navigate and search in CDM PROD',
      items: ['Multiple click interactions with CDM PROD system']
    },
    {
      title: 'Input text into log comment field',
      items: ['Click textarea, input text, use keyboard shortcuts']
    },
    {
      title: 'Navigate to search application',
      items: ['Click search, input application number, click search button']
    },
    {
      title: 'Copy-paste actions',
      items: ['Right-click, paste with Ctrl+V']
    },
    {
      title: 'Excel interactions',
      items: ['Click taskbar, interact with Excel, return to CDM PROD']
    },
    {
      title: 'Flex session login',
      items: ['Complex login sequence with multiple key presses']
    },
    {
      title: 'XDS portal search',
      items: ['Navigate portal, search consumer data, download PDF']
    }
  ];

  const gpt5Routines: RoutineItem[] = [
    {
      title: 'Navigate CDM PROD (Sybrin)',
      items: ['Click within sybrin web app, interact with elements']
    },
    {
      title: 'Copy from web application',
      items: ['Select field, press Ctrl+C']
    },
    {
      title: 'Copy cell/text in Excel',
      items: ['Select spreadsheet region, copy to clipboard']
    },
    {
      title: 'Copy to Word',
      items: ['Transfer data from other apps into document']
    },
    {
      title: 'Switch to Excel via Explorer',
      items: ['Window management and application switching']
    },
    {
      title: 'Copy in PowerPoint',
      items: ['Select slide element, copy content']
    }
  ];

  const tokenLimits = [
    { model: 'Gemini 2.5 Pro', limit: '1,048,576', status: 'success' },
    { model: 'Claude Sonnet 3.7', limit: '200,000', status: 'error' },
    { model: 'Amazon Nova Pro', limit: '300,000', status: 'warning' },
    { model: 'Amazon Nova Premier', limit: '1,000,000', status: 'success' },
    { model: 'ChatGPT-5', limit: '400,000', status: 'warning' }
  ];

  const analysisData = [
    {
      criterion: 'Quality of "Business Flow" Identification',
      description: 'Finding meaningful business tasks',
      gemini: 'Excellent. The labels describe discrete business processes with a clear start and end. Examples like "Perform Flex session login" or "Navigate to XDS portal and perform a search" represent complete, understandable user goals.',
      gpt: 'Fair. This is a mixed bag. It successfully identifies one strong business flow ("Copy from web... then paste into Word"). However, its most frequent pattern (559 occurrences) is "Navigate / interact inside CDM PROD," which is too generic to be a useful business task. It describes actions more than tasks.',
      winner: 'Gemini'
    },
    {
      criterion: 'Cross-Application Pattern Detection',
      description: 'Finding sequences that span multiple apps',
      gemini: 'Good. It clearly identifies cross-application workflows, such as "Open Excel, interact with it, then return to CDM PROD." The example_sequence correctly shows the user switching between explorer, EXCEL, and sybrin-instance2.absa.co.za.',
      gpt: 'Good. It also successfully identifies a key cross-application pattern: "Copy from web (or other app) then paste into Word," showing a data transfer from i.absa.co.za to WINWORD. This is a significant improvement over the previous round\'s results.',
      winner: 'Tie'
    },
    {
      criterion: 'Semantic Richness & Context',
      description: 'Providing useful context and data',
      gemini: 'Excellent. The summaries are step-by-step instructions. The example_sequence is very rich, capturing specific target_element identifiers like applicationNumber, searchButton, and freeText, which provide deep insight into what the user is doing. It extracts the actual text being pasted or searched for.',
      gpt: 'Good. The summaries are also human-readable and clear. It effectively uses flags like isCopyAction and isPasteAction and extracts the copied text. However, the identifiers in the top pattern are very generic ("CDM PROD"), providing less specific context than Result 1.',
      winner: 'Gemini'
    },
    {
      criterion: 'Grouping & Fuzzy Matching',
      description: 'Grouping semantically similar but non-identical sequences',
      gemini: 'Excellent. The grouping is specific and task-oriented. "Perform Flex session login" correctly groups a complex series of key presses and inputs into a single, logical task. The variation_notes are specific and insightful.',
      gpt: 'Fair. The model shows it can perform fuzzy matching well (e.g., in the "Copy from web... then paste into Word" pattern, it notes "Source process varies"). However, its top pattern ("Navigate / interact...") feels like an example of overly broad grouping, lumping too many dissimilar navigation actions into one vague category.',
      winner: 'Gemini'
    },
    {
      criterion: 'Actionability & Usefulness',
      description: 'Providing results a business could act on',
      gemini: 'High. All the patterns identified in Result 1 are clear candidates for process improvement or automation. A business analyst can look at "Navigate to XDS portal and perform a search" and immediately design a bot to replicate that exact workflow.',
      gpt: 'Medium. The "Copy...then paste into Word" pattern is highly actionable. However, the most frequent findings like "Navigate / interact..." or "Open / switch to Excel" are less useful. They tell you what app the user is in, but not why or what business goal they are trying to achieve.',
      winner: 'Gemini'
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

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
      <section id="phase2" className="py-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Phase 2: Routine Mining
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              After extracting actions, the next step is to identify recurring patterns or "routines." We tested routine identification capabilities across different approaches using varying amounts of user action data.
            </p>
          </motion.div>

          {/* Initial 150 Actions Test */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comparison with 150 User Actions</h4>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* ML Engine Baseline */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
                  <div className="flex items-center">
                    <Database className="w-6 h-6 text-white mr-3" />
                    <h4 className="text-xl font-bold text-white">ML Engine (Baseline)</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    On-premise ML engine identified two main travel booking routines with different data insertion patterns.
                  </p>

                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  >
                    {mlEngineRoutines.map((routine, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(249, 250, 251, 0.8)"
                        }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Search className="w-4 h-4 text-gray-600 mr-2" />
                          {routine.title}
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          {routine.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + itemIndex * 0.1 + 0.5 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Gemini Results */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
                  <div className="flex items-center">
                    <GitBranch className="w-6 h-6 text-white mr-3" />
                    <h4 className="text-xl font-bold text-white">Gemini 2.5 Pro</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Gemini identified two high-level, distinct routines focusing on core workflow patterns.
                  </p>

                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  >
                    {geminiRoutines.map((routine, index) => (
                      <motion.div
                        key={index}
                        className="bg-blue-50 p-4 rounded-xl border border-blue-200"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(239, 246, 255, 0.8)"
                        }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Search className="w-4 h-4 text-blue-600 mr-2" />
                          {routine.title}
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          {routine.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + itemIndex * 0.1 + 0.6 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Sonnet Results */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-white mr-3" />
                    <h4 className="text-xl font-bold text-white">Sonnet 3.7</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Sonnet identified five more granular routines, breaking down processes into specific, detailed sub-tasks.
                  </p>

                  <motion.div
                    className="bg-purple-50 p-4 rounded-xl border border-purple-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(250, 245, 255, 0.8)"
                    }}
                  >
                    <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <MessageCircle className="w-4 h-4 text-purple-600 mr-2" />
                      Found 5 Granular Routines
                    </h5>
                    <motion.div
                      className="space-y-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                    >
                      {sonnetRoutines.map((routine, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start text-gray-700 text-sm p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                          variants={itemVariants}
                          whileHover={{ x: 5, color: "#7c3aed" }}
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium block">{routine.title}</span>
                            <span className="text-xs text-gray-500">{routine.items[0]}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scaling Up to 3676 Actions */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">Scaling Up: Testing with 3,676 Actions</h4>

            {/* Token Limitation Challenge */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-red-200 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center mb-8">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h5 className="text-2xl font-bold text-gray-900 mb-4">The Token Limitation Challenge</h5>
                <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  When we scaled up to 3,676 actions from the same user on the same day, we encountered significant token limitations.
                  The refined data reached ~986,000 tokens, which is extremely high.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Token Limits */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h6 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    Maximum Input Tokens
                  </h6>
                  <div className="space-y-3">
                    {tokenLimits.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-3 rounded-lg border"
                        style={{
                          backgroundColor: item.status === 'success' ? '#f0fdf4' :
                                          item.status === 'warning' ? '#fffbeb' : '#fef2f2',
                          borderColor: item.status === 'success' ? '#bbf7d0' :
                                      item.status === 'warning' ? '#fed7aa' : '#fecaca'
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <span className="text-gray-800 font-medium">{item.model}:</span>
                        <span className={`font-mono text-sm font-bold ${
                          item.status === 'success' ? 'text-green-700' :
                          item.status === 'warning' ? 'text-yellow-700' : 'text-red-700'
                        }`}>
                          {item.limit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Data Optimization */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h6 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-purple-600 mr-2" />
                    Data Optimization Results
                  </h6>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-800">Original JSON</div>
                      <div className="text-2xl font-bold text-red-600">~986,000 tokens</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800">Optimized CSV</div>
                      <div className="text-2xl font-bold text-green-600">~278,000 tokens</div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Even after optimization, still exceeded limits for Sonnet 3.7 and approached Nova Pro's ceiling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Available Options */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 max-w-3xl mx-auto">
                <h6 className="font-bold text-blue-900 mb-4 text-center">Available Options</h6>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <span className="text-blue-800">Use Gemini 2.5 Pro, Amazon Nova Premier, or GPT-5</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <span className="text-blue-800">Use smaller data chunks which can lead to missing routines</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3676 Actions Results */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* ML Engine Results - 3676 */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-4">
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-white mr-2" />
                    <h4 className="text-lg font-bold text-white">ML Engine</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">Found 5 routines:</p>
                  <div className="space-y-2">
                    {mlEngine3676Routines.map((routine, index) => (
                      <motion.div
                        key={index}
                        className="text-xs text-gray-600 p-2 bg-gray-50 rounded border"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        {index + 1}. {routine}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Gemini CSV Results */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                  <div className="flex items-center">
                    <GitBranch className="w-5 h-5 text-white mr-2" />
                    <h4 className="text-lg font-bold text-white">Gemini 2.5 Pro (CSV ~278K tokens)</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">Found 7 routines:</p>
                  <div className="space-y-3">
                    {gemini3676Routines.map((routine, index) => (
                      <motion.div
                        key={index}
                        className="bg-blue-50 p-3 rounded border text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.0 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="font-semibold text-gray-800 mb-1">{routine.title}</div>
                        <div className="text-gray-600">{routine.items[0]}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* GPT-5 Results */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4">
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-white mr-2" />
                    <h4 className="text-lg font-bold text-white">GPT-5 (CSV)</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">Found 6 routines:</p>
                  <div className="space-y-3">
                    {gpt5Routines.map((routine, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 p-3 rounded border text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="font-semibold text-gray-800 mb-1">{routine.title}</div>
                        <div className="text-gray-600">{routine.items[0]}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Comprehensive Analysis Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-2 text-center">Detailed Comparison of Results</h5>
              <p className="text-gray-600 text-center mb-8">This table breaks down how each result performs against the key evaluation criteria.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-800 w-1/5">Evaluation Criterion</th>
                      <th className="text-left p-4 font-bold text-gray-800 w-2/5">Gemini 2.5 Pro</th>
                      <th className="text-left p-4 font-bold text-gray-800 w-2/5">ChatGPT 5</th>
                      <th className="text-center p-4 font-bold text-gray-800 w-1/5">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-25' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.3 + index * 0.1 }}
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
                            row.winner === 'ChatGPT' ? 'bg-green-100 text-green-800' :
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


        </div>
      </section>
    </div>
  );
};

export default Phase2Section;
