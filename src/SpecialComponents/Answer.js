import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, UPDATE_REDIRECT_DATA} from '../actions/index'

class Answer extends Component {
  handleClick = () => {
    if(this.props.answerData.redirect){
      this.props.updateRedirectData(this.props.answerData.redirect)
    }

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
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    updateRedirectData: (data) => dispatch(UPDATE_REDIRECT_DATA(data))
  }
}

export default connect(null, mapDispatchToProps)(Answer);
