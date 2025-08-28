import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Star, AlertTriangle, CheckCircle, Target, Award, TrendingDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase3Section4: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const updateClientInfoResults = {
    label: "Update Client Name and Address",
    pattern_sequence_summary: [
      "Agent greets the customer and identifies their need to update personal information (name and address) due to a life event.",
      "Agent verifies the customer's identity by collecting their full name, date of birth, and the last four digits of their SSN.",
      "Using the verification details, the agent accesses the client's account, which displays their current information.",
      "Agent gathers the new last name and new mailing address from the customer.",
      "Agent inputs the new last name and address into the 'Update Information' form fields within the agent dashboard.",
      "Agent finalizes the process by clicking the 'Submit Changes' button.",
      "Agent confirms to the customer that their information has been successfully updated and concludes the call."
    ],
    occurrences: 3,
    primary_applications: ["Gemini - Contact Center App"],
    number_of_agents: "3",
    variation_notes: "This is a core process performed by all three agents. Variations exist in agent efficiency and workflow. Agent 1 followed a highly structured, step-by-step verification. Agent 2 was more conversational. Agent 3 struggled with system navigation, requiring a lengthy hold to consult a knowledge base and needing the customer to repeat information, indicating a need for more training."
  };

  const agentPerformance = [
    {
      name: "Alex",
      time: "1 minute, 9 seconds",
      performance: "Best",
      steps: "Greeted the customer, efficiently verified their identity with three data points, directly entered the new name and address into the form, submitted the changes, and confirmed completion.",
      focus: "Completely focused",
      color: "green"
    },
    {
      name: "Ben",
      time: "1 minute, 11 seconds",
      performance: "Good",
      steps: "Followed a similar efficient path to Alex but also asked for the spelling of the last name to ensure accuracy and proactively informed the customer that a new debit card would be sent.",
      focus: "Not completely focused*",
      color: "yellow"
    },
    {
      name: "Chloe",
      time: "2 minutes, 19 seconds",
      performance: "Worst",
      steps: "Verified the customer's identity but then became confused about the process. She put the customer on hold twice, consulted a knowledge base provided by the AI Assistant, and asked the customer to repeat the address information before finally submitting the changes.",
      focus: "Not focused",
      color: "red"
    }
  ];

  const chloeErrors = [
    "She misspelled the last name \"Davis\" as \"David\"",
    "She entered the street name as \"Ok Avenue\" instead of \"Oak Avenue\"",
    "She entered an incomplete zip code of \"6270\" instead of the correct \"62704\""
  ];

  return (
    <div className="bg-gray-50">
      <section className="py">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">3 Different Expertise</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scenario: An agent is getting a call from a customer that's got married and needs to update her last name and address.
            </p>
          </motion.div>

          {/* Process Recognition */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                Recognized Routine
              </h4>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h5 className="font-semibold text-blue-900 mb-3">Label: {updateClientInfoResults.label}</h5>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="font-medium text-blue-800 block mb-1">Occurrences:</span>
                    <span className="text-blue-700">{updateClientInfoResults.occurrences}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-800 block mb-1">Number of Agents:</span>
                    <span className="text-blue-700">{updateClientInfoResults.number_of_agents}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-800 block mb-1">Primary Application:</span>
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {updateClientInfoResults.primary_applications[0]}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-medium text-blue-800 block mb-2">Pattern Sequence Summary:</span>
                  <ul className="space-y-2">
                    {updateClientInfoResults.pattern_sequence_summary.map((step, index) => (
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
                  <span className="font-medium text-blue-800 block mb-2">Variation Notes:</span>
                  <p className="text-blue-700">{updateClientInfoResults.variation_notes}</p>
                </div>
              </div>

              <div className="bg-green-100 rounded-xl p-4 border border-green-200 mt-6">
                <p className="text-green-800 font-semibold">
                  ✅ It recognized the different expertise level, stating that Agent 3 needs more training.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Agent Performance Comparison */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-purple-600 mr-3" />
                Agent Performance Analysis
              </h4>

              <div className="grid gap-6">
                {agentPerformance.map((agent, index) => (
                  <div key={index} className={`border-l-4 ${
                    agent.color === 'green' ? 'border-green-500 bg-green-50' :
                    agent.color === 'yellow' ? 'border-yellow-500 bg-yellow-50' :
                    'border-red-500 bg-red-50'
                  } rounded-r-xl p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-xl font-bold text-gray-900">{agent.name}</h5>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          agent.color === 'green' ? 'bg-green-200 text-green-800' :
                          agent.color === 'yellow' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {agent.performance} Performer
                        </span>
                        <span className="font-mono text-sm bg-gray-200 px-3 py-1 rounded">
                          {agent.time}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-medium text-gray-800 block mb-2">Steps Taken:</span>
                        <p className="text-gray-600 text-sm">{agent.steps}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-800 block mb-2">Focus Level:</span>
                        <p className={`text-sm font-medium ${
                          agent.focus === 'Completely focused' ? 'text-green-700' :
                          agent.focus.includes('Not completely') ? 'text-yellow-700' :
                          'text-red-700'
                        }`}>{agent.focus}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Model Questions and Analysis */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                Model Analysis Results
              </h4>

              <div className="space-y-8">
                {/* Best and Worst Performer */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h5 className="font-bold text-green-900 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Best Performer: Alex
                    </h5>
                    <p className="text-green-700 text-sm">
                      He was the most efficient agent, resolving the customer's issue in the shortest time (1:09).
                      His workflow was seamless, he did not place the customer on hold, and he completed the task
                      with confidence and professionalism.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h5 className="font-bold text-red-900 mb-3 flex items-center">
                      <TrendingDown className="w-5 h-5 mr-2" />
                      Worst Performer: Chloe
                    </h5>
                    <p className="text-red-700 text-sm">
                      Her call was over 50% longer than the other agents'. Her lack of familiarity with the system
                      created a disjointed and inefficient experience for the customer, requiring two holds and
                      forcing the customer to repeat information. This indicates a significant training gap.
                    </p>
                  </div>
                </div>

                {/* Process Improvements */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h5 className="font-bold text-blue-900 mb-4">How Can the Process Be Better?</h5>
                  <div className="space-y-4">
                    <div>
                      <h6 className="font-semibold text-blue-800 mb-2">Agent Training:</h6>
                      <p className="text-blue-700 text-sm">
                        The primary opportunity for improvement is agent training. Agent Chloe's performance clearly shows
                        she was not comfortable with a basic and routine task. Targeted training on the system's core
                        workflows would prevent the holds and confusion she experienced.
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-blue-800 mb-2">Proactive AI Assistance:</h6>
                      <p className="text-blue-700 text-sm">
                        The AI assistant was helpful in providing the correct procedure when the agent was stuck. However,
                        it could be enhanced to be more proactive. By recognizing keywords like "married," "moved," or
                        "change my name," the assistant could automatically surface the relevant knowledge base article at
                        the start of the interaction, preventing agent confusion from the outset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Model Accuracy Issues */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                Model Accuracy Issues
              </h4>

              <div className="space-y-6">
                {/* Missed Errors */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h5 className="font-bold text-orange-900 mb-3">Missed Data Entry Errors</h5>
                  <p className="text-orange-800 mb-4">
                    <strong>Model claimed:</strong> "No, there were no errors in the final updated information."
                  </p>
                  <p className="text-orange-800 mb-4">
                    <strong>Reality:</strong> The model missed Chloe's mistakes:
                  </p>
                  <ul className="space-y-2">
                    {chloeErrors.map((error, index) => (
                      <li key={index} className="flex items-start text-orange-700">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timing Confusion */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h5 className="font-bold text-yellow-900 mb-3">Timing Analysis Error</h5>
                  <p className="text-yellow-800 mb-4">
                    <strong>Model claimed:</strong> "Alex and Ben were completely focused. [...] Chloe was not completely focused."
                  </p>
                  <p className="text-yellow-800">
                    <strong>Reality:</strong> The model was not entirely correct. Ben was navigating to CNN and YouTube
                    in the middle of the call, but the model thought it was after the call had already ended.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <p className="text-red-800 text-center font-semibold">
                    ⚠️ These accuracy issues highlight the importance of human oversight in AI-driven analysis
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

export default Phase3Section4;
