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
export const show_answers = () => [{text: "To gain power", correct: false}, {text: "To get revenge", correct: false}, {text: "To be healed", correct: true}]

// Scene C-i

export const show_answers_i = () => [{text: "Riches", correct: false, clearScore: true}, {text: "Good health", correct: true, clearScore: true}, {text: "All of the above", correct: false, clearScore: true}]

// Scene C-ii

export const show_answers_ii = () => [{text: "Sight", redirect: 7}, {text: "Hearing", redirect: 6}]

// Scene C-iii

export const show_answers_iii = () => [{text: "To die", correct: false, redirect: 8, check_score: true}, {text: "To live", correct: true, redirect: 8, check_score: true}, {text: "To die", correct: false, redirect: 8, check_score: true}]
export const show_answers_iii_b = () => [{text: "", correct: false, redirect: 8, check_score: true}, {text: "", correct: true, redirect: 8, check_score: true}, {text: "", correct: false, redirect: 8, check_score: true}]

// Scene D

export const stars = "stars"
export const harp_song = "https://s3.us-east-2.amazonaws.com/three-kings/harp_song.mp3"
export const show_answers_vii = () => [{text: "A lamp", correct: false, clearScore: true}, {text: "An electric fan", correct: true, clearScore: true}, {text: "A black curtain", correct: false, clearScore: true}]
export const show_answers_viii = () => [{text: "A phone and a photo", correct: false}, {text: "A photo and a candle", correct: false}, {text: "A candle and a phone", correct: true}]
export const show_answers_ix = () => [{text: "The bedroom", correct: false, redirect: 10, check_score: true}, {text: "The accident", correct: false, redirect: 10, check_score: true}, {text: "The dark room", correct: true, redirect: 10, check_score: true}]

// Scene E

export const underwater = "underwater"
export const underwater_music = "https://s3.us-east-2.amazonaws.com/three-kings/underwater_song.mp3"
export const phone_vibration = "https://s3.us-east-2.amazonaws.com/three-kings/cellphone-vibration.mp3"
export const show_answers_iv = () => [{text: "My wish", correct: false, clearScore: true}, {text: "Jinghua", correct: true, clearScore: true}]
export const show_answers_v = () => [{text: "Yes", correct: true}, {text: "No", correct: false}]
export const show_answers_vi = () => [{text: "Stay", check_score: true, correct: true, redirect: 11}, {text: "Leave", redirect: 101}]

// Scene F

export const show_answers_x = () => [{text: "A truth", redirect: 102}, {text: "A lie", redirect: 103}]
export const show_answers_xi = () => [{text: "Confess"}]

// Endings

export const neutral_ending = "NEUTRAL_END"
export const truth_ending = "TRUTH_END"
export const lies_ending = "LIES_END"
