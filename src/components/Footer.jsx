import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/primary_avatar.jpg'
import { Coffee, Mountain, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <img
              src={avatar}
              alt="Red2Roast Logo"
              className="w-72 h-auto"
            />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Rwenzori</span> Awakening
          </h3>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium Red2Roast Coffee from the Mountains of the Moon
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rwenzori Mountains, Uganda</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@red2roast.com</span>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              © 2025 All rights reserved. | A Red2Roast Coffee Experience
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;