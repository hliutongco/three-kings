import React, { Component, Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './MainContainers/AudioContainer'
import MusicContainer from './MainContainers/MusicContainer'
import Background from './MainContainers/Background'
import SpecialComponent from './MainContainers/SpecialComponent'
import MenuContainer from './MenuComponents/MenuContainer'
import MainMenu from './MenuComponents/MainMenu'
import {connect} from 'react-redux';

class App extends Component {

  handleRender = () => {
    return this.props.toggleMenu ?
      <Fragment>
        <TextContainer />
        <MenuContainer />
        <SpecialComponent />
      </Fragment>
      :
      <MainMenu />
  }

  render() {
    return (
      <Fragment>
        <Background />
        <MusicContainer />
        <AudioContainer />
        {this.handleRender()}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ load, toggleMenu }) => ({ load, toggleMenu })

export default connect(mapStateToProps)(App);
