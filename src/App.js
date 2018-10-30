import React, { Component, Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './AudioContainer'
import MusicContainer from './MusicContainer'
import Background from './Background'
import SpecialComponent from './SpecialComponent'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <TextContainer />
        <MusicContainer />
        <AudioContainer />
        <SpecialComponent />
      </Fragment>
    );
  }
}

export default App;
