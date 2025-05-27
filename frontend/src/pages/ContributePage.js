import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUsers, FaVoteYea, FaExternalLinkAlt } from "react-icons/fa";
import PageLayout from "../components/PageLayout";

const ContributePage = () => {
  const contributionMethods = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Spread Awareness",
      description: "Consistently talking about the Kaveri Engine and the Indian jet engine programme on Social media and among your friends. This helps raise awareness and creates a discourse.",
      action: "Share on Social Media",
      actionType: "social",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Contact Government",
      description: "You can also send the following e-mail to the Ministry of Defence and Ministry of Finance:",
      action: "Email Template",
      actionType: "email-gov",
      link: "#", // Placeholder link
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaVoteYea className="w-8 h-8" />,
      title: "Contact Representatives",
      description: "You can also send the following e-mail to your local MP/MLA:",
      action: "Email Template",
      actionType: "email-rep", 
      link: "#", // Placeholder link
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const handleSocialShare = () => {
    const text = "India needs the Kaveri Engine for true defense independence! Join the movement to #FundKaveriEngine and make India self-reliant. 🇮🇳 ✈️";
    const url = window.location.origin;
    
    if (navigator.share) {
      navigator.share({
        title: "Fund Kaveri Engine",
        text: text,
        url: url,
      });
    } else {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=FundKaveriEngine,MakeInIndia`;
      window.open(twitterUrl, "_blank");
    }
  };

  const handleEmailTemplate = (type) => {
    if (type === "email-gov") {
      window.open("#", "_blank"); // Placeholder for Google Doc link
    } else if (type === "email-rep") {
      window.open("#", "_blank"); // Placeholder for Google Doc link  
    }
  };

  return (
    <PageLayout 
      title="How You Can Contribute"
      subtitle="Every voice matters. Here's how you can help make the Kaveri Engine a reality and secure India's defense independence."
      className="section-gradient"
    >
      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
            <div className="text-white">
              <div className="text-4xl mb-4">✈️</div>
              <p className="text-lg font-bold">Indian Jet Engine Programme</p>
              <p className="text-sm opacity-90">Building the Future of Defense</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Contribution Methods */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {contributionMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
              {/* Background gradient effect */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient}`}></div>
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.gradient} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (method.actionType === "social") {
                      handleSocialShare();
                    } else {
                      handleEmailTemplate(method.actionType);
                    }
                  }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${method.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>{method.action}</span>
                  {method.link && <FaExternalLinkAlt className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Voice Makes a Difference
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            The Kaveri Engine project has all the technical foundations it needs. What it lacks is sustained public pressure and political will. Every social media post, every email, every conversation you have about this topic brings us closer to achieving true defense independence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              #FundKaveriEngine
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              #MakeInIndia
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              #AtmanirbharBharat
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              #DefenseIndependence
            </span>
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center mt-12"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ready to Make a Difference?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSocialShare}
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-soft"
          >
            Share the Movement
          </motion.button>
          <motion.a
            href="/what"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ContributePage;