export const CHANGE_DISPLAY_NAME = (name) => {
  return {
    type: "CHANGE_DISPLAY_NAME",
    payload: name
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

export const CHANGE_ANSWERS = (answers) => {
  return {
    type: "CHANGE_ANSWERS",
    payload: answers
  }
}

export const TOGGLE_MENU = (boolean) => {
  return {
    type: "TOGGLE_MENU",
    payload: boolean
  }
}

export const TOGGLE_SAVE = (boolean) => {
  return {
    type: "TOGGLE_SAVE",
    payload: boolean
  }
}

export const TOGGLE_LOAD = (boolean) => {
  return {
    type: "TOGGLE_LOAD",
    payload: boolean
  }
}

export const TOGGLE_REDIRECT = (boolean) => {
  return {
    type: "TOGGLE_REDIRECT",
    payload: boolean
  }
}

export const UPDATE_SAVE_DATA = (data) => {
  return {
    type: "UPDATE_SAVE_DATA",
    payload: data
  }
}

export const UPDATE_REDIRECT_DATA = (data) => {
  return {
    type: "UPDATE_REDIRECT_DATA",
    payload: data
  }
}

export const UPDATE_SCORE = () => {
  return {
    type: "UPDATE_SCORE",
    payload: 1
  }
}

export const RESET_SCORE = (score) => {
  return {
    type: "RESET_SCORE",
    payload: score
  }
}

export const SET_USERNAME = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username
  }
}

export const RESET_TO_NULL = () => {
  return {
    type: "RESET_TO_NULL",
    payload: null
  }
}
