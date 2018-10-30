import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicContainer extends Component {

  componentWillReceiveProps(nextProps){
      if(!nextProps.music){
        this.musicPlayer.pause();
        this.musicPlayer.currentTime = 0;
      }
  }

  render(){
    return (
      <audio id="music-player" src={this.props.music} ref={(musicPlayer) => this.musicPlayer = musicPlayer} autoPlay loop />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

export default connect(mapStateToProps)(MusicContainer);
