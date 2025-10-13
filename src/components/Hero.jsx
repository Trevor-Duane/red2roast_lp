import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/primary_logo.jpg'
import logo2 from '../assets/secondary_logoo.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-10 pb-20 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/bg-hero.png')] bg-cover">
      
      {/* <div className="bg-none h-20 w-full flex items-center justify-center absolute top-0 mb-36">
        <div className='bg-none w-4/5 flex items-center justify-between'>
          <img
            src={logo2}
            alt="Red2Roast Logo"
            className="w-64 h-auto shadow-2xl rounded-lg"
          />
          <button className="bg-red-600 text-white px-[40px] py-[16px] rounded-xl">Join waitlist</button>
        </div>

      </div> */}

      <div className="relative z-10 text-center max-w-6xl mx-auto mt-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center mb-4 p-4 bg-red-600 rounded-xl"
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
          <span className="text-white">
            Rwenzori
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-700 via-red-600 to-orange-800 bg-clip-text text-transparent">Awakening</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A coffee experience born from the mists of the Rwenzori Mountains, where every cup takes you on a journey from cherry to perfection. Our exclusive Red2Roast process unlocks the unparalleled flavors of Uganda’s legendary Mountains of the Moon
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg text-white mb-12 max-w-2xl mx-auto"
        >
          Prepare for a journey from cherry to cup. Our exclusive red2roast process unlocks unparalleled flavor from Uganda's legendary Mountains of the Moon.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-16"
        >
          <img
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-2xl object-cover border-4 border-[#f1c177]/30"
            alt="Premium red2roast coffee beans from Rwenzori Mountains"
            src="https://images.unsplash.com/photo-1671835614123-8acbd37978c3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-red-700 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-3 text-white"
        >
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <span className="font-semibold">The Awakening is LIVE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;