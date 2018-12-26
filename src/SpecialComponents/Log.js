import React from 'react';
import {connect} from 'react-redux';
import {CHANGE_SPECIAL_COMPONENT} from '../actions/index'
import {chapterData} from '../StoryText/tableOfContents'
import LogLine from './LogLine'

const handleClick = (props) => {
  props.changeSpecialComponent(null)
}

const renderLog = (props) => {
  if(props.logData){
    const currentChapter = props.logData.currentChapter;
    const currentLine = props.logData.currentLine;
    let lineCounter = 0;
    const script = []

    while(lineCounter <= currentLine){
      script.push(chapterData[currentChapter][lineCounter]);
      lineCounter++;
    }

    return script.map((lineObj, index) => {
      if (lineObj.text === "") return null
      return <LogLine key={index}
      displayName={lineObj.displayName ? lineObj.displayName : props.username}
      displayText={lineObj.text}/>
    }).reverse()

  }
}

const Log = (props) => {
  return (
    <div id="log-container">
      <div>
        {renderLog(props)}
      </div>
      <button onClick={() => handleClick(props)}>Close</button>
    </div>
  )
}

const mapStateToProps = ({logData, username}) => ({logData, username})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);
