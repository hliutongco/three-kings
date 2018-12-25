import {queen, fool, queen_laugh, show_answers_vii, show_answers_viii, show_answers_ix} from './dictionary'

export const scene_D = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "I've finally escaped. Or at least, I think I have?" },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "These next questions will assess the strength of your memory." },
  { displayName: queen, special: null, background: null, music: null, soundEffect: queen_laugh, text: "Let's begin, shall we?" },
  { displayName: fool, special: null, background: null, music: null, soundEffect: null, text: "Where did your accident take place?" },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "Can you remember?" },
  { displayName: queen, special: show_answers_vii, background: null, music: null, soundEffect: null, text: "Such an odd name. Was that really it?" },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "We'll find out soon enough. Next question..." },
  { displayName: fool, special: null, background: null, music: null, soundEffect: null, text: "Are you able to recall the items you brought into this room?" },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "Yes, yes. What were they?" },
  { displayName: queen, special: show_answers_viii, background: null, music: null, soundEffect: null, text: "Hmm, I wonder. Are you sure that's right?" },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "Third and final question:" },
  { displayName: fool, special: null, background: null, music: null, soundEffect: null, text: "You will see this last question by reading the first word of my last three statements." },
  { displayName: queen, special: null, background: null, music: null, soundEffect: null, text: "What is your response?" },
  { displayName: queen, special: show_answers_ix, background: null, music: null, soundEffect: null, text: "I hope that's correct. It would be such a pity for this to end early." },
]
