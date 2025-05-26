import React from 'react';
import images from '../assets/images';

const Biography = ({ bioData }) => {
  return (
    <section id="Biography_1" className="bg-white rounded-lg shadow-lg p-8">
      <div id="Biography_2" className="flex flex-col md:flex-row gap-8 items-start">
        <div id="Biography_3" className="md:w-1/3">
          <img
            src={images[0] || 'https://via.placeholder.com/300'}
            alt="Profile"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div id="Biography_4" className="md:w-2/3">
          <h2 id="Biography_5" className="text-3xl font-semibold mb-6">My Journey</h2>
          <div id="Biography_6" className="space-y-4">
            <p id="Biography_7" className="text-gray-700 leading-relaxed">
              With over a decade of experience in software development, I've had the privilege of working
              on diverse projects that have shaped my expertise in creating innovative solutions.
            </p>
            <p id="Biography_8" className="text-gray-700 leading-relaxed">
              My journey began with a passion for technology and problem-solving, which led me to pursue
              a degree in Computer Science. Since then, I've worked with various technologies and frameworks,
              always staying at the forefront of industry trends.
            </p>
            <p id="Biography_9" className="text-gray-700 leading-relaxed">
              I believe in continuous learning and sharing knowledge with the community. This philosophy
              has helped me grow both professionally and personally throughout my career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
