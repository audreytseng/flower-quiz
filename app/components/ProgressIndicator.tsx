import React from 'react';

interface ProgressIndicatorProps {
  totalQuestions: number;
  currentQuestion: number;
}

export default function ProgressIndicator({ totalQuestions, currentQuestion }: ProgressIndicatorProps) {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const isCompleted = index < currentQuestion;
        const isCurrent = index === currentQuestion;

        return (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isCompleted
                ? 'bg-gray-600'
                : isCurrent
                ? 'bg-gray-900'
                : 'bg-gray-400'
            }`}
            style={!isCompleted && !isCurrent ? { opacity: 0.7 } : {}}
          />
        );
      })}
    </div>
  );
}
