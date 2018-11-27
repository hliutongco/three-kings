import React, {Component} from 'react';
import {connect} from 'react-redux';

class AudioContainer extends Component {

  render(){
    return (
      <audio id="audio-player" src={this.props.soundEffect} ref={(audio) => this.soundEffect = audio} autoPlay />
    )
  }

  componentDidUpdate(prevProps){
    if(!this.props.soundEffect){
      this.soundEffect.pause();
      this.soundEffect.currentTime = 0;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    soundEffect: state.soundEffect
  }
}

export default connect(mapStateToProps)(AudioContainer);
