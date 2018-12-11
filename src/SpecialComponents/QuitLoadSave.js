import React, {Component} from 'react';
import {TOGGLE_SAVE, TOGGLE_MENU, TOGGLE_LOAD, CHANGE_SPECIAL_COMPONENT} from '../actions/index';
import {connect} from 'react-redux';

class QuitLoadSave extends Component {

  handleYes = () => {
    switch(this.props.quitLoadOrSave){
      case "quit":
        this.props.toggleMenu();
        if(this.props.load) this.props.unloadGame()
        break;
      case "load":
        this.props.toggleLoad();
        this.props.changeSpecialComponent(null)
        break;
      case "save":
        this.props.toggleSave();
        this.props.changeSpecialComponent(null)
        break;
      default:
        return
    }
  }

  handleNo = () => {
    this.props.changeSpecialComponent(null)
  }

  render(){
    return (
      <div id="quit-screen">
        <h3 id="quit-text">Are you sure you want to {this.props.quitLoadOrSave}?</h3>
        <p id="quit-text-p">{this.props.quitLoadOrSave === "save" ? "" : "You will lose any unsaved progress."}</p>
        <button className="quit-button" onClick={this.handleYes}>Yes</button>
        <button className="quit-button" onClick={this.handleNo}>No</button>
      </div>
    )
  }
}

const mapStateToProps = ({ load }) => ({ load })

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
    toggleMenu: () => dispatch(TOGGLE_MENU(false)),
    unloadGame: () => dispatch(TOGGLE_LOAD(false)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuitLoadSave);
