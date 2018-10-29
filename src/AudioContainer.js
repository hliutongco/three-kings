import React, {Component} from 'react';
import {connect} from 'react-redux';

class AudioContainer extends Component {

  componentWillReceiveProps(nextProps){
      if(!nextProps.soundEffect){
        this.soundEffect.pause();
        this.soundEffect.currentTime = 0;
      }
  }

  render(){
    return (
      <audio id="audio-player" src={this.props.soundEffect} ref={(audio) => this.soundEffect = audio} autoPlay />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    soundEffect: state.soundEffect
  }
}

export default connect(mapStateToProps)(AudioContainer);
