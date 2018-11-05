import React from 'react';
import {connect} from 'react-redux';
import {TOGGLE_SAVE, TOGGLE_LOAD} from '../actions/index';



const MenuBar = (props) => {

  const handleSaveClick = () => {
    props.toggleSave();
  }

  const handleLoadClick = () => {
    props.toggleLoad();
  }

  return (
    <div id="menu-bar">
      <button onClick={handleSaveClick}> Save </button>
      <button onClick={handleLoadClick}> Load </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
  }
}

export default connect(null, mapDispatchToProps)(MenuBar);
