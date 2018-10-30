export const CHANGE_DISPLAY_NAME = (name) => {
  return {
    type: "CHANGE_DISPLAY_NAME",
    payload: name
  }
}

export const GET_NEXT_CHAPTER = (chapterNumber) => {
  return {
    type: "GET_NEXT_CHAPTER",
    payload: chapterNumber + 1
  }
}

export const CHANGE_BACKGROUND = (background) => {
  return {
    type: "CHANGE_BACKGROUND",
    payload: background
  }
}

export const CHANGE_MUSIC = (music) => {
  return {
    type: "CHANGE_MUSIC",
    payload: music
  }
}

export const CHANGE_SOUND_EFFECT = (sound) => {
  return {
    type: "CHANGE_SOUND_EFFECT",
    payload: sound
  }
}

export const CHANGE_SPECIAL_COMPONENT = (command) => {
  return {
    type: "CHANGE_SPECIAL_COMPONENT",
    payload: command
  }
}

export const SET_USERNAME = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username
  }
}
