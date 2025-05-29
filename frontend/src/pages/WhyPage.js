import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

const WhyPage = () => {
  const reasons = [
    {
      number: "01",
      title: "Strategic Independence",
      description: "Eliminates dependence on foreign suppliers who can impose sanctions, restrict technology transfer, or halt deliveries during geopolitical tensions, ensuring uninterrupted defense capabilities.",
      icon: "🛡️"
    },
    {
      number: "02", 
      title: "Technology Sovereignty",
      description: "Develops critical aerospace engineering expertise domestically, creating a foundation for advanced materials science, precision manufacturing, and high-temperature metallurgy that benefits multiple industries.",
      icon: "🔬"
    },
    {
      number: "03",
      title: "Economic Multiplier Effect", 
      description: "Generates high-value jobs, establishes a domestic supply chain ecosystem, and reduces foreign exchange outflow while potentially creating export opportunities for engines and components.",
      icon: "💰"
    },
    {
      number: "04",
      title: "Operational Control",
      description: "Allows customization for specific mission requirements, climate conditions, and performance parameters without waiting for foreign approval or modifications, enabling faster upgrades and maintenance.",
      icon: "⚙️"
    },
    {
      title: "Long-term Cost Efficiency",
      description: "While initial development is expensive, indigenous production reduces per-unit costs over the engine's lifecycle, eliminates markup from foreign vendors, and provides complete control over spare parts and servicing.",
      icon: "📈"
    }
  ];

  return (
    <PageLayout 
      title="Why India MUST Build Its Own Jet Engine"
      subtitle="There are many reasons why India MUST build a Jet Engine but here are the top 5:"
      className="section-gradient"
    >
      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-3xl mx-auto w-fit">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 md:p-6 text-center w-fit mx-auto">
            <div className="text-white">
            <img 
              src="/images/make-india-self-reliant.jpg" 
              alt="Make India self-reliant" 
              className="w-full h-auto rounded-lg sm:w-auto sm:max-w-sm mx-auto" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Reasons List */}
      <div className="space-y-8 mb-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-6">
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{reason.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>
              </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 shadow-elegant text-white"
      >
        <h2 className="text-3xl font-bold mb-6">
          The Time is Now
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Every day we delay is another day of dependence. India has the talent, the technology foundation, and the need. What we need now is the collective will to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contribute"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-soft"
          >
            Take Action Now
          </motion.a>
          <motion.a
            href="/what"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default WhyPage;