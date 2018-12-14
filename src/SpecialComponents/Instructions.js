import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT} from '../actions/index'

class Instructions extends Component {
  state = {
    delayActivated: true
  }

  componentDidMount = () => {
    // this creates a 1-second delay before showing the isntructions
    setTimeout(() => this.setState({delayActivated: false}), 1000)
  }

  handleClick = () => {
    // this creates a 1-second delay before going back to the story
    this.setState(
      {delayActivated: true},
      () => setTimeout(() => this.props.changeSpecialComponent(null), 1000)
    )
  }

  renderInstructions = () => {
    return (
      <Fragment>
        <h1>Instructions</h1>
        <p>The choices you make from this point will affect the story.</p>
        <p>You will notice a new button on your menu: <span>Call</span>. When things are taking a bad turn, you can use this button to call Jinghua and go back to your most recent checkpoint.</p>
        <p>You only have one save file, so make sure to use it wisely. Good luck!</p>
        <button onClick={this.handleClick}>Close</button>
      </Fragment>
    )
  }

  render(){
    return (
      <div id="show-instructions">
        {this.state.delayActivated ? "" : this.renderInstructions()}
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(null, mapDispatchToProps)(Instructions);
