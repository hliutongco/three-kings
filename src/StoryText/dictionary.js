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
export const show_answers = () => [{text: "To see the supernatural", correct: false}, {text: "To regain something I lost", correct: true}]

// Scene C-i

export const show_answers_i = () => [{text: "Because I am curious", correct: false}, {text: "Because I am desperate", correct: true}]

// Scene C-ii

export const show_answers_ii = () => [{text: "Sight", redirect: 7}, {text: "Hearing", redirect: 6}]

// Scene C-iii

export const show_answers_iii = () => [{text: "So I can walk again", correct: true, redirect: 8, check_score: true}, {text: "So I can brag about the ritual", correct: false, redirect: 8, check_score: true}]
export const show_answers_iii_b = () => [{text: "", correct: true, redirect: 8, check_score: true}, {text: "", correct: false, redirect: 8, check_score: true}]

// Scene D

export const underwater = "underwater"
export const underwater_music = "https://s3.us-east-2.amazonaws.com/three-kings/underwater_song.mp3"
export const show_answers_iv = () => [{text: "My wish", correct: false}, {text: "Jinghua", correct: true}]
export const show_answers_v = () => [{text: "Yes", correct: true}, {text: "No", correct: false}]
