import React, { Component, Fragment } from 'react';
import TextContainer from './TextComponents/TextContainer'
import AudioContainer from './AudioContainer'
import MusicContainer from './MusicContainer'
import Background from './Background'
import SpecialComponent from './SpecialComponent'
import MenuContainer from './MenuComponents/MenuContainer'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Background />
        <TextContainer />
        <MenuContainer />
        <MusicContainer />
        <AudioContainer />
        <SpecialComponent />
      </Fragment>
    );
  }
}

export default App;
