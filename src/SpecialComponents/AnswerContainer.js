import React from 'react';
import Answer from './Answer'
import {connect} from 'react-redux';

const renderAnswers = (props) => {
  return props.answers.map((answer, index) => <Answer key={index} answerData={answer}/>)
}

const AnswerContainer = (props) => {
  return (
    <div id="answer-container">
      {renderAnswers(props)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    answers: state.answerOptions
  }
}

export default connect(mapStateToProps)(AnswerContainer)
