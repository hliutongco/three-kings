import React, {Component} from 'react';
import Text from './Text'
import {chapterData} from '../StoryText/chapterData'
import {connect} from 'react-redux';
import {GET_NEXT_CHAPTER} from '../actions/index'

class TextContainer extends Component {
  state = {
    currentLine: 0,
    currentChapter: chapterData[0],
    transition: false
  }

  componentWillReceiveProps(nextProps){
    if(this.props.save) 

    if(this.props.chapterNumber !== nextProps.chapterNumber){
      this.setState({currentLine: 0, currentChapter: chapterData[nextProps.chapterNumber], transition: true},
      () => this.handleTransition())
    }
  }

  handleTransition = () => {
    setTimeout(() => {
      this.setState({transition: false})
    }, 1000)
  }

  handleClick = () => {
    if(this.state.currentLine >= this.state.currentChapter.length - 1){
      this.props.changeChapter(this.props.chapterNumber)
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
    const index = this.state.currentLine

    return (
      <div id="main-text-container" className={this.handleMainContainerClass()}>
        <div id="username-container" onClick={this.handleClick}>
          {this.props.otherDisplayName ? this.props.otherDisplayName : this.props.name}
        </div>
        <div id="text-container" onClick={this.handleClick}>
          <Text currentLine={this.state.currentChapter[index].text}
          displayName={this.state.currentChapter[index].displayName}
          background={this.state.currentChapter[index].background}
          music={this.state.currentChapter[index].music}
          soundEffect={this.state.currentChapter[index].soundEffect}
          special={this.state.currentChapter[index].special} />
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
    save: state.save
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChapter: (chapterNumber) => dispatch(GET_NEXT_CHAPTER(chapterNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);
