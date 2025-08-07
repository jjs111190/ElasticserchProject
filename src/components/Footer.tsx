import React from 'react';
import { Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Code2 className="h-8 w-8 mr-2" />
            <h3 className="text-xl font-bold">Developer Portfolio</h3>
          </div>
          <p className="text-gray-400 mb-6">
            창의적인 코드로 더 나은 디지털 세상을 만들어갑니다
          </p>
          <div className="flex justify-center items-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>and React</span>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            © 2024 Developer Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};