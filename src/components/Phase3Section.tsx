import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brain, Target, CheckCircle, Code } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase3Section: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const salesforceResults = {
    label: "Transcribe Travel Details from Skyscanner to Salesforce",
    pattern_sequence_summary: [
      "Click on a data field in the Salesforce 'New Travel Booking' form.",
      "Switch to the Skyscanner window to reference travel information.",
      "Switch back to the Salesforce window.",
      "Input the referenced information into the selected field."
    ],
    variation_notes: "The user repeated this pattern for four different fields: 'To', 'From', 'Departure Date', and 'Return Date'. The method of data entry varied, including typing for text fields and using a calendar selector for date fields."
  };

  const debtCollectionResults = [
    {
      label: "Copy Contact Data from Web App to Email",
      pattern_sequence_summary: [
        "Select a data field in the 'Contact Book' web application",
        "Copy the selected data to the clipboard",
        "Switch to the email application",
        "Select the corresponding placeholder in the email body",
        "Paste the copied data, replacing the placeholder"
      ],
      variation_notes: "This pattern is repeated for multiple fields (ID, First Name, Email, Phone, Debt). The specific data and target placeholder change with each repetition. In one instance, for the Last Name, the user copied the data but then manually typed it instead of pasting."
    },
    {
      label: "Update Email Subject with Customer Name",
      pattern_sequence_summary: [
        "Select and copy the customer first name from the email body",
        "Select the placeholder in the subject line",
        "Paste the first name",
        "Select and copy the customer last name from the email body",
        "Append the last name to the subject line"
      ],
      variation_notes: "The pattern involves two copy-paste actions from within the same application window (email body to subject line), first for the first name and then for the last name."
    }
  ];

  return (
    <div className="bg-gray-50">
      <section id="phase3" className="py-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Phase 3: Direct LLM Routine Mining
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Performing routine mining with LLMs directly from screen recordings
            </p>
          </motion.div>

          {/* Motivation */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Motivation</h4>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We want to be able to perform a routine mining with LLMs directly from screen recordings.
              </p>
            </div>
          </motion.div>

          {/* Workflow */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Workflow</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">1. Screen Recordings</h5>
                  <p className="text-gray-600">We took some of the screen recordings from phase 1</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">2. Prompt Creation</h5>
                  <p className="text-gray-600">We created a prompt that we are going to use for the LLMs</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">3. LLM Analysis</h5>
                  <p className="text-gray-600">We gave to the LLMs to analyze</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Results Overview */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Results</h4>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Like in the previous phase, <span className="font-semibold text-green-600">Gemini 2.5 Pro outperformed GPT-5</span> which was not even close to understanding the video.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Salesforce Video Results */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6">Salesforce2 Video Analysis</h5>
              <p className="text-gray-600 mb-6">In the salesforce2 video it recognized the general pattern:</p>

              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <h6 className="font-semibold text-blue-900 mb-3">Label: {salesforceResults.label}</h6>
                <div className="mb-4">
                  <div className="font-medium text-blue-800 mb-2 block">Pattern Sequence Summary:</div>
                  <ul className="space-y-2">
                    {salesforceResults.pattern_sequence_summary.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-blue-700 text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="text-blue-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-800 mb-2 block">Variation Notes:</div>
                  <p className="text-blue-700">{salesforceResults.variation_notes}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Debt Collection Video Results */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-6">Debt Collection 3 Video Analysis</h5>
              <p className="text-gray-600 mb-6">And also in the debt collection 3 video:</p>

              <div className="space-y-6">
                {debtCollectionResults.map((result, index) => (
                  <div key={index} className="bg-green-50 rounded-2xl p-6">
                    <h6 className="font-semibold text-green-900 mb-3">Label: {result.label}</h6>
                    <div className="mb-4">
                      <div className="font-medium text-green-800 mb-2 block">Pattern Sequence Summary:</div>
                      <ul className="space-y-2">
                        {result.pattern_sequence_summary.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-green-700 text-sm font-medium">{stepIndex + 1}</span>
                            </div>
                            <span className="text-green-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-800 mb-2 block">Variation Notes:</div>
                      <p className="text-green-700">{result.variation_notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Phase3Section;
