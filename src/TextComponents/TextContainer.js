import React, {Component} from 'react';
import Text from './Text'
import {chapterData, enableMenu, checkpointData} from '../StoryText/tableOfContents'
import {connect} from 'react-redux';
import {SET_USERNAME, UPDATE_SAVE_DATA, TOGGLE_SAVE, TOGGLE_LOAD, TOGGLE_REDIRECT, RESET_TO_NULL, RESET_SCORE, ENABLE_CALL, UPDATE_CHECKPOINT, TOGGLE_CALL, UPDATE_LOG_DATA} from '../actions/index'

class TextContainer extends Component {
  state = {
    currentLine: 0,
    currentChapter: 0,
    transition: false
  }

  componentDidMount(){
    if(this.props.load && this.props.saveData){
      this.props.toggleLoad()
      this.props.resetScore(parseInt(localStorage.getItem("score")))
      this.props.updateCheckpoint({currentChapter: parseInt(localStorage.getItem("currentChapter")), currentLine: parseInt(localStorage.getItem("currentLine"))})

      this.setState({
        currentChapter: this.props.saveData.chapterNumber,
        currentLine: this.props.saveData.line
      }, () => this.enableCallButton())
    }
    else {
      this.enableCallButton()
    }
  }

  enableCallButton = () => {
    if(enableMenu.includes(this.state.currentChapter)){
      this.props.enableCall(true)
    }
    else {
      this.props.enableCall(false)
    }
  }

  handleTransition = () => {
    // this saves checkpoint data
    if(checkpointData.includes(this.state.currentChapter)){
      this.props.updateCheckpoint({currentChapter: this.state.currentChapter, currentLine: this.state.currentLine})
    }
    else if (!enableMenu.includes(this.state.currentChapter)){
      // if enableMenu has the current chapter, don't change to null
      // because that means a checkpoint should still be active
      this.props.updateCheckpoint(null)
    }

    this.enableCallButton()

    setTimeout(() => {
      this.setState({transition: false})
    }, 1000)
  }

  handleClick = () => {
    // The below code handles the transition between scenes
    if(this.state.currentLine >= chapterData[this.state.currentChapter].length - 1){
      this.setState({currentLine: 0, currentChapter: this.state.currentChapter + 1, transition: true},
      () => {
        this.enableCallButton()
        this.handleTransition()
      })
    }
    else {
      // This simply displays the next line of text
      this.setState((prevState) => {
        return {
          currentLine: prevState.currentLine + 1
        }
      })
    }
  }

  handleMainContainerClass = () => {
    // This code handles special cases
    // e.g. if there is a transition and/or a special display name
    if(this.state.transition && this.props.otherDisplayName){
      return `main-text-container hidden ${this.props.otherDisplayName}`
    }
    else if(this.state.transition) {
      return 'main-text-container hidden'
    }
    else if (this.props.otherDisplayName) {
      return `main-text-container ${this.props.otherDisplayName}`
    }
    else {
      return 'main-text-container'
    }
  }

  render(){
    const currentChapter = chapterData[this.state.currentChapter]
    const index = this.state.currentLine

    return (
      <div id="outer-text-container" onClick={this.handleClick}>
        <div className={this.handleMainContainerClass()}>
          <div onClick={this.handleClick}>
            {this.props.otherDisplayName ? this.props.otherDisplayName : this.props.name}
          </div>
          <div>
            <Text currentLine={currentChapter[index].text}
            displayName={currentChapter[index].displayName}
            background={currentChapter[index].background}
            music={currentChapter[index].music}
            soundEffect={currentChapter[index].soundEffect}
            special={currentChapter[index].special}
            redirectTrigger={currentChapter[index].redirectTrigger} />
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps){
    // The save is coming from the buttons on the menu
    if(this.props.save) {
      this.props.toggleSave()
      this.props.saveGame({chapterNumber: this.state.currentChapter, line: this.state.currentLine, score: this.props.score})
      localStorage.setItem("chapterNumber", `${this.state.currentChapter}`);
      localStorage.setItem("line", `${this.state.currentLine}`);
      localStorage.setItem("username", `${this.props.name}`);
      localStorage.setItem("score", `${this.props.score}`);
      if(this.props.checkpoint){
        localStorage.setItem("currentChapter", `${this.props.checkpoint.currentChapter}`)
        localStorage.setItem("currentLine", `${this.props.checkpoint.currentLine}`)
      }
    }

    // The load is coming from the buttons on the menu
    if(this.props.load) {
      this.props.toggleLoad()
      if (!this.props.saveData) return

      // Upon load, make sure the username is loaded from the save file
      // Also reset score to the score stored in the save data
      // And resets the checkpoint to whatever is in the save data
      this.props.changeUsername(localStorage.getItem("username"))
      this.props.resetScore(parseInt(localStorage.getItem("score")))
      this.props.updateCheckpoint({currentChapter: parseInt(localStorage.getItem("currentChapter")), currentLine: parseInt(localStorage.getItem("currentLine"))})

      this.setState({
        currentChapter: this.props.saveData.chapterNumber,
        currentLine: this.props.saveData.line
      }, () => this.enableCallButton())
    }

    // The redirect is coming from the Answer component
    if(this.props.redirect) {
      this.props.toggleRedirect()
      this.setState({
        currentChapter: this.props.redirectData,
        currentLine: 0,
        transition: true
      },
      () => {
      this.handleTransition()
      })
    }

    if(this.props.call){
      this.props.toggleCall()
      this.props.resetScore(0)
      this.setState({
        currentChapter: this.props.checkpoint.currentChapter,
        currentLine: this.props.checkpoint.currentLine
      })
    }

    if(this.props.log){
      this.props.updateLogData({currentChapter: this.state.currentChapter, currentLine: this.state.currentLine})
    }
  }

  componentWillUnmount(){
    // resets all the sounds, background, etc. to null
    this.props.reset()
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.username,
    otherDisplayName: state.otherDisplayName,
    chapterNumber: state.chapterNumber,
    save: state.save,
    load: state.load,
    saveData: state.saveData,
    redirect: state.redirect,
    redirectData: state.redirectData,
    score: state.score,
    call: state.call,
    checkpoint: state.checkpoint,
    log: state.displayLog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (username) => dispatch(SET_USERNAME(username)),
    saveGame: (data) => dispatch(UPDATE_SAVE_DATA(data)),
    toggleSave: () => dispatch(TOGGLE_SAVE(false)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(false)),
    toggleRedirect: () => dispatch(TOGGLE_REDIRECT(false)),
    reset: () => dispatch(RESET_TO_NULL()),
    resetScore: (score) => dispatch(RESET_SCORE(score)),
    enableCall: (boolean) => dispatch(ENABLE_CALL(boolean)),
    updateCheckpoint: (checkpoint) => dispatch(UPDATE_CHECKPOINT(checkpoint)),
    toggleCall: () => dispatch(TOGGLE_CALL(false)),
    updateLogData: (data) => dispatch(UPDATE_LOG_DATA(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);
