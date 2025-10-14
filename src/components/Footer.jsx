import React, { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <footer className="bg-[#023548] text-white mt-12 py-6 md:py-12 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" onClick={() => openModal('Follow us on Facebook!')}>
              <FaFacebook />
            </a>
            <a href="#" onClick={() => openModal('Follow us on Twitter!')}>
              <FaTwitter />
            </a>
            <a href="#" onClick={() => openModal('Follow us on Instagram!')}>
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => openModal('Explore our Coffee Beans')} className="hover:underline">Coffee Beans</button>
            </li>
            <li>
              <button onClick={() => openModal('Discover our Ground Coffee')} className="hover:underline">Ground Coffee</button>
            </li>
            <li>
              <button onClick={() => openModal('Business Solutions for Coffee')} className="hover:underline">Business</button>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => openModal('Manage your orders')} className="hover:underline">Orders</button>
            </li>
            <li>
              <button onClick={() => openModal('Payment information')} className="hover:underline">Payment</button>
            </li>
            <li>
              <button onClick={() => openModal('Shipping & Return info')} className="hover:underline">Shipping & Return</button>
            </li>
            <li>
              <button onClick={() => openModal('Terms & Conditions')} className="hover:underline">Terms & Conditions</button>
            </li>
            <li>
              <button onClick={() => openModal('Frequently Asked Questions')} className="hover:underline">FAQ</button>
            </li>
            <li>
              <button onClick={() => openModal('Login to your account')} className="hover:underline">Login</button>
            </li>
          </ul>
        </div>

        {/* About Red2Roast */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Red2Roast</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => openModal('Learn about our company')} className="hover:underline">Our Company</button>
            </li>
            <li>
              <button onClick={() => openModal('Take our Coffee Quiz')} className="hover:underline">Advice / Coffee Quiz</button>
            </li>
            <li>
              <button onClick={() => openModal('Join the Coffee Club')} className="hover:underline">Coffee Club</button>
            </li>
            <li>
              <button onClick={() => openModal('Visit our shops')} className="hover:underline">Shops</button>
            </li>
            <li>
              <button onClick={() => openModal('Learn about our Farmer Program')} className="hover:underline">Farmer Program</button>
            </li>
            <li>
              <button onClick={() => openModal('Red Cherry Foundation')} className="hover:underline">Red Cherry Foundation</button>
            </li>
            <li>
              <button onClick={() => openModal('Our mission')} className="hover:underline">Mission</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Info</DialogTitle>
            <Description>{modalContent}</Description>
            <div className="flex gap-4">
              <button onClick={closeModal}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </footer>
  );
};

export default Footer;
