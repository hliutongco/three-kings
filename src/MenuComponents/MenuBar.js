import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, TOGGLE_LOG} from '../actions/index';

class MenuBar extends Component {
  state = {
    saveVisible: false,
    loadVisible: false,
    divText: "_"
  }

  setLoadTimeout = () => {
    this.timer = setTimeout(() => this.setState({loadVisible: false}), 2000)
  }

  showWarning = () => {
    this.setState({
      loadVisible: true,
      divText: "No Save File"
    },
    () => {
      this.setLoadTimeout()
    })
  }

  handleClick = (action) => {
    if (!this.props.saveData && action === "LOAD_SCREEN") {
      this.showWarning();
      return
    }
    else if (action === "LOG_SCREEN") {
      this.props.toggleLog()
    }

    this.props.changeSpecialComponent(action)
  }

  render(){
    return (
      <div id="menu-bar">
        {this.props.displayCallButton ? <button onClick={() => this.handleClick("CALL_SCREEN")}> Call </button> : ""}
        <button onClick={() => this.handleClick("SAVE_SCREEN")}> Save </button>
        <button onClick={() => this.handleClick("LOAD_SCREEN")}> Load </button>
        <button onClick={() => this.handleClick("LOG_SCREEN")}> View Log </button>
        <button onClick={() => this.handleClick("QUIT_SCREEN")}> Quit </button>
        <div className={this.state.saveVisible || this.state.loadVisible ? 'pop-up-text' : 'hidden-text'}>{this.state.divText}</div>
      </div>
    )
  }

  componentDidUpdate(prevProps){
    if(this.props.save){
      // This makes the "Game Saved" text visible for 2 seconds
      this.setState({
          saveVisible: true,
          divText: "Game Saved"
        },
        () => {
          this.timer = setTimeout(() => this.setState({saveVisible: false}), 2000)
      })
    }

    if(this.props.load){
      // This makes the "Game Loaded" text visible for 2 seconds
      this.setState({
          loadVisible: true,
          divText: "Game Loaded"
        },
        () => {
          this.setLoadTimeout()
      })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }
}

const mapStateToProps = ({ save, load, saveData, displayCallButton }) => ({ save, load, saveData, displayCallButton })

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    toggleLog: () => dispatch(TOGGLE_LOG(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
