import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/primary_logo.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <img
            src={logo}
            alt="Red2Roast Logo"
            className="w-64 h-auto shadow-2xl rounded-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-amber-700 via-red-700 to-orange-800 bg-clip-text text-transparent">
            Rwenzori
          </span>
          <br />
          <span className="text-gray-900">Awakening</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          A coffee experience born from the mists of the Rwenzori Mountains.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Prepare for a journey from cherry to cup. Our exclusive red2roast process unlocks unparalleled flavor from Uganda's legendary Mountains of the Moon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-16"
        >
          <img
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-2xl object-cover border-4 border-amber-600/30"
            alt="Premium red2roast coffee beans from Rwenzori Mountains"
           src="https://images.unsplash.com/photo-1671835614123-8acbd37978c3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-3 text-amber-800"
        >
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-semibold">Campaign 1: The Awakening is LIVE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;