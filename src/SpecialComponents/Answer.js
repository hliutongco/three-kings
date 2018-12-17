import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, UPDATE_REDIRECT_DATA, UPDATE_SCORE, RESET_SCORE} from '../actions/index'

class Answer extends Component {
  handleClick = () => {
    if(this.props.answerData.correct){
      this.props.updateScore()
    }
    console.log(this.props.score);

    // redirects to the bad end if the player has a score of 0
    // or if they have a score of 1 and did not get the last question correct
    if(this.props.answerData.check_score){
      if(this.props.score === 1 && !this.props.answerData.correct){
        this.props.updateRedirectData(100)
      }
      else if (!this.props.score) {
        this.props.updateRedirectData(100)
      }
      else {
        this.props.updateRedirectData(this.props.answerData.redirect)
      }

      // clear score to 0 after score has been checked
      this.props.clearScore()
    }
    else if(this.props.answerData.redirect){
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

const mapStateToProps = ({score}) => ({score})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    updateRedirectData: (data) => dispatch(UPDATE_REDIRECT_DATA(data)),
    updateScore: () => dispatch(UPDATE_SCORE()),
    clearScore: () => dispatch(RESET_SCORE(0))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
