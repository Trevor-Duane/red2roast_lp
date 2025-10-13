import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import EmailCapture from './components/EmailCapture';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Rwenzori Awakening - Premium Red2Roast Coffee Launch</title>
        <meta name="description" content="Join the Rwenzori Awakening coffee revolution. Be the first to experience our premium red2roast coffee from the Mountains of the Moon. Sign up for exclusive early access!" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Hero />
          <EmailCapture />
          <Features />
          <Footer />
        </motion.div>
        <Toaster />
      </div>
    </>
  );
}

export default App;