import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SK 동현</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">소개</a></li>
            <li><a href="#experience" className="text-gray-600 hover:text-blue-600">경력</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-blue-600">기술</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600">프로젝트</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;