import React from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT, UPDATE_REDIRECT_DATA, UPDATE_SCORE, RESET_SCORE} from '../actions/index'

const handleClick = (props) => {

  if(props.answerData.clearScore){
    // clear score to 0 at the start of each round
    props.clearScore()
  }

  if(props.answerData.correct){
    props.updateScore()
  }

  // redirects to the bad end if the player has a score of 0
  // or if they have a score of 1 and did not get the last question correct
  if(props.answerData.check_score){
    if(props.score === 1 && !props.answerData.correct){
      props.updateRedirectData(100)
    }
    else if (!props.score) {
      props.updateRedirectData(100)
    }
    else {
      props.updateRedirectData(props.answerData.redirect)
    }
  }
  else if(props.answerData.redirect){
    props.updateRedirectData(props.answerData.redirect)
  }

  props.changeSpecialComponent(null)
}

const Answer = (props) => {
  return (
    <div>
      <button onClick={() => handleClick(props)}>{props.answerData.text}</button>
    </div>
  )
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
