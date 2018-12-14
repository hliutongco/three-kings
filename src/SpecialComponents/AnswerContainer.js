import React, {Component} from 'react';
import Answer from './Answer'
import {connect} from 'react-redux';

class AnswerContainer extends Component {
  renderAnswers = () => {
    return this.props.answers.map((answer, index) => <Answer key={index} answerData={answer}/>)
  }

  render(){
    return (
      <div id="answer-container">
        {this.renderAnswers()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    answers: state.answerOptions
  }
}

export default connect(mapStateToProps)(AnswerContainer)
