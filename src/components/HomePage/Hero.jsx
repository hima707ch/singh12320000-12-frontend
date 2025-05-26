import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div id="Hero_2" className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div id="Hero_3" className="md:w-1/2 text-center md:text-left">
          <h1 id="Hero_4" className="text-4xl md:text-6xl font-bold text-white mb-6">
            Creative Developer & Designer
          </h1>
          <p id="Hero_5" className="text-xl text-gray-200 mb-8">
            Transforming ideas into elegant digital experiences through code and creativity
          </p>
          <button id="Hero_6" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            View My Work
          </button>
        </div>
        <div id="Hero_7" className="md:w-1/2 mt-8 md:mt-0">
          <img id="Hero_8" src={images[0]} alt="Profile" className="rounded-full w-64 h-64 mx-auto object-cover shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;