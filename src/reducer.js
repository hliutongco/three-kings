
const initialState = {
  background: null,
  specialComponent: null,
  username: "???",
  otherDisplayName: null,
  soundEffect: null,
  music: null,
  save: false,
  load: false,
  saveData: {chapterNumber: 0, line: 0}
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
    case "TOGGLE_SAVE":
      return { ...state,
        save: action.payload
      }
    case "TOGGLE_LOAD":
      return { ...state,
        load: action.payload
      }
    case "UPDATE_SAVE_DATA":
      return { ...state,
        saveData: action.payload
      }
    default:
      return state
  }
}
