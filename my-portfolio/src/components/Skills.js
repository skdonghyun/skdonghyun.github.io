import React from 'react';

function Skills() {
  const skills = ['Java', 'C#', 'Oracle DB', 'MySQL', 'Spring Boot', 'Jenkins', 'Git', 'Jira', 'Linux', 'Windows', '머신러닝', 'LLM'];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">기술 스택</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold m-1">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;