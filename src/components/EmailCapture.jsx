import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const existingEmails = JSON.parse(localStorage.getItem('rwenzoriEmails') || '[]');
      if (!existingEmails.includes(email)) {
        existingEmails.push({
          email,
          timestamp: new Date().toISOString(),
          source: 'landing-page'
        });
        localStorage.setItem('rwenzoriEmails', JSON.stringify(existingEmails));
      }

      setIsSubmitted(true);
      setIsLoading(false);
      
      toast({
        title: "Welcome to the Awakening! ☕",
        description: "You're now on our exclusive early access list. Get ready for something extraordinary!",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-green-100 border border-green-300 rounded-3xl p-12"
          >
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">You're In!</h3>
            <p className="text-green-800 text-lg">
              Welcome to the Rwenzori Awakening family. You'll be the first to know when our premium red2roast coffee launches!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white" id="join">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100/50 border border-gray-200 rounded-3xl p-12 shadow-lg"
        >
          <Mail className="w-16 h-16 text-amber-700 mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be Part of the Rwenzori Awakening
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join the pre-launch list for exclusive access, special pricing, and a front-row seat to the Rwenzori Awakening.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white font-semibold px-8 py-7 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Get Early Access
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Exclusive early access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Special launch pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>No spam, ever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;