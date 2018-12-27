import React from 'react';
import {TOGGLE_SAVE, TOGGLE_MENU, TOGGLE_LOAD, CHANGE_SPECIAL_COMPONENT} from '../actions/index';
import {connect} from 'react-redux';

const handleYes = (props) => {
  switch(props.quitLoadOrSave){
    case "quit":
      props.toggleMenu();
      // if(props.load) props.unloadGame()
      break;
    case "load":
      props.toggleLoad();
      props.changeSpecialComponent(null)
      break;
    case "save":
      props.toggleSave();
      props.changeSpecialComponent(null)
      break;
    default:
      return
  }
}

const handleNo = (props) => {
  props.changeSpecialComponent(null)
}

const QuitLoadSave = (props) => {
  return (
    <div id="quit-screen">
      <h3>Are you sure you want to {props.quitLoadOrSave}?</h3>
      <p>{props.quitLoadOrSave === "save" ? "" : "You will lose any unsaved progress."}</p>
      <button onClick={() => handleYes(props)}>Yes</button>
      <button onClick={() => handleNo(props)}>No</button>
    </div>
  )
}

const mapStateToProps = ({ load }) => ({ load })

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
    toggleMenu: () => dispatch(TOGGLE_MENU(false)),
    // unloadGame: () => dispatch(TOGGLE_LOAD(false)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuitLoadSave);
