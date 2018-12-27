import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, TOGGLE_MENU} from '../actions/index'

class EndScreen extends Component {
  state = {
    delayActivated: true
  }

  componentDidMount = () => {
    // this creates a 1-second delay before showing the end screen
    setTimeout(() => this.setState({delayActivated: false}), 1000)
  }

  handleClick = () => {
    this.setState(
      {delayActivated: true},
      () => setTimeout(() => {
        this.props.toggleMenu()
        this.props.changeSpecialComponent(null)
      }, 1000)
    )
  }

  renderEndScreen = () => {
    return (
      <Fragment>
        <h3>Congratulations! You received the:</h3>
        <h2>{this.props.ending} -END-</h2>
      </Fragment>
    )
  }

  render(){
    return (
      <div id="end-screen" onClick={this.state.delayActivated ? null : this.handleClick}>
        { this.state.delayActivated ? "" : this.renderEndScreen() }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    toggleMenu: () => dispatch(TOGGLE_MENU(false))
  }
}

export default connect(null, mapDispatchToProps)(EndScreen);
