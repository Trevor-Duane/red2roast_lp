import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RwenzoriMountains from './components/RwenzoriMountains';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <>
      <Helmet>
        <title>Rwenzori Awakening - Premium Red2Roast Coffee Launch</title>
        <meta name="description" content="Join the Rwenzori Awakening coffee revolution. Be the first to experience our premium red2roast coffee from the Mountains of the Moon. Sign up for exclusive early access!" />
      </Helmet>
      
      <div className="h-auto bg-white flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col"
        >
          <Hero />
          <RwenzoriMountains/>
          <ImageGrid/>
          <Footer />
        </motion.div>
        <Toaster />
      </div>
    </>
  );
}

export default App;