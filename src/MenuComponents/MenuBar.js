import React from 'react';
import {connect} from 'react-redux';
import {TOGGLE_SAVE} from '../actions/index';



const MenuBar = (props) => {

  const handleSaveClick = () => {
    props.toggleSave();
  }

  const handleLoadClick = () => {
    console.log("load click");
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
    toggleSave: () => dispatch(TOGGLE_SAVE(true))
  }
}

export default connect(null, mapDispatchToProps)(MenuBar);
