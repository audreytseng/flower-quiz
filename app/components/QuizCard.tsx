import React from 'react';

interface QuizCardProps {
  children: React.ReactNode;
}

export default function QuizCard({ children }: QuizCardProps) {
  return (
    <div id="quiz-card-gradient" className="bg-gradient-to-br from-[#e7d4fc] to-[#b8dcfc] rounded-3xl shadow-lg p-6 sm:p-8 w-full max-w-[800px] min-h-[400px] flex items-center justify-center">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
