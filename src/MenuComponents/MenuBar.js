import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, TOGGLE_CALL, TOGGLE_LOG} from '../actions/index';

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

  handleSaveClick = () => {
    this.props.changeSpecialComponent("SAVE_SCREEN")
  }


  handleLoadClick = () => {
    if (!this.props.saveData) {
      this.showWarning();
      return
    }

    this.props.changeSpecialComponent("LOAD_SCREEN")
  }

  handleMenuClick = () => {
    this.props.changeSpecialComponent("QUIT_SCREEN")
  }

  handleCallClick = () => {
    this.props.toggleCall()
  }

  handleLogClick = () => {
    this.props.toggleLog()
    this.props.changeSpecialComponent("LOG_SCREEN")
  }

  render(){
    return (
      <div id="menu-bar">
        {this.props.displayCallButton ? <button onClick={this.handleCallClick}> Call </button> : ""}
        <button onClick={this.handleSaveClick}> Save </button>
        <button onClick={this.handleLoadClick}> Load </button>
        <button onClick={this.handleLogClick}> View Log </button>
        <button onClick={this.handleMenuClick}> Quit </button>
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
    toggleCall: () => dispatch(TOGGLE_CALL(true)),
    toggleLog: () => dispatch(TOGGLE_LOG(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
