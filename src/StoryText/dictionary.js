// Prologue

export const forest_clearing = "forest-clearing"
export const anonymous = "???"
export const ringtone = 'https://s3.us-east-2.amazonaws.com/three-kings/telephone-ring.mp3'
export const alarm = 'https://s3.us-east-2.amazonaws.com/three-kings/alarm.mp3'
export const set_username = "SET_USERNAME"

// Scene A

export const calm = "https://s3.us-east-2.amazonaws.com/three-kings/calm.mp3"
export const fan = 'https://s3.us-east-2.amazonaws.com/three-kings/electric-fan.mp3'
export const fade_music = "fade music"
export const jinghua = "Jinghua"
export const bedroom = "bedroom"

// Scene B

export const dark_room = "dark-room"
export const scary_dark_room = "dark-room-scary"
export const queen = "Queen"
export const fool = "Fool"
export const queen_laugh = "https://s3.us-east-2.amazonaws.com/three-kings/queen-laugh.mp3"
export const fool_laugh = "https://s3.us-east-2.amazonaws.com/three-kings/fool_laugh.mp3"
export const door_close = "https://s3.us-east-2.amazonaws.com/three-kings/door_creak_closing.mp3"

// Scene C

export const show_instructions = "SHOW_INSTRUCTIONS"
export const dark_void = "dark-void"
export const dark_void_music = "https://s3.us-east-2.amazonaws.com/three-kings/question-one-music.mp3"
export const show_answers = () => [{question: 1, text: "To ask for a favor", correct: false}, {question: 1, text: "To regain something I lost", correct: true}]

// Scene C-i

export const show_answers_i = () => [{question: 2, text: "Because I need your help", correct: false}, {question: 2, text: "Because I am desperate", correct: true}]

// Scene C-ii

export const show_answers_ii = () => [{question: 3, text: "Sight", redirect: 7}, {question: 3, text: "Hearing", redirect: 6}]

// Scene C-iii

export const show_answers_iii = () => [{question: 4, text: "So I can walk again", correct: true, redirect: 8}, {question: 4, text: "So you can solve all my problems", correct: false, redirect: 8}]
export const show_answers_iii_b = () => [{question: 4, text: "", correct: true, redirect: 8}, {question: 4, text: "", correct: false, redirect: 8}]
