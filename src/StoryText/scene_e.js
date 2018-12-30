import {fool, fool_laugh, underwater, underwater_music, jinghua, phone_vibration, show_answers_iv, show_answers_v, show_answers_vi, fade_music} from './dictionary'

export const scene_E = [
  { displayName: null, special: null, background: null, music: null, soundEffect: null, text: "Where am I now?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "What is this? Am I still floating?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "Is this ... water?" },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "\"Welcome. These next questions will test your resolve.\"" },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: fool_laugh, text: "\"What are you willing to sacrifice?\"" },
  { displayName: fool, special: show_answers_iv, background: underwater, music: underwater_music, soundEffect: null, text: "\"Interesting. Be honest, now. Are you willing to put your wish above all else?\"" },
  { displayName: fool, special: show_answers_v, background: underwater, music: underwater_music, soundEffect: null, text: "\"How amusing. I hope you won't regret your decision.\"" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "I'm starting to feel sick. I wonder if I made the right choice?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: phone_vibration, text: "Suddenly, there's a buzzing from my pocket. Someone is calling me." },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: phone_vibration, text: "\"Well? Are you not curious? It might be something important.\"" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "With trembling fingers, I lift the phone to my ear. A familiar voice greets me." },
  { displayName: jinghua, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "\"You must leave. Something terrible will happen if you stay.\"" },
  { displayName: jinghua, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "\"I know how much this ritual means to you. But it's not what we thought. You must leave now!\"" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "Before she can say anything more, the call suddenly goes dead." },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "Doubt clouds my mind. What is going on? Is this a trick?" },
  { displayName: null, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "Is Jinghua really in danger?" },
  { displayName: fool, special: null, background: underwater, music: underwater_music, soundEffect: null, text: "\"Which will you choose, human? Will you heed your friend's warning?\"" },
  { displayName: fool, special: show_answers_vi, background: underwater, music: underwater_music, soundEffect: null, text: "\"What a curious one you are. I hope you chose wisely.\"" },
  { displayName: null, special: null, background: underwater, music: fade_music, soundEffect: null, text: "I can feel myself fading once more. Jinghua ... please be okay." },
  { displayName: null, special: null, background: underwater, music: null, soundEffect: null, redirectTrigger: true, text: "" },

]
