import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

const WhatPage = () => {
  const features = [
    {
      icon: "🔧",
      title: "Indigenous Development",
      description: "The Kaveri engine is an indigenous jet engine development project undertaken by India's Gas Turbine Research Establishment (GTRE), a lab under the Defence Research and Development Organisation (DRDO)."
    },
    {
      icon: "🚀",
      title: "Breaking Dependencies", 
      description: "India can build fighter jets, launch satellites, and even land on the Moon, but still relies on foreign countries for jet engines. This is our weakest link in defense technology."
    },
    {
      icon: "🛡️",
      title: "National Security",
      description: "The Kaveri Engine isn't just about power, it's about sovereignty. Every time we import a fighter jet engine, we risk foreign restrictions, delays, and inflated costs."
    },
    {
      icon: "⚡",
      title: "Ready to Complete",
      description: "Let's finish what we started. The core tech is already developed, and global partners are ready to help refine it. All that's missing is political will and public pressure."
    }
  ];

  return (
    <PageLayout 
      title="What is the Kaveri Engine?"
      subtitle="Understanding India's indigenous jet engine development project and why it matters for our national defense capabilities"
      className="hero-gradient"
    >
      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto w-fit">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 md:p-6 text-center w-fit mx-auto">
              <img src="/Kaveri-generated image.jpg.jpg" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Key Points Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 h-full border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center bg-white rounded-2xl p-12 shadow-elegant"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join the Movement
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Raise your voice, demand action. It's time to <span className="font-semibold text-gray-900">#FundKaveriEngine</span> and fuel India's freedom to fly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/why"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-soft"
          >
            Learn Why It Matters
          </motion.a>
          <motion.a
            href="/contribute"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Take Action Now
          </motion.a>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default WhatPage;