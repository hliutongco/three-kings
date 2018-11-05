const initialState = {
  background: null,
  specialComponent: null,
  username: "???",
  otherDisplayName: null,
  soundEffect: null,
  music: null,
  chapterNumber: 0,
  save: false,
  saveData: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_USERNAME":
      return { ...state,
        username: action.payload
      }
    case "GET_NEXT_CHAPTER":
      return { ...state,
        chapterNumber: action.payload
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
    case "UPDATE_SAVE_DATA":
      return { ...state,
        saveData: action.payload
      }
    default:
      return state
  }
}
