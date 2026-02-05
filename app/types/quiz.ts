// Type definitions for the Flower Personality Quiz

export type PersonalityType =
  | 'Bold Adventurer'
  | 'Gentle Soul'
  | 'Free Spirit'
  | 'Cheerful Optimist'
  | 'Vibrant Socialite'
  | 'Creative Visionary';

export type Flower = 'Sunflower' | 'Lily' | 'Wildflower' | 'Daisy' | 'Tulip' | 'Iris';

export interface Answer {
  emoji: string;
  text: string;
  personality: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface PersonalityResult {
  personality: PersonalityType;
  flower: Flower;
  tagline: string;
}
