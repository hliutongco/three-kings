import {dark_room, scary_dark_room, queen, queen_laugh, fool, fool_laugh, show_answers_x} from './dictionary'

export const scene_F = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "And just like that, I'm sent back to the beginning." },
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "Back to the dark room." },
  { displayName: null, special: null, background: dark_room, music: null, soundEffect: null, text: "I can once again feel the heat of the candle and the cool air from the electric fan at my back." },
  { displayName: null, special: null, background: dark_room, music: null, soundEffect: null, text: "I immediately check the phone hidden in my pocket, only to find that Jinghua is no longer listed under my contacts." },
  { displayName: null, special: null, background: dark_room, music: null, soundEffect: null, text: "There aren't even any records of our phone calls or text messages." },
  { displayName: null, special: null, background: dark_room, music: null, soundEffect: null, text: "She should still be somewhere in the house. But before I can even try to call out to her, I am interrupted by a familiar voice." },
  { displayName: null, special: null, background: dark_room, music: null, soundEffect: null, text: "Their taunting laughter reverberates throughout the room, for what will hopefully be the last time." },
  { displayName: queen, special: null, background: scary_dark_room, music: null, soundEffect: queen_laugh, text: "\"Congratulations, human. You have passed our trial. As a reward, I shall offer one truth.\"" },
  { displayName: fool, special: null, background: scary_dark_room, music: null, soundEffect: fool_laugh, text: "\"And I shall offer one lie. Which do you choose?\"" },
  { displayName: null, special: null, background: scary_dark_room, music: null, soundEffect: null, text: "...A truth or a lie? What does that mean?" },
  { displayName: null, special: null, background: scary_dark_room, music: null, soundEffect: null, text: "I get the feeling that even if I asked them to explain, they would never give me a straight answer." },
  { displayName: null, special: null, background: scary_dark_room, music: null, soundEffect: null, text: "I should just go with my gut. Which one will get me closer to my goal?" },
  { displayName: null, special: null, background: scary_dark_room, music: null, soundEffect: null, text: "\"I choose...\"" },
  { displayName: fool, special: show_answers_x, background: scary_dark_room, music: null, soundEffect: null, text: "\"So that is your decision?\"" },
  { displayName: queen, special: null, background: scary_dark_room, music: null, soundEffect: null, text: "\"It is done. Goodbye, human. Try not to regret your choices.\"" },
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "And then, for a moment, all I see is darkness." },
  { displayName: null, special: null, background: null, music: null, soundEffect: null, redirectTrigger: true, text: "" }

]
