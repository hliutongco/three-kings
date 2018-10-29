import React, {Component} from 'react';
import PrologueText from './PrologueText'
import {prologueData} from '../StoryText/prologue'


export default class TextContainer extends Component {
  state = {
    currentLine: 0
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        currentLine: prevState.currentLine + 1
      }
    })
  }

  render(){
    const index = this.state.currentLine
    return (
      <div id="text-container" onClick={this.handleClick}>
        <PrologueText currentLine={prologueData[index].text}
        background={prologueData[index].background}
        soundEffect={prologueData[index].soundEffect}
        special={prologueData[index].special} />
      </div>
    )
  }
}
