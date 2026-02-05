'use client';

import React from 'react';
import { domToPng } from 'modern-screenshot';
import { PersonalityResult } from '@/app/types/quiz';

interface QuizResultProps {
  result: PersonalityResult;
  onRetake: () => void;
}

export default function QuizResult({ result, onRetake }: QuizResultProps) {
  // Flower emoji mapping
  const flowerEmojis: Record<string, string> = {
    'Sunflower': '🌻',
    'Lily': '🌸',
    'Wildflower': '🌼',
    'Daisy': '🌼',
    'Tulip': '🌷',
    'Iris': '🪻'
  };

  // Personality emoji mapping
  const personalityEmojis: Record<string, string> = {
    'Bold Adventurer': '⚡',
    'Gentle Soul': '🕊️',
    'Free Spirit': '🦋',
    'Cheerful Optimist': '☀️',
    'Vibrant Socialite': '✨',
    'Creative Visionary': '🎨'
  };

  const handleSaveResults = async () => {
    const cardElement = document.querySelector('#quiz-card-gradient');
    if (!cardElement) {
      alert('Could not find result card');
      return;
    }

    try {
      // Temporarily hide buttons
      const buttons = cardElement.querySelectorAll('button');
      buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');

      // Wait a moment for the display change to take effect
      await new Promise(resolve => setTimeout(resolve, 100));

      // Generate image of just the gradient card with no extra space
      const dataUrl = await domToPng(cardElement as HTMLElement, {
        scale: 2
      });

      // Restore original state
      buttons.forEach(btn => (btn as HTMLElement).style.display = '');

      // Create and trigger download
      const link = document.createElement('a');
      link.download = `flower-personality-${result.flower.toLowerCase()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      alert(`Error: ${error}`);
      console.error('Error capturing image:', error);
      // Show buttons again even if there's an error
      const buttons = cardElement?.querySelectorAll('button');
      buttons?.forEach(btn => (btn as HTMLElement).style.display = '');
    }
  };

  return (
    <div className="text-center fade-in px-4 sm:px-0">
      <div className="text-5xl sm:text-6xl mb-6">
        {flowerEmojis[result.flower]}
      </div>
      <h2 className="text-2xl sm:text-3xl mb-4">
        you're a {result.flower.toLowerCase()}!
      </h2>
      <p className="text-lg sm:text-xl mb-2">
        you're a {result.personality.toLowerCase()} {personalityEmojis[result.personality]}
      </p>
      <p className="text-base sm:text-lg opacity-80 mb-8">
        {result.tagline}~
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRetake}
          className="px-8 py-3 rounded-2xl transition-all duration-200
                     bg-white
                     border border-gray-200
                     hover:shadow-lg hover:scale-105 hover:bg-gray-50"
        >
          retake quiz
        </button>
        <button
          onClick={handleSaveResults}
          className="px-8 py-3 rounded-2xl transition-all duration-200
                     bg-white
                     border border-gray-200
                     hover:shadow-lg hover:scale-105 hover:bg-gray-50"
        >
          save results
        </button>
      </div>
    </div>
  );
}
