import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class MusicContainer extends Component {
  state = {
    music: null
  }

  static getDerivedStateFromProps(props, state) {
    if(props.music === "fade music"){
      return { music: state.music }
    }
    else if (!props.music){
      return { music: null }
    }
    else {
      return { music: props.music }
    }
  }

  fadeMusic = () => {
    // Only fade if volume is not near zero already
    // When volume is near zero stop all the intervaling
    const fadeAudio = setInterval(() => {
      if (this.musicPlayer.volume > 0.1) {
        this.musicPlayer.volume -= 0.1;
      }
      else {
        // After the fadeout, stop & reset the audio player
        this.stopMusic();
        this.musicPlayer.volume = 1;
        clearInterval(fadeAudio);
      }
    }, 200);
  }

  stopMusic = () => {
    this.musicPlayer.pause();
    this.musicPlayer.currentTime = 0;
  }

  render(){
    return (
      <Fragment>
        <audio id="music-player" src={this.state.music} ref={(musicPlayer) => this.musicPlayer = musicPlayer} autoPlay loop />
      </Fragment>
    )
  }

  componentDidUpdate(prevProps){
    if(!this.props.music){
      this.stopMusic();
    }
    else if (this.props.music === "fade music") {
      this.fadeMusic();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

export default connect(mapStateToProps)(MusicContainer);
