import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_SAVE, TOGGLE_LOAD} from '../actions/index';

class MenuBar extends Component {
  state = {
    visible: false
  }

  handleSaveClick = () => {
    this.props.toggleSave();

    // This makes the "Game Saved" text visible for 2 seconds
    this.setState((prevState) => {
        return {visible: !prevState.visible}
      },
      () => {
        setTimeout(() => this.setState((prevState) => {
          return {visible: !prevState.visible}
        }), 2000)
    })
  }

  handleLoadClick = () => {
    this.props.toggleLoad();
  }

  render(){
    return (
      <div id="menu-bar">
        <button onClick={this.handleSaveClick}> Save </button>
        <button onClick={this.handleLoadClick}> Load </button>
        <div className={this.state.visible ? 'pop-up-text' : 'hidden'}>Game Saved</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
  }
}

export default connect(null, mapDispatchToProps)(MenuBar);
