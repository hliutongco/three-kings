import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT} from '../actions/index'

class Answer extends Component {
  handleClick = () => {
    this.props.changeSpecialComponent(null)
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.answerData.text}</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(null, mapDispatchToProps)(Answer);
