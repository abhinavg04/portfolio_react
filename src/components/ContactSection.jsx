import React from 'react';
import ContactButton from './ContactButton';

const ContactSection = () => {
  return (
    <div className="w-full py-16 px-6 bg-white" id='contact'>
      <div className="max-w-6xl mx-auto">
        {/* Header Text */}
        <div className="mb-12">
          <p className="text-gray-600 mb-2">That's all for now.</p>
          <h2 className="text-5xl font-bold mb-2">Got a project in mind?</h2>
          <h2 className="text-5xl font-bold">Let's talk</h2>
        </div>
        
        {/* Divider with Button */}
        <div className="relative flex items-center mb-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="absolute right-0 mb-12">
            <ContactButton />
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Email:</p>
            <a href="mailto:dev.abhinavg@gmail.com" className="text-gray-800 hover:text-blue-600 transition duration-300">dev.abhinavg@gmail.com</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 mb-1">Phone:</p>
            <a href="tel:+917306588516" className="text-gray-800 hover:text-blue-600 transition duration-300">(+91) 7306588516</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;