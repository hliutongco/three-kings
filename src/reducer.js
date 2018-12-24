
const initialState = {
  background: null,
  specialComponent: null,
  username: null,
  otherDisplayName: null,
  soundEffect: null,
  music: null,
  save: false,
  load: false,
  toggleMenu: false,
  call: false,
  displayCallButton: false,
  saveData: null,
  answerOptions: null,
  redirect: false,
  redirectData: null,
  score: 0,
  checkpoint: null,
  logData: null,
  displayLog: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_USERNAME":
      return { ...state,
        username: action.payload
      }
    case "CHANGE_DISPLAY_NAME":
      return { ...state,
        otherDisplayName: action.payload
      }
    case "CHANGE_BACKGROUND":
      return { ...state,
        background: action.payload
      }
    case "CHANGE_MUSIC":
      return { ...state,
        music: action.payload
      }
    case "CHANGE_SOUND_EFFECT":
      return { ...state,
        soundEffect: action.payload
      }
    case "CHANGE_SPECIAL_COMPONENT":
      return { ...state,
        specialComponent: action.payload
      }
    case "TOGGLE_MENU":
      return { ...state,
        toggleMenu: action.payload
      }
    case "TOGGLE_SAVE":
      return { ...state,
        save: action.payload
      }
    case "TOGGLE_LOAD":
      return { ...state,
        load: action.payload
      }
    case "TOGGLE_LOG":
      return { ...state,
        displayLog: action.payload
      }
    case "UPDATE_SAVE_DATA":
      return { ...state,
        saveData: action.payload
      }
    case "UPDATE_LOG_DATA":
      return { ...state,
        logData: action.payload
      }
    case "UPDATE_SCORE":
      return { ...state,
        score: state.score + action.payload
      }
    case "RESET_SCORE":
      return { ...state,
        score: action.payload
      }
    case "RESET_TO_NULL":
      return { ...state,
        background: null,
        specialComponent: null,
        otherDisplayName: null,
        soundEffect: null,
        music: null
      }
    case "CHANGE_ANSWERS":
      return {
        ...state,
        answerOptions: action.payload
      }
    case "TOGGLE_REDIRECT":
      return {
        ...state,
        redirect: action.payload
      }
    case "TOGGLE_CALL":
      return {
        ...state,
        call: action.payload
      }
    case "DISPLAY_CALL_BUTTON":
      return {
        ...state,
        displayCallButton: action.payload
      }
    case "UPDATE_REDIRECT_DATA":
      return {
        ...state,
        redirectData: action.payload
      }
    case "UPDATE_CHECKPOINT":
      return {
        ...state,
        checkpoint: action.payload
      }
    default:
      return state
  }
}
