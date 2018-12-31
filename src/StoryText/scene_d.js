import {stars, harp_song, queen, fool, queen_laugh, show_answers_vii, show_answers_viii, show_answers_ix, fade_music} from './dictionary'

export const scene_D = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "I've finally escaped. Or at least, I think I have?" },
  { displayName: null, special: null, background: stars, music: harp_song, soundEffect: null, text: "This new area is alien, but peaceful. There's a tranquility here that I did not feel in that endless abyss." },
  { displayName: null, special: null, background: stars, music: harp_song, soundEffect: null, text: "It is quiet. Far-off lights wink at me from some unknowable distance." },
  { displayName: null, special: null, background: stars, music: harp_song, soundEffect: null, text: "All too soon, a taunting voice shatters the silence." },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: queen_laugh, text: "\"These next questions will assess the strength of your memory.\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Let's begin, shall we?\"" },
  { displayName: fool, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Where is the electric fan located?\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Can you remember?\"" },
  { displayName: queen, special: show_answers_vii, background: stars, music: harp_song, soundEffect: null, text: "\"Hmm. Was that really it?\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"We'll find out soon enough. Next question...\"" },
  { displayName: fool, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Are you able to recall the items you brought into this room?\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Yes, yes. What were they?\"" },
  { displayName: queen, special: show_answers_viii, background: stars, music: harp_song, soundEffect: null, text: "\"I wonder. Are you sure that's right?\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"Third and final question:\"" },
  { displayName: fool, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"You will see this last question by reading the first word of my last three statements.\"" },
  { displayName: queen, special: null, background: stars, music: harp_song, soundEffect: null, text: "\"What is your response?\"" },
  { displayName: queen, special: show_answers_ix, background: stars, music: harp_song, soundEffect: null, text: "\"I hope that's correct. It would be such a pity for this to end early.\"" },
  { displayName: null, special: null, background: stars, music: harp_song, soundEffect: null, text: "I can feel the pieces of me slipping away. They're taking me to some other, foreign place." },
  { displayName: null, special: null, background: stars, music: fade_music, soundEffect: null, text: "The twinkling lights flicker out one-by-one. I don't want to leave..." },
  { displayName: null, special: null, background: stars, music: fade_music, soundEffect: null, redirectTrigger: true, text: "" }
]
