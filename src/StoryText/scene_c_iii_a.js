import {dark_void, queen, show_answers_iii} from './dictionary'

export const scene_C_iii_a = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "Something is different this time." },
  { displayName: queen, special: null, background: dark_void, music: null, soundEffect: null, text: "\"Let us begin. Our first question is one of honesty.\"" },
  { displayName: queen, special: null, background: dark_void, music: null, soundEffect: null, text: "\"Why have you come to us?\"" },
  { displayName: queen, special: show_answers_iii, background: dark_void, music: null, soundEffect: null, text: "How bold. And how foolish." },
  { displayName: null, special: null, background: dark_void, music: null, soundEffect: null, text: "Something is different this time." },
  { displayName: null, special: null, background: dark_void, music: null, soundEffect: null, redirectTrigger: true, text: "..." }
]
