import { Question, PersonalityType, PersonalityResult } from '@/app/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "how do you spend your ideal weekend?",
    answers: [
      { emoji: "🗺️", text: "exploring a new city or trying an adventure", personality: "Bold Adventurer" },
      { emoji: "📚", text: "curled up with a good book at home", personality: "Gentle Soul" },
      { emoji: "🌳", text: "spontaneous road trip - wherever the day takes you", personality: "Free Spirit" },
      { emoji: "☕", text: "brunch with friends and casual hangouts", personality: "Vibrant Socialite" }
    ]
  },
  {
    id: 2,
    question: "what's your go-to travel style?",
    answers: [
      { emoji: "🏔️", text: "adventure sports and challenging hikes", personality: "Bold Adventurer" },
      { emoji: "🏛️", text: "museums, quiet cafes, and cultural sites", personality: "Gentle Soul" },
      { emoji: "🎒", text: "no agenda at all - wherever the day takes me", personality: "Free Spirit" },
      { emoji: "🎉", text: "festivals, nightlife, and befriending locals", personality: "Vibrant Socialite" }
    ]
  },
  {
    id: 3,
    question: "how do you approach food?",
    answers: [
      { emoji: "🌶️", text: "always trying the spiciest or most adventurous dish", personality: "Bold Adventurer" },
      { emoji: "🍰", text: "comfort classics that feel like home", personality: "Cheerful Optimist" },
      { emoji: "🌮", text: "street food and whatever looks interesting", personality: "Free Spirit" },
      { emoji: "🍷", text: "fancy dinners with great company", personality: "Vibrant Socialite" }
    ]
  },
  {
    id: 4,
    question: "what's your ideal evening?",
    answers: [
      { emoji: "🎭", text: "seeing a show or live performance", personality: "Creative Visionary" },
      { emoji: "🕯️", text: "candlelit dinner and meaningful conversation", personality: "Gentle Soul" },
      { emoji: "🎨", text: "working on a creative project", personality: "Creative Visionary" },
      { emoji: "🍻", text: "bar hopping with a group", personality: "Vibrant Socialite" }
    ]
  },
  {
    id: 5,
    question: "how do you recharge?",
    answers: [
      { emoji: "🏃", text: "intense workout or physical challenge", personality: "Bold Adventurer" },
      { emoji: "🌸", text: "peaceful walk in nature", personality: "Gentle Soul" },
      { emoji: "🎵", text: "dancing or moving freely to music", personality: "Free Spirit" },
      { emoji: "😊", text: "simple pleasures like sunshine and good vibes", personality: "Cheerful Optimist" }
    ]
  },
  {
    id: 6,
    question: "what's your approach to plans?",
    answers: [
      { emoji: "📅", text: "structured itinerary, let's maximize the day", personality: "Bold Adventurer" },
      { emoji: "📝", text: "loose framework, but keep it flexible", personality: "Cheerful Optimist" },
      { emoji: "🌊", text: "go with the flow completely", personality: "Free Spirit" },
      { emoji: "👥", text: "whatever the group wants to do", personality: "Vibrant Socialite" }
    ]
  },
  {
    id: 7,
    question: "how do you express yourself?",
    answers: [
      { emoji: "🎨", text: "through art, design, or creative projects", personality: "Creative Visionary" },
      { emoji: "💭", text: "through thoughtful words and writing", personality: "Gentle Soul" },
      { emoji: "😊", text: "through kindness and positivity", personality: "Cheerful Optimist" },
      { emoji: "✨", text: "through style and presence", personality: "Creative Visionary" }
    ]
  }
];

export const personalityResults: Record<PersonalityType, PersonalityResult> = {
  'Bold Adventurer': {
    personality: 'Bold Adventurer',
    flower: 'Sunflower',
    tagline: "you light up every room with confidence"
  },
  'Gentle Soul': {
    personality: 'Gentle Soul',
    flower: 'Lily',
    tagline: "Elegance and grace follows everything you do"
  },
  'Free Spirit': {
    personality: 'Free Spirit',
    flower: 'Wildflower',
    tagline: "you bloom wherever life takes you"
  },
  'Cheerful Optimist': {
    personality: 'Cheerful Optimist',
    flower: 'Daisy',
    tagline: "simple joys make your world bright"
  },
  'Vibrant Socialite': {
    personality: 'Vibrant Socialite',
    flower: 'Tulip',
    tagline: "colorful, lively, always in season"
  },
  'Creative Visionary': {
    personality: 'Creative Visionary',
    flower: 'Iris',
    tagline: "Unique perspective and artistic soul"
  }
};
