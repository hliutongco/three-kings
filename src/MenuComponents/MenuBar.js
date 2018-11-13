import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_SAVE, TOGGLE_LOAD} from '../actions/index';

class MenuBar extends Component {
  state = {
    saveVisible: false,
    loadVisible: false,
    divText: null
  }

  handleSaveClick = () => {
    this.props.toggleSave();

    // This makes the "Game Saved" text visible for 2 seconds
    this.setState((prevState) => {
        return {
          saveVisible: !prevState.saveVisible,
          divText: "Game Saved"
        }
      },
      () => {
        setTimeout(() => this.setState((prevState) => {
          return {saveVisible: !prevState.saveVisible}
        }), 2000)
    })
  }

  showWarning = () => {
    this.setState((prevState) => {
        return {
          loadVisible: !prevState.loadVisible,
          divText: "No Save File"
        }
      },
      () => {
        setTimeout(() => this.setState((prevState) => {
          return {loadVisible: !prevState.loadVisible}
        }), 2000)
    })
  }

  handleLoadClick = () => {
    if (!this.props.saveData) {
      this.showWarning()
      return
    }

    this.props.toggleLoad();

    // This makes the "Game Loaded" text visible for 2 seconds
    this.setState((prevState) => {
        return {
          loadVisible: !prevState.loadVisible,
          divText: "Game Loaded"
        }
      },
      () => {
        setTimeout(() => this.setState((prevState) => {
          return {loadVisible: !prevState.loadVisible}
        }), 2000)
    })
  }

  handleMenuClick = () => {
    console.log("what a quitter");
  }

  render(){
    return (
      <div id="menu-bar">
        <button onClick={this.handleSaveClick}> Save </button>
        <button onClick={this.handleLoadClick}> Load </button>
        <button onClick={this.handleMenuClick}> Quit </button>
        <div className={this.state.saveVisible || this.state.loadVisible ? 'pop-up-text' : 'hidden'}>{this.state.divText}</div>
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
    toggleSave: () => dispatch(TOGGLE_SAVE(true)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(true)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
