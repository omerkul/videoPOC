import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Eye, AlertTriangle, CheckCircle, Target, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase3Section3: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  const membershipCancellationResults = {
    label: "Process Membership Cancellation due to Relocation",
    pattern_sequence_summary: [
      "The agent identifies the customer's account using their phone number, full name, and email address.",
      "In the 'Agent Actions' panel, the agent selects 'Cancel Membership' from the 'Request Type' dropdown.",
      "The agent selects 'Relocation' as the 'Cancellation Reason' from the corresponding dropdown.",
      "Based on the relocation reason, the agent checks the 'Waive 30-Day Notice / Final Fee' checkbox.",
      "The agent types a note into the 'Agent Notes' field to document the reason for waiving the fee.",
      "The agent clicks the 'Submit Request' button to finalize the cancellation.",
      "After the system processes the request, the agent communicates the effective cancellation date and confirmation number to the customer."
    ],
    occurrences: 1,
    primary_applications: ["Cancellation Dashboard"],
    number_of_agents: "1",
    variation_notes: "This specific process involves waiving the final fee due to the customer relocating to an area with no gym locations. Variations of this process would likely involve different cancellation reasons (e.g., cost, dissatisfaction), which might lead the agent to not waive the fee and potentially use the 'AI Assistant' to suggest retention offers."
  };

  const agentSteps = [
    {
      step: "Verification",
      description: "The agent professionally greeted the customer and efficiently verified their identity using their phone number, full name, and email address to access the correct account."
    },
    {
      step: "Identified the Core Issue",
      description: "He understood the customer wanted to cancel due to relocation."
    },
    {
      step: "Applied Policy with Empathy",
      description: "The agent correctly noted the standard 30-day notice policy but recognized that the customer's reason for leaving (relocation to an area with no facilities) warranted an exception."
    },
    {
      step: "Took Decisive Action",
      description: "He used his authorization to waive the 30-day notice and the final prorated fee. This was a critical step that turned a standard cancellation into a positive customer experience."
    },
    {
      step: "Executed the Task",
      description: "He accurately used the internal system to select the correct cancellation reason (\"Relocation\"), document the waived fee, and submit the request."
    },
    {
      step: "Provided Clear Confirmation",
      description: "The agent clearly communicated that the cancellation was effective immediately at the end of the month, that no further charges would occur, and provided a confirmation number for the customer's records."
    }
  ];

  const distractionEvents = [
    { time: "00:35", activity: "Searching for anime on Google" },
    { time: "01:04", activity: "Browsing anime search results again" },
    { time: "01:52", activity: "Browsing videos on YouTube" },
    { time: "02:42", activity: "Browsing the CNN news website after the call ended" }
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-12">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Customer Service Call Analysis */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Customer Service Call Analysis</h4>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                The video shows an agent who is in a call with a customer who wants to cancel the gym membership due to a relocation.
                There is only one business flow that the agent needs to do, which is to cancel the membership.
              </p>

              {/* Process Recognition */}
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  Recognized Process
                </h5>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h6 className="font-semibold text-blue-900 mb-3">Label: {membershipCancellationResults.label}</h6>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="font-medium text-blue-800 block mb-1">Occurrences:</span>
                      <span className="text-blue-700">{membershipCancellationResults.occurrences}</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800 block mb-1">Number of Agents:</span>
                      <span className="text-blue-700">{membershipCancellationResults.number_of_agents}</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800 block mb-1">Primary Application:</span>
                      <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {membershipCancellationResults.primary_applications[0]}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="font-medium text-blue-800 block mb-2">Pattern Sequence Summary:</span>
                    <ul className="space-y-2">
                      {membershipCancellationResults.pattern_sequence_summary.map((step, index) => (
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
                    <p className="text-blue-700">{membershipCancellationResults.variation_notes}</p>
                  </div>
                </div>
              </div>

              {/* Handling Time */}
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-purple-600 mr-2" />
                  Recognized Handling Time
                </h5>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-purple-900">
                    <strong>Process Duration:</strong> The entire interaction, from the beginning of the call to the final goodbye,
                    took approximately <span className="font-bold">2 minutes and 48 seconds</span>.
                  </p>
                </div>
              </div>

              {/* Agent Distractions */}
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-orange-600 mr-2" />
                  Agent Focus Issues Detected
                </h5>
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <p className="text-orange-900 mb-4">
                    The agent was not entirely focused on the customer. While handling the cancellation request,
                    the agent switched to other browser tabs multiple times to engage in personal browsing:
                  </p>
                  <div className="space-y-2 mb-4">
                    {distractionEvents.map((event, index) => (
                      <div key={index} className="flex items-center">
                        <span className="font-mono text-orange-800 bg-orange-200 px-2 py-1 rounded text-sm mr-3">
                          {event.time}
                        </span>
                        <span className="text-orange-700">{event.activity}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-orange-900 font-semibold">
                    This multitasking indicates a significant lack of focus on the primary task of assisting the customer.
                  </p>
                </div>
              </div>

              {/* Steps Agent Did Right */}
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Steps the Agent Did to Solve the Problem
                </h5>
                <div className="space-y-4">
                  {agentSteps.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <h6 className="font-semibold text-green-900 mb-2">
                        {index + 1}. {item.step}
                      </h6>
                      <p className="text-green-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Improvement Suggestions */}
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  How It Could Be Done Better
                </h5>
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h6 className="font-semibold text-red-900 mb-3">1. Lack of Focus and Professionalism</h6>
                    <p className="text-red-800 mb-4">
                      The most significant issue was the agent's multitasking on non-work-related websites during the live customer interaction.
                      While the agent was polite, his attention was divided between the customer and browsing Google, YouTube, and news sites.
                      This is highly unprofessional and creates several risks:
                    </p>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span><strong>Increased Call Time:</strong> The small pauses while the agent switched tabs and browsed likely made the call longer than necessary.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span><strong>Risk of Error:</strong> A distracted agent is more likely to make a mistake, such as selecting the wrong option or misquoting information.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span><strong>Poor Customer Perception:</strong> While the customer may not have known what the agent was doing, they may have perceived the pauses as inefficiency.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <h6 className="font-semibold text-yellow-900 mb-3">2. Failure to Utilize Available Tools (The AI Assistant)</h6>
                    <p className="text-yellow-800 mb-4">
                      The agent completely ignored the AI Assistant panel on the right. This tool is designed to help in these exact scenarios.
                    </p>
                    <div className="bg-yellow-100 rounded-lg p-4">
                      <p className="text-yellow-900 mb-2"><strong>Missed Retention Opportunity:</strong></p>
                      <p className="text-yellow-800 mb-3">
                        Even for a customer who is relocating, the "Suggest Retention Offer" button might have proposed creative solutions, such as:
                      </p>
                      <ul className="space-y-1 text-yellow-700 ml-4">
                        <li>• A complimentary subscription to a virtual fitness platform.</li>
                        <li>• The option to freeze the account for a low fee in case they move back.</li>
                        <li>• A special "welcome back" offer to keep on file.</li>
                      </ul>
                      <p className="text-yellow-800 mt-3">
                        By not checking the AI's suggestions, the agent missed an opportunity to retain the customer in a different capacity
                        or at least enhance the brand's image by offering more than just a simple cancellation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase3Section3;
