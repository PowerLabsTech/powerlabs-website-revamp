import type { NextPage } from 'next';
import React from 'react';

// A simple Mail icon component for the input field
const MailIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const WaitlistSection: NextPage = () => {
  return (
    <section>
      <div className="w-full h-[334px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-amber-600 rounded-2xl overflow-hidden">
          {/* Left Column: Content */}
          <div className="flex flex-col items-center text-center justify-center p-8 md:p-16 text-white lg:col-span-2">
            <h1 className="text-4xl md:text-4xl font-semibold mb-8 leading-tight">
              Join the Waitlist for Raindrop <br /> Merch Collection
            </h1>

            {/* Email Form */}
            <form className="w-full max-w-md bg-white/20 p-2 rounded-xl flex items-center backdrop-blur-sm">
              <input
                type="email"
                placeholder="Your email..."
                required
                className="bg-transparent text-white placeholder-white/70 px-4 py-3 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
              >
                Join Waitlist
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block relative">
            <img
              src="https://placehold.co/800x800/1A202C/FFFFFF?text=Merch+Image"
              alt="Model wearing Raindrop merchandise"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
