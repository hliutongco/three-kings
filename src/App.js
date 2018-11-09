import React, { Component, Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './AudioContainer'
import MusicContainer from './MusicContainer'
import Background from './Background'
import SpecialComponent from './SpecialComponent'
import MenuBar from './MenuComponents/MenuBar'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Background />
        <TextContainer />
        <MenuBar />
        <MusicContainer />
        <AudioContainer />
        <SpecialComponent />
      </Fragment>
    );
  }
}

export default App;
