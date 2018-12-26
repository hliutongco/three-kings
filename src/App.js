import React, { Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './MainContainers/AudioContainer'
import MusicContainer from './MainContainers/MusicContainer'
import Background from './MainContainers/Background'
import SpecialComponent from './MainContainers/SpecialComponent'
import MenuContainer from './MenuComponents/MenuContainer'
import MainMenu from './MenuComponents/MainMenu'
import {connect} from 'react-redux';

const handleRender = (props) => {
  return props.toggleMenu ?
  <Fragment>
  <TextContainer />
  <MenuContainer />
  <SpecialComponent />
  </Fragment>
  :
  <MainMenu />
}

const App = (props) => {
  return (
    <Fragment>
      <Background />
      <MusicContainer />
      <AudioContainer />
      {handleRender(props)}
    </Fragment>
  )
}

const mapStateToProps = ({ load, toggleMenu }) => ({ load, toggleMenu })

export default connect(mapStateToProps)(App);
