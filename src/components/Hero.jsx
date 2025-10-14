import React, { useState } from 'react';
import { API_BASE_URL } from '../../config';
import { motion } from 'framer-motion';
import packaging from '../assets/PlaceHolder Coffee.png';
import logo2 from '../assets/secondary_logo.png';
import { toast } from './ui/use-toast';

const Hero = () => {
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

    try {
      const response = await axios.post(`${API_BASE_URL}/compaign`, {
        email,
        source: 'landing page'
      })

      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true)
        setEmail("")

        toast({
          title: "Welcome to the Awakening! ☕",
          description: "You're now on our exclusive early access list. Get ready for something extraordinary!",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      }
      else {

        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-10 pb-20 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/hero.jpg')] bg-cover bg-no-repeat md:bg-cover">

      {/* Floating Logo */}
      <div className="absolute right-0 top-[10%] inline-flex items-center bg-[#8d1922] p-3 md:top-[25%]">
        <img
          src={logo2}
          alt="Red2Roast Logo"
          className="w-36 rounded-lg shadow-2xl md:w-64 md:h-auto"
        />
      </div>

      {/* Title Section */}
      <div className="relative z-10 mx-auto mt-[-250px] max-w-6xl text-center md:mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl lg:text-5xl"
        >
          <span className="text-white">Rwenzori Awakening</span>
        </motion.h1>
      </div>

      {/* Content Box */}
      <div className="absolute bottom-[-250px] flex w-10/12 flex-col items-start justify-center rounded-lg bg-[#faf8f7] shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] md:bottom-[-300px] md:w-11/12 md:flex-row lg:bottom-[-350px] lg:w-10/12 xl:w-8/12">

        {/* Product Image */}
        <div className="flex h-[600px] w-full flex-1 items-center justify-center bg-white p-2 md:h-[600px] md:w-[500px]">
          <img
            src={packaging}
            alt="Packaging"
            className="h-[250px] w-[150px] md:h-[550px] md:w-[330px]"
          />
        </div>

        {/* Text & Form */}
        <div className="flex h-[600px] flex-1 flex-col gap-4 p-6 px-8">
          <div className="flex flex-col gap-2 md:mb-8 md:gap-5">
            <h6 className="text-lg font-medium">Be part of the Rwenzori Awakening</h6>
            <p className="text-base font-light">
              Prepare for a journey from cherry to cup. Our exclusive red2roast process unlocks unparalled flavor from Uganda's legendary Mountains of the Moon.
            </p>
            <p className="text-base font-light">
              Join the pre-launch list for exclusive access, special pricing, gifts and a front-row seat to the Rwenzori Awakening.
            </p>
          </div>

          {/* Email Form */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-start">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 md:w-full md:gap-4 lg:w-10/12 xl:w-10/12">
              <input
                type="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                required
                className="block w-full flex-1 rounded-lg border border-[#aaa197] px-4 py-2 placeholder-[#aaa197] focus:outline-none focus:ring-2 focus:ring-[#ef7d00]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`block w-full self-end rounded-md border px-6 py-2 text-white transition md:flex md:w-4/12 md:items-center md:justify-center ${isSubmitted
                  ? 'bg-[#ef7d00] hover:bg-[#8d1922]'
                  : 'bg-[#aaa197] hover:bg-[#8d1922]'
                  } ${isLoading ? 'bg-[#ef7d00] hover:bg-green-700' : 'bg-[bg-[#aaa197] hover:bg-[#8d1922]]'}`}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                    Subscribing...
                  </div>
                ) : isSubmitted ? (
                  "You're In!"
                ) : (
                  'SUBSCRIBE'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
