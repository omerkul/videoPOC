import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Phase3Section2: React.FC = () => {
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

  const multipleVideoResults = {
    crm_to_form: {
      label: "Transfer Contact Data from CRM to Web Form",
      pattern_sequence_summary: [
        "User opens or navigates to the 'Training CRM' desktop application and the 'Contact Us' web form in the 'Chrome' browser.",
        "In the 'Training CRM' application, the user selects a contact from the list.",
        "User retrieves the First Name, Last Name, Email, and Phone number from the selected CRM contact record.",
        "User populates the 'Name', 'Email', and 'Phone' fields in the 'Contact Us' web form with the corresponding data from the CRM.",
        "User completes the web form by selecting an option from the 'How did you find us?' dropdown and choosing a preferred contact method.",
        "User types a message into the 'Message' text area.",
        "User interacts with the 'Subscribe to mailing list' checkbox.",
        "User clicks the 'Send Message' button to submit the form, sometimes correcting validation errors first.",
        "A 'Thank you. Your form has been received.' message appears, confirming successful submission."
      ],
      occurrences: 10,
      primary_applications: ["Training CRM", "chrome"],
      number_of_agents: "10",
      variation_notes: "This is a core business process with high consistency across all agents. Minor variations include: the specific contact data being transferred, the selection from the 'How did you find us?' dropdown (e.g., Google, Facebook, Seller), the content of the message, and whether the 'Subscribe' checkbox is checked or unchecked. Some agents encountered and successfully corrected form validation errors (e.g., phone number length, invalid characters in email) before final submission."
    },
    skyscanner_to_salesforce: {
      label: "Log Flight Search Details from Skyscanner into Salesforce",
      pattern_sequence_summary: [
        "In the 'Chrome' browser, user has a flight search open on the 'Skyscanner' website.",
        "In the 'Salesforce' application, user opens or creates a 'New Travel Booking' record.",
        "User enters a descriptive name for the travel booking.",
        "User copies the 'From' and 'To' locations from Skyscanner and pastes them into the corresponding fields in the Salesforce form.",
        "User enters the 'Departure Date' and 'Return Date' from Skyscanner into the Salesforce form.",
        "User fills in the 'Number of Travelers' and 'Email' fields.",
        "User saves the new 'Travel Booking' record in Salesforce."
      ],
      occurrences: 3,
      primary_applications: ["Chrome", "Salesforce"],
      number_of_agents: "3",
      variation_notes: "This is a core data transfer process. Variations include the order of copying the 'From' and 'To' locations, the specific flight details (destinations, dates), and whether optional fields like 'Notes' are filled. The starting point also varies: sometimes the agent begins with an open Salesforce form, and other times they first perform the flight search and then create the new Salesforce record."
    }
  };

  return (
    <div className="bg-gray-50">
      <section className="py">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Multiple Video Files Processing */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Process of Multiple Video Files</h4>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                We tried to give the model multiple video files; each video represents an agent that is doing the same process.
              </p>

              {/* CRM to Contact Form Results */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-700 font-bold text-sm">10</span>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900">CRM to Contact Form Process</h5>
                </div>
                <p className="text-gray-600 mb-4">
                  We gave Gemini 2.5 pro 10 videos of the same process – copying data from CRM to a contact form in chrome:
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                  <h6 className="font-semibold text-blue-900 mb-3">Label: {multipleVideoResults.crm_to_form.label}</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-medium text-blue-800 block mb-1">Occurrences:</span>
                      <span className="text-blue-700">{multipleVideoResults.crm_to_form.occurrences}</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800 block mb-1">Number of Agents:</span>
                      <span className="text-blue-700">{multipleVideoResults.crm_to_form.number_of_agents}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-blue-800 block mb-2">Primary Applications:</span>
                    <div className="flex flex-wrap gap-2">
                      {multipleVideoResults.crm_to_form.primary_applications.map((app, index) => (
                        <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-blue-800 block mb-2">Pattern Sequence Summary:</span>
                    <ul className="space-y-2">
                      {multipleVideoResults.crm_to_form.pattern_sequence_summary.map((step, index) => (
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
                    <p className="text-blue-700">{multipleVideoResults.crm_to_form.variation_notes}</p>
                  </div>
                </div>

                <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                  <p className="text-green-800 font-semibold">
                    ✅ Very accurate! Recognized all the 10 agents and the applications.
                  </p>
                </div>
              </div>

              {/* Skyscanner to Salesforce Results */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-700 font-bold text-sm">3</span>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900">Skyscanner to Salesforce Process</h5>
                </div>
                <p className="text-gray-600 mb-4">
                  We tried again with 3 videos of filling a form in salesforce copying data from skyscanner:
                </p>

                <div className="bg-purple-50 rounded-2xl p-6 mb-4">
                  <h6 className="font-semibold text-purple-900 mb-3">Label: {multipleVideoResults.skyscanner_to_salesforce.label}</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-medium text-purple-800 block mb-1">Occurrences:</span>
                      <span className="text-purple-700">{multipleVideoResults.skyscanner_to_salesforce.occurrences}</span>
                    </div>
                    <div>
                      <span className="font-medium text-purple-800 block mb-1">Number of Agents:</span>
                      <span className="text-purple-700">{multipleVideoResults.skyscanner_to_salesforce.number_of_agents}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-purple-800 block mb-2">Primary Applications:</span>
                    <div className="flex flex-wrap gap-2">
                      {multipleVideoResults.skyscanner_to_salesforce.primary_applications.map((app, index) => (
                        <span key={index} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-purple-800 block mb-2">Pattern Sequence Summary:</span>
                    <ul className="space-y-2">
                      {multipleVideoResults.skyscanner_to_salesforce.pattern_sequence_summary.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-purple-700 text-sm font-medium">{index + 1}</span>
                          </div>
                          <span className="text-purple-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-purple-800 block mb-2">Variation Notes:</span>
                    <p className="text-purple-700">{multipleVideoResults.skyscanner_to_salesforce.variation_notes}</p>
                  </div>
                </div>

                <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                  <p className="text-green-800 font-semibold">
                    ✅ Recognized 3 agents doing the same process and the applications.
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

export default Phase3Section2;
