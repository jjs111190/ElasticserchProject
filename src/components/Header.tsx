import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <Code2 className="h-12 w-12" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            개발자 포트폴리오
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            창의적이고 혁신적인 웹 개발 프로젝트를 통해 디지털 경험을 구현합니다
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};