import React from 'react';

const SkillsExperience = ({ skillsData }) => {
  return (
    <section id="SkillsExperience_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="SkillsExperience_2" className="text-3xl font-semibold mb-8">Skills & Experience</h2>
      
      <div id="SkillsExperience_3" className="grid md:grid-cols-2 gap-8">
        <div id="SkillsExperience_4">
          <h3 id="SkillsExperience_5" className="text-2xl font-medium mb-4">Technical Skills</h3>
          <div id="SkillsExperience_6" className="space-y-4">
            {['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript'].map((skill, index) => (
              <div id={`SkillsExperience_7_${index}`} key={skill} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-gray-700 font-semibold">{skill}</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${Math.random() * 30 + 70}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="SkillsExperience_8">
          <h3 id="SkillsExperience_9" className="text-2xl font-medium mb-4">Experience</h3>
          <div id="SkillsExperience_10" className="space-y-6">
            {[
              {
                role: 'Senior Software Engineer',
                company: 'Tech Solutions Inc.',
                period: '2020 - Present',
                description: 'Leading development of enterprise applications'
              },
              {
                role: 'Full Stack Developer',
                company: 'Digital Innovations',
                period: '2018 - 2020',
                description: 'Developed and maintained web applications'
              }
            ].map((exp, index) => (
              <div id={`SkillsExperience_11_${index}`} key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 id={`SkillsExperience_12_${index}`} className="text-lg font-semibold">{exp.role}</h4>
                <p id={`SkillsExperience_13_${index}`} className="text-gray-600">{exp.company} | {exp.period}</p>
                <p id={`SkillsExperience_14_${index}`} className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
