
// Prologue

export const forest_clearing = "forest-clearing"
export const anonymous = "???"
export const ringtone = `https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/telephone-ring.mp3?alt=media&token=97a00c29-a652-470b-8b20-64d45b05308b`
export const alarm = 'https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/alarm.mp3?alt=media&token=035a6755-394e-4977-9d67-ead9a61c429c'
export const set_username = "SET_USERNAME"

// Scene A

export const calm = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/calm.mp3?alt=media&token=96a3a114-f56f-43ed-b776-05ba67ad0503"
export const fan = 'https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/electric-fan.mp3?alt=media&token=8e257756-8eb6-4980-9d04-f0edaf71fa4c'
export const fade_music = "fade music"
export const jinghua = "Jinghua"
export const bedroom = "bedroom"

// Scene B

export const dark_room = "dark-room"
export const scary_dark_room = "dark-room-scary"
export const queen = "Queen"
export const fool = "Fool"
export const queen_laugh = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/queen-laugh.mp3?alt=media&token=a4ff59ee-cb85-4d22-aef1-9e050aae8e98"
export const fool_laugh = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/fool_laugh.mp3?alt=media&token=cf54c123-fcf4-4a70-afa9-c80fff9a533f"
export const door_close = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/door_creak_closing.mp3?alt=media&token=a773d355-1ce2-4246-9097-6b95831b47ce"

// Scene C

export const show_instructions = "SHOW_INSTRUCTIONS"
export const dark_void = "dark-void"
export const dark_void_music = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/question-one-music.mp3?alt=media&token=b6d6eef1-3bfe-489c-9331-fbf7878ae809"
export const show_answers = () => [{text: "To gain power", correct: false, clearScore: true}, {text: "To get revenge", correct: false, clearScore: true}, {text: "To be healed", correct: true, clearScore: true}]

// Scene C-i

export const show_answers_i = () => [{text: "Riches", correct: false}, {text: "Good health", correct: true}, {text: "All of the above", correct: false}]

// Scene C-ii

export const show_answers_ii = () => [{text: "Sight", redirect: 7}, {text: "Hearing", redirect: 6}]

// Scene C-iii

export const show_answers_iii = () => [{text: "To die", correct: false, redirect: 8, check_score: true}, {text: "To live", correct: true, redirect: 8, check_score: true}, {text: "To die", correct: false, redirect: 8, check_score: true}]
export const show_answers_iii_b = () => [{text: "", correct: false, redirect: 8, check_score: true}, {text: "", correct: true, redirect: 8, check_score: true}, {text: "", correct: false, redirect: 8, check_score: true}]

// Scene D

export const stars = "stars"
export const harp_song = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/harp_song.mp3?alt=media&token=eeb3ff26-c87f-4ba6-9c06-b3a17bc976e9"
export const show_answers_vii = () => [{text: "In front of you", correct: false, clearScore: true}, {text: "Behind you", correct: true, clearScore: true}, {text: "Next to you", correct: false, clearScore: true}]
export const show_answers_viii = () => [{text: "A phone and a photo", correct: false}, {text: "A photo and a candle", correct: false}, {text: "A candle and a phone", correct: true}]
export const show_answers_ix = () => [{text: "The bedroom", correct: false, redirect: 10, check_score: true}, {text: "The forest", correct: false, redirect: 10, check_score: true}, {text: "The dark room", correct: true, redirect: 10, check_score: true}]

// Scene E

export const underwater = "underwater"
export const underwater_music = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/underwater_song.mp3?alt=media&token=35236fef-9fea-42e1-a4f7-60aff8d6400b"
export const phone_vibration = "https://firebasestorage.googleapis.com/v0/b/three-kings-game.appspot.com/o/cellphone-vibration.mp3?alt=media&token=60c8888d-142b-4661-a89e-0172722206a7"
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
