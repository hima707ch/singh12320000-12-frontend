import React from 'react';
import Biography from './Biography';
import SkillsExperience from './SkillsExperience';
import { useAbout } from './useAbout';

const Body = () => {
  const { bioData, skillsData } = useAbout();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h1>
        <div id="Body_4" className="grid gap-12">
          <Biography bioData={bioData} />
          <SkillsExperience skillsData={skillsData} />
        </div>
      </div>
    </div>
  );
};

export default Body;
