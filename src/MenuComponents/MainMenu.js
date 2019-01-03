import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SET_USERNAME, UPDATE_SAVE_DATA, TOGGLE_LOAD, TOGGLE_MENU, CHANGE_MUSIC, CHANGE_BACKGROUND, RESET_SCORE} from '../actions/index';

class MainMenu extends Component {
  state = {
    clicked: false
  }

  componentDidMount() {
    this.props.changeBackground("menu-bg")

    const currentChapter = localStorage.getItem("chapterNumber")
    const currentLine = localStorage.getItem("line")
    const username = localStorage.getItem("username")

    if(currentChapter && currentLine){
      this.props.saveGame({
        chapterNumber: parseInt(currentChapter, 10),
        line: parseInt(currentLine, 10)
      })

      this.props.handleSubmit(username)
    }
  }

  handleStartClick = () => {
    this.setState({clicked: true})
    this.props.changeMusic("https://s3.us-east-2.amazonaws.com/three-kings/main_menu.mp3")
  }

  handleClick = (event) => {
    switch(event.target.name){
      case "new-game":
        this.props.toggleMenu()
        this.props.resetScore()
        break;
      case "load-game":
        if(!this.props.saveData) return
        this.props.toggleMenu()
        this.props.loadGame()
        break;
      default:
        break;
    }
  }

  componentWillUnmount() {
    this.props.changeMusic(null)
    this.props.changeBackground(null)
  }

  render(){
    return (
      <div onClick={this.handleClick} id="main-menu">
        <h1>♕</h1>
        <h1>Three Kings</h1>
        {
        this.state.clicked ?
          <Fragment>
            <button name="new-game">New Game</button>
            <button name="load-game">Load Game</button>
          </Fragment>
        :
          <div onClick={this.handleStartClick} className="blinking"><span>click here to start</span></div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ saveData }) => ({ saveData })

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (username) => dispatch(SET_USERNAME(username)),
    saveGame: (data) => dispatch(UPDATE_SAVE_DATA(data)),
    toggleMenu: () => dispatch(TOGGLE_MENU(true)),
    loadGame: () => dispatch(TOGGLE_LOAD(true)),
    changeBackground: (background) => dispatch(CHANGE_BACKGROUND(background)),
    changeMusic: (music) => dispatch(CHANGE_MUSIC(music)),
    resetScore: () => dispatch(RESET_SCORE(0))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
