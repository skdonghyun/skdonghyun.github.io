import React from 'react';

function Projects() {
  const projects = [
    {
      title: "MES 시스템 최적화",
      description: "MES의 메시지 처리 개선으로 성능을 크게 향상시켰습니다."
    },
    {
      title: "개발 프로세스 자동화",
      description: "50명 이상의 개발자를 위한 개발 프로세스 자동화 및 간소화 도구를 제작했습니다."
    },
    {
      title: "제조업에 LLM 적용",
      description: "LLM을 사용하여 애플리케이션 아키텍처를 생성하는 프로그램을 개발하여 사내 혁신 상을 수상했습니다."
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;