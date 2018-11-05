import React, {Component} from 'react';
import Text from './Text'
import {chapterData} from '../StoryText/chapterData'
import {connect} from 'react-redux';
import {GET_CHAPTER, UPDATE_SAVE_DATA, TOGGLE_SAVE, TOGGLE_LOAD} from '../actions/index'

class TextContainer extends Component {
  state = {
    currentLine: 0,
    currentChapter: 0,
    transition: false
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.save) {
      this.props.toggleSave()
      this.props.saveGame({chapterNumber: this.state.currentChapter, line: this.state.currentLine})
    }

    if(nextProps.load) {
      this.setState({
        currentChapter: this.props.saveData.chapterNumber,
        currentLine: this.props.saveData.line
      }, () => {
          this.props.toggleLoad()
        })
    }
  }

  handleTransition = () => {
    setTimeout(() => {
      this.setState({transition: false})
    }, 1000)
  }

  handleClick = () => {
    if(this.state.currentLine >= chapterData[this.state.currentChapter].length - 1){
      this.setState({currentLine: 0, currentChapter: this.state.currentChapter + 1, transition: true},
      () => {
      this.handleTransition()
    })
    }
    else {
      this.setState((prevState) => {
        return {
          currentLine: prevState.currentLine + 1
        }
      })
    }
  }

  handleMainContainerClass = () => {
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
    saveGame: (data) => dispatch(UPDATE_SAVE_DATA(data)),
    toggleSave: () => dispatch(TOGGLE_SAVE(false)),
    toggleLoad: () => dispatch(TOGGLE_LOAD(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);
