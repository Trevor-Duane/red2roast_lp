import React from 'react';
import { motion } from 'framer-motion';
import mountains from "../assets/mountains.jpg"
import coffee from '../assets/coffee.jpg'
import community from '../assets/community.jpg'
import { Mountain, Coffee, Award, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mountain,
      title: "Rwenzori Mountains",
      description: "Sourced from the legendary Mountains of the Moon in Uganda, where altitude and climate create perfect growing conditions."
    },
    {
      icon: Coffee,
      title: "Red2Roast Process",
      description: "Our exclusive red2roast method preserves the natural sweetness while developing complex flavor profiles you've never experienced."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked at peak ripeness, each bean is carefully selected to ensure only the finest quality reaches your cup."
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "Direct trade partnerships with local farmers ensure fair compensation and sustainable farming practices."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="gradient-text">Rwenzori Awakening</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every cup tells a story of tradition, innovation, and the pursuit of coffee perfection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-amber-400/80 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Teaser Visuals: The Rwenzori Landscapes
          </h3>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Get a glimpse of the breathtaking origin of our coffee. These are the views that inspire every bean.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl shadow-lg">
              <img className="w-full h-80 object-cover" alt="Misty Rwenzori mountain peak at sunrise" src={mountains} />
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl shadow-lg">
              <img className="w-full h-80 object-cover" alt="A clear stream flowing through the Rwenzori mountains" src={community} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl shadow-lg">
              <img className="w-full h-80 object-cover" alt="Lush green coffee plantation on a hillside in Uganda" src={coffee} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;