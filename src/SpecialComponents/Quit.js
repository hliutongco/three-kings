import React, {Component} from 'react';
import {TOGGLE_MENU, TOGGLE_LOAD, CHANGE_SPECIAL_COMPONENT} from '../actions/index';
import {connect} from 'react-redux';

class Quit extends Component {

  handleYes = () => {
    this.props.toggleMenu()
    if(this.props.load) this.props.unloadGame()
  }

  handleNo = () => {
    this.props.changeSpecialComponent(null)
  }

  render(){
    return (
      <div id="quit-screen">
        <h3 id="quit-text">Are you sure you want to quit?</h3>
        <p id="quit-text-p">You will lose any unsaved progress.</p>
        <button className="quit-button" onClick={this.handleYes}>Yes</button>
        <button className="quit-button" onClick={this.handleNo}>No</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    load: state.load
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(TOGGLE_MENU(false)),
    unloadGame: () => dispatch(TOGGLE_LOAD(false)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quit);
