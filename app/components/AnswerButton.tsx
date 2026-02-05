import React from 'react';

interface AnswerButtonProps {
  emoji: string;
  text: string;
  onClick: () => void;
}

export default function AnswerButton({ emoji, text, onClick }: AnswerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 sm:p-4 rounded-2xl text-left transition-all duration-200
                 bg-white
                 border border-gray-200
                 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50
                 active:scale-[0.98]
                 flex items-center gap-3"
    >
      <span className="text-xl sm:text-2xl flex-shrink-0">{emoji}</span>
      <span className="text-sm sm:text-base">{text}</span>
    </button>
  );
}
