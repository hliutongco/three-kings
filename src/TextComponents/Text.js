import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_DISPLAY_NAME, CHANGE_BACKGROUND, CHANGE_SPECIAL_COMPONENT, CHANGE_SOUND_EFFECT, CHANGE_MUSIC} from '../actions/index'

class Text extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.displayName !== nextProps.displayName) this.props.changeDisplayName(nextProps.displayName)
    if (nextProps.special) this.props.changeSpecialComponent(nextProps.special)
    if (nextProps.background) this.props.changeBackground(nextProps.background)
    if (nextProps.music) this.props.changeMusic(nextProps.music)
    if (this.props.soundEffect !== nextProps.soundEffect) this.props.changeSoundEffect(nextProps.soundEffect)
  }

    render(){
      return (
      <Fragment>
        {this.props.currentLine}
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayName: (name) => dispatch(CHANGE_DISPLAY_NAME(name)),
    changeBackground: (background) => dispatch(CHANGE_BACKGROUND(background)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    changeMusic: (music) => dispatch(CHANGE_MUSIC(music)),
    changeSoundEffect: (sound) => dispatch(CHANGE_SOUND_EFFECT(sound))
  }
}

export default connect(null, mapDispatchToProps)(Text);
