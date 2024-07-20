import React from 'react';

function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">경력</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">SK C&C</h3>
        <p className="text-gray-600 mb-4">2016년 - 현재</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>SK 하이닉스를 위한 FAB MES 시스템 설계 및 개발</li>
          <li>개발 프로세스 최적화 및 자동화 도구 제작</li>
          <li>머신러닝과 LLM 기술을 활용한 시스템 효율성 개선</li>
          <li>30명 이상의 개발자 팀 리드 및 소프트웨어 품질 향상</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;