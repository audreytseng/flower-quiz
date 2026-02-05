import React from 'react';
import { Question, PersonalityType } from '@/app/types/quiz';
import AnswerButton from './AnswerButton';
import ProgressIndicator from './ProgressIndicator';

interface QuizQuestionProps {
  question: Question;
  onAnswerClick: (personality: PersonalityType) => void;
  questionNumber: number;
}

export default function QuizQuestion({ question, onAnswerClick, questionNumber }: QuizQuestionProps) {
  return (
    <div className="fade-in px-2 sm:px-0">
      <ProgressIndicator totalQuestions={7} currentQuestion={questionNumber - 1} />
      <h2 className="text-lg sm:text-xl mb-6 text-center">
        {question.question}
      </h2>
      <div className="flex flex-col gap-3">
        {question.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            emoji={answer.emoji}
            text={answer.text}
            onClick={() => onAnswerClick(answer.personality)}
          />
        ))}
      </div>
    </div>
  );
}
