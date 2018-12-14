import {dark_void, show_instructions, queen, queen_laugh, show_answers} from './dictionary'

export const scene_C = [
  { displayName: null, special: show_instructions, background: null, music: null, soundEffect: null, text: "Suddenly, I am no longer in the dark room." },
  { displayName: null, special: null, background: dark_void, music: null, soundEffect: null, text: "It's as though I am floating, adrift in some weightless void." },
  { displayName: null, special: null, background: dark_void, music: null, soundEffect: null, text: "I can no longer feel my wheelchair. I can't even feel the weight of my own body." },
  { displayName: queen, special: null, background: dark_void, music: null, soundEffect: null, text: "\"Let us begin. Our first question is one of honesty.\"" },
  { displayName: queen, special: null, background: dark_void, music: null, soundEffect: queen_laugh, text: "\"Why have you come to us?\"" },
  { displayName: queen, special: show_answers, background: dark_void, music: null, soundEffect: null, text: "How bold. And how foolish." },
  { displayName: null, special: null, background: null, music: dark_void, soundEffect: null, text: "I suddenly feel drowsy. Something is ... wrong." },
]
