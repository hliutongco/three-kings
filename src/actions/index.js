

export const CHANGE_BACKGROUND = (background) => {
  return {
    type: "CHANGE_BACKGROUND",
    payload: background
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
