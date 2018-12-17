import {fool, fool_laugh, underwater, underwater_music, show_answers_iv, show_answers_v} from './dictionary'

export const scene_D = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "Where am I now?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "What is this? Am I still floating?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "Is this ... water?" },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "\"Welcome. Your second question is one of resolve.\"" },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: fool_laugh, text: "\"What are you willing to sacrifice?\"" },
  { displayName: fool, special: show_answers_iv, background: underwater, music: underwater_music, soundEffect: null, text: "\"Interesting. Be honest, now. Are you willing to put your wish above all else?\"" },
  { displayName: fool, special: show_answers_v, background: underwater, music: underwater_music, soundEffect: null, text: "\"How amusing. I hope you won't regret your decision.\"" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "I'm starting to feel sick. I wonder if I made the right choice?" },

]
