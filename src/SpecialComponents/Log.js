import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT} from '../actions/index'
import {chapterData} from '../StoryText/tableOfContents'
import LogLine from './LogLine'

class Log extends Component {

  handleClick = () => {
    this.props.changeSpecialComponent(null)
  }

  renderLog = () => {
    if(this.props.logData){
      const currentChapter = this.props.logData.currentChapter;
      const currentLine = this.props.logData.currentLine;
      let lineCounter = 0;
      const script = []

      while(lineCounter <= currentLine){
        script.push(chapterData[currentChapter][lineCounter]);
        lineCounter++;
      }

      return script.map((lineObj, index) => {
        if (lineObj.text === "") return null
        return <LogLine key={index}
        displayName={lineObj.displayName ? lineObj.displayName : this.props.username}
        displayText={lineObj.text}/>
      }).reverse()


    }
  }

  render(){

    return (
      <div id="log-container">
        <div>
          {this.renderLog()}
        </div>
        <button onClick={this.handleClick}>Close</button>
      </div>
    )
  }
}

const mapStateToProps = ({logData, username}) => ({logData, username})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);
