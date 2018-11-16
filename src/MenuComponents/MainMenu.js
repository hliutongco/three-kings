import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_LOAD, TOGGLE_MENU} from '../actions/index';
import candle from "../images/candle.gif";

class MainMenu extends Component {
  handleClick = (event) => {
    switch(event.target.id){
      case "new-game":
        this.props.toggleMenu()
        break;
      case "load-game":
        if(!this.props.saveData) return
        this.props.toggleMenu()
        this.props.loadGame()
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div onClick={this.handleClick} id="main-menu">
        <h1>Three Kings</h1>
        <button id="new-game" className="main-menu-buttons">New Game</button>
        <button id="load-game" className="main-menu-buttons">Load Game</button>
        <div id="candle"><img src={candle}/></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    saveData: state.saveData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(TOGGLE_MENU(true)),
    loadGame: () => dispatch(TOGGLE_LOAD(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
