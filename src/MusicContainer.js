import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicContainer extends Component {

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
      <audio id="music-player" src={this.props.music} ref={(musicPlayer) => this.musicPlayer = musicPlayer} autoPlay loop />
    )
  }

  componentDidUpdate(prevProps){
    if(!this.props.music){
      this.fadeMusic();
    }
    else if (this.props.music === "main-menu") {
      this.stopMusic();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

export default connect(mapStateToProps)(MusicContainer);
