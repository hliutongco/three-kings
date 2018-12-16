import {dark_void_music, queen, queen_laugh, show_answers_iii_b} from './dictionary'

export const scene_C_iii_b = [
  { displayName: "\n", special: null, background: null, music: dark_void_music, soundEffect: null, text: "" },
  { displayName: queen, special: null, background: null, music: dark_void_music, soundEffect: null, text: "" },
  { displayName: queen, special: null, background: null, music: dark_void_music, soundEffect: queen_laugh, text: "" },
  { displayName: queen, special: show_answers_iii_b, background: null, music: dark_void_music, soundEffect: null, text: "" },
  { displayName: "\n", special: null, background: null, music: dark_void_music, soundEffect: null, text: "" },
  { displayName: "\n", special: null, background: null, music: dark_void_music, soundEffect: null, redirectTrigger: true, text: "" }
]
