import React, { Component, Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './AudioContainer'
import MusicContainer from './MusicContainer'
import Background from './Background'
import SpecialComponent from './SpecialComponent'
import MenuContainer from './MenuComponents/MenuContainer'
import MainMenu from './MenuComponents/MainMenu'
import {connect} from 'react-redux';

class App extends Component {

  handleRender = () => {
    return this.props.toggleMenu ?
      <Fragment>
        <Background />
        <TextContainer />
        <MenuContainer />
        <MusicContainer />
        <AudioContainer />
        <SpecialComponent />
      </Fragment>
      :
      <MainMenu />
  }

  render() {
    return (
      <Fragment>
        {this.handleRender()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    load: state.load,
    toggleMenu: state.toggleMenu
  }
}

export default connect(mapStateToProps)(App);
