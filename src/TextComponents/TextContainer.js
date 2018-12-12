import React, {Component} from 'react';
import Text from './Text'
import {chapterData} from '../StoryText/tableOfContents'
import {connect} from 'react-redux';
import {SET_USERNAME, UPDATE_SAVE_DATA, TOGGLE_SAVE, TOGGLE_LOAD, RESET_TO_NULL} from '../actions/index'

class TextContainer extends Component {
  state = {
    currentLine: 0,
    currentChapter: 0,
    transition: false
  }

  componentDidMount(){
    if(this.props.load && this.props.saveData){
      this.props.toggleLoad()
      this.setState({
        currentChapter: this.props.saveData.chapterNumber,
        currentLine: this.props.saveData.line
      })
    }
  }


  handleTransition = () => {
    setTimeout(() => {
      this.setState({transition: false})
    }, 1000)
  }

  handleClick = () => {
    // The below code handles the transition between scenes
    if(this.state.currentLine >= chapterData[this.state.currentChapter].length - 1){
      this.setState({currentLine: 0, currentChapter: this.state.currentChapter + 1, transition: true},
      () => {
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
      return `hidden ${this.props.otherDisplayName}`
    }
    else if(this.state.transition) {
      return 'hidden'
    }
    else if (this.props.otherDisplayName) {
      return `${this.props.otherDisplayName}`
    }
    else {
      return ''
    }
  }

  render(){
    const currentChapter = chapterData[this.state.currentChapter]
    const index = this.state.currentLine

    return (
      <div id="main-text-container" className={this.handleMainContainerClass()}>
        <div id="username-container" onClick={this.handleClick}>
          {this.props.otherDisplayName ? this.props.otherDisplayName : this.props.name}
        </div>
        <div id="text-container" onClick={this.handleClick}>
          <Text currentLine={currentChapter[index].text}
          displayName={currentChapter[index].displayName}
          background={currentChapter[index].background}
          music={currentChapter[index].music}
          soundEffect={currentChapter[index].soundEffect}
          special={currentChapter[index].special} />
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps){
    // The save is coming from the buttons on the menu
    if(this.props.save) {
      this.props.toggleSave()
      this.props.saveGame({chapterNumber: this.state.currentChapter, line: this.state.currentLine})
      localStorage.setItem("chapterNumber", `${this.state.currentChapter}`);
      localStorage.setItem("line", `${this.state.currentLine}`);
      localStorage.setItem("username", `${this.props.name}`);
    }

    // The load is coming from the buttons on the menu
    if(this.props.load) {
      this.props.toggleLoad()
      if (!this.props.saveData) return

      // Upon load, make sure the username is loaded from the save file
      this.props.changeUsername(localStorage.getItem("username"))

      this.setState({
        currentChapter: this.props.saveData.chapterNumber,
        currentLine: this.props.saveData.line
      })
    }
  }

  componentWillUnmount(){
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
    saveData: state.saveData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (username) => dispatch(SET_USERNAME(username)),
    saveGame: (data) => dispatch(UPDATE_SAVE_DATA(data)),
    toggleSave: () => dispatch(TOGGLE_SAVE(false)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(false)),
    reset: () => dispatch(RESET_TO_NULL())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);
