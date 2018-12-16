import {dark_void, dark_void_music, queen, queen_laugh, show_answers_ii} from './dictionary'

export const scene_C_ii = [
  { displayName: null, special: null, background: null, music: dark_void_music, soundEffect: null, text: "Suddenly, I am back to the start." },
  { displayName: null, special: null, background: dark_void, music: dark_void_music, soundEffect: null, text: "It's as though I'm trapped in some kind of cycle." },
  { displayName: null, special: null, background: dark_void, music: dark_void_music, soundEffect: null, text: "I can no longer sense the normal passage of time. How many times have I done this?" },
  { displayName: queen, special: null, background: dark_void, music: dark_void_music, soundEffect: null, text: "\"Let us begin. Our first question is one of honesty.\"" },
  { displayName: queen, special: null, background: dark_void, music: dark_void_music, soundEffect: queen_laugh, text: "\"We will now take away one of your senses: either your sight or your hearing.\"" },
  { displayName: queen, special: null, background: dark_void, music: dark_void_music, soundEffect: null, text: "\"Which do you choose?\"" },
  { displayName: queen, special: show_answers_ii, background: dark_void, music: dark_void_music, soundEffect: null, text: "How bold. And how foolish." },
  { displayName: null, special: null, background: null, music: dark_void_music, soundEffect: null,  text: "I suddenly feel drowsy. Something is ... wrong." },
  { displayName: null, special: null, background: null, music: dark_void_music, soundEffect: null, redirectTrigger: true, text: "..." }
]
