import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [bioData, setBioData] = useState({});
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setBioData({
      name: 'John Doe',
      title: 'Senior Software Engineer',
      bio: 'Experienced software engineer with a passion for creating innovative solutions.'
    });

    setSkillsData({
      technical: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 }
      ],
      experience: [
        {
          role: 'Senior Software Engineer',
          company: 'Tech Solutions Inc.',
          period: '2020 - Present'
        }
      ]
    });
  }, []);

  return {
    bioData,
    skillsData
  };
};
