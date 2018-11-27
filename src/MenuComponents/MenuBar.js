import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_SAVE, TOGGLE_LOAD, CHANGE_SPECIAL_COMPONENT} from '../actions/index';

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
    this.props.toggleSave();

    // This makes the "Game Saved" text visible for 2 seconds
    this.setState({
        saveVisible: true,
        divText: "Game Saved"
      },
      () => {
        this.timer = setTimeout(() => this.setState({saveVisible: false}), 2000)
    })
  }


  handleLoadClick = () => {
    if (!this.props.saveData) {
      this.showWarning()
      return
    }

    this.props.toggleLoad();

    // This makes the "Game Loaded" text visible for 2 seconds
    this.setState({
        loadVisible: true,
        divText: "Game Loaded"
      },
      () => {
        this.setLoadTimeout()
    })
  }

  handleMenuClick = () => {
    this.props.changeSpecialComponent("QUIT_SCREEN")
  }

  render(){
    return (
      <div id="menu-bar">
        <button onClick={this.handleSaveClick}> Save </button>
        <button onClick={this.handleLoadClick}> Load </button>
        <button onClick={this.handleMenuClick}> Quit </button>
        <div className={this.state.saveVisible || this.state.loadVisible ? 'pop-up-text' : 'hidden-text'}>{this.state.divText}</div>
      </div>
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }
}

const mapStateToProps = (state) => {
  return {
    saveData: state.saveData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
