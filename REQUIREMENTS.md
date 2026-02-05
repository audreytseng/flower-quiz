# Flower Personality Quiz - Requirements

## Overview
A personality quiz that recommends a flower based on lifestyle and preference questions.

## Personality → Flower Pairings

1. **Bold Adventurer** → Sunflower
   - Tagline: "You light up every room with confidence"

2. **Gentle Soul** → Lily
   - Tagline: "Elegance and grace follows everything you do"

3. **Free Spirit** → Wildflower
   - Tagline: "You bloom wherever life takes you"

4. **Cheerful Optimist** → Daisy
   - Tagline: "Simple joys make your world bright"

5. **Vibrant Socialite** → Tulip
   - Tagline: "Colorful, lively, always in season"

6. **Creative Visionary** → Iris
   - Tagline: "Unique perspective and artistic soul"

## Result Display Logic
- **Single recommendation**: Show the personality type that received the most answers, with its corresponding flower and tagline
- Example: "You're a Bold Adventurer! Your flower: Sunflower. You light up every room with confidence."

## Visual Style
- **Color scheme**: Lavender/blue gradient background (e0c3fc to 8ec5fc)
- **Design aesthetic**: Minimalist cozy - soft rounded corners, gentle gradients, clean whitespace
- **Typography**: Georgia serif font, all lowercase text
- **Card style**: White background with subtle shadow, rounded corners
- **Answer buttons**: Soft gradient (lavender to light blue), rounded, with hover effects
- **Icons**: Yes - emoji icons next to each answer option
- **Images**: Skip for now (can add later)

## Quiz Questions

### Question 1: how do you spend your ideal weekend?
- 🗺️ exploring a new city or trying an adventure → Bold Adventurer
- 📚 curled up with a good book at home → Gentle Soul
- 🌳 spontaneous road trip - wherever the day takes you → Free Spirit
- ☕ brunch with friends and casual hangouts → Vibrant Socialite

### Question 2: what's your go-to travel style?
- 🏔️ adventure sports and challenging hikes → Bold Adventurer
- 🏛️ museums, quiet cafes, and cultural sites → Gentle Soul
- 🎒 no agenda at all - wherever the day takes me → Free Spirit
- 🎉 festivals, nightlife, and befriending locals → Vibrant Socialite

### Question 3: how do you approach food?
- 🌶️ always trying the spiciest or most adventurous dish → Bold Adventurer
- 🍰 comfort classics that feel like home → Cheerful Optimist
- 🌮 street food and whatever looks interesting → Free Spirit
- 🍷 fancy dinners with great company → Vibrant Socialite

### Question 4: what's your ideal evening?
- 🎭 seeing a show or live performance → Creative Visionary
- 🕯️ candlelit dinner and meaningful conversation → Gentle Soul
- 🎨 working on a creative project → Creative Visionary
- 🍻 bar hopping with a group → Vibrant Socialite

### Question 5: how do you recharge?
- 🏃 intense workout or physical challenge → Bold Adventurer
- 🌸 peaceful walk in nature → Gentle Soul
- 🎵 dancing or moving freely to music → Free Spirit
- 😊 simple pleasures like sunshine and good vibes → Cheerful Optimist

### Question 6: what's your approach to plans?
- 📅 structured itinerary, let's maximize the day → Bold Adventurer
- 📝 loose framework, but keep it flexible → Cheerful Optimist
- 🌊 go with the flow completely → Free Spirit
- 👥 whatever the group wants to do → Vibrant Socialite

### Question 7: how do you express yourself?
- 🎨 through art, design, or creative projects → Creative Visionary
- 💭 through thoughtful words and writing → Gentle Soul
- 😊 through kindness and positivity → Cheerful Optimist
- ✨ through style and presence → Creative Visionary

## Technical Notes
- Framework: Next.js
- Language: JavaScript
- Deployment: Vercel (covered in Module 4.5)
