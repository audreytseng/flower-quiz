'use client';

import { useState } from 'react';
import { PersonalityType } from '@/app/types/quiz';
import { questions, personalityResults } from '@/app/data/quiz-data';
import QuizCard from '@/app/components/QuizCard';
import QuizQuestion from '@/app/components/QuizQuestion';
import QuizResult from '@/app/components/QuizResult';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  const handleAnswerClick = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const counts: Record<PersonalityType, number> = {
      'Bold Adventurer': 0,
      'Gentle Soul': 0,
      'Free Spirit': 0,
      'Cheerful Optimist': 0,
      'Vibrant Socialite': 0,
      'Creative Visionary': 0
    };

    answers.forEach(personality => {
      counts[personality] = counts[personality] + 1;
    });

    // Find the maximum count
    const maxCount = Math.max(...Object.values(counts));

    // Get all personalities with the maximum count
    const winners = (Object.keys(counts) as PersonalityType[]).filter(
      personality => counts[personality] === maxCount
    );

    // Randomly pick one if there's a tie
    const randomWinner = winners[Math.floor(Math.random() * winners.length)];

    return personalityResults[randomWinner];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowWelcome(true);
  };

  const startQuiz = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[#f5f5f6]">
      <div className={showResults ? "quiz-card-wrapper w-full flex justify-center" : "w-full flex justify-center"}>
        <QuizCard>
        {showWelcome && (
          <div className="text-center px-4 sm:px-8 py-4 fade-in">
            <h1 className="text-2xl sm:text-3xl mb-6">
              what's your flower personality?
            </h1>
            <p className="text-base sm:text-lg mb-8 opacity-80">
              discover your flower in 7 questions 💐
            </p>
            <button
              onClick={startQuiz}
              className="px-8 py-3 rounded-2xl transition-all duration-200
                         bg-white
                         border border-gray-200
                         hover:shadow-lg hover:scale-105 hover:bg-gray-50"
            >
              start quiz
            </button>
          </div>
        )}

        {!showWelcome && !showResults && (
          <QuizQuestion
            key={currentQuestion}
            question={questions[currentQuestion]}
            onAnswerClick={handleAnswerClick}
            questionNumber={currentQuestion + 1}
          />
        )}

        {showResults && (
          <QuizResult
            result={calculateResult()}
            onRetake={resetQuiz}
          />
        )}
        </QuizCard>
      </div>
    </div>
  );
}
