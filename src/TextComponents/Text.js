import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_DISPLAY_NAME, CHANGE_BACKGROUND, CHANGE_SPECIAL_COMPONENT, CHANGE_SOUND_EFFECT, CHANGE_MUSIC, TOGGLE_REDIRECT} from '../actions/index'

class Text extends Component {
  componentDidMount() {
    this.props.changeDisplayName(this.props.displayName)
  }

  render(){
    return (
      <Fragment>
        {this.props.currentLine}
      </Fragment>
    )
  }

  // This checks the props to see if new things need to be rendered
  // e.g. a new background image, a sound effect, etc.
  componentDidUpdate(prevProps) {
    if (this.props.displayName !== prevProps.displayName) this.props.changeDisplayName(this.props.displayName)
    if (this.props.special) this.props.changeSpecialComponent(this.props.special)
    if (this.props.background !== prevProps.background) this.props.changeBackground(this.props.background)
    if (this.props.music !== prevProps.music) this.props.changeMusic(this.props.music)
    if (this.props.soundEffect !== prevProps.soundEffect) this.props.changeSoundEffect(this.props.soundEffect)
    if (this.props.redirectTrigger) this.props.toggleRedirect()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayName: (name) => dispatch(CHANGE_DISPLAY_NAME(name)),
    changeBackground: (background) => dispatch(CHANGE_BACKGROUND(background)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    changeMusic: (music) => dispatch(CHANGE_MUSIC(music)),
    changeSoundEffect: (sound) => dispatch(CHANGE_SOUND_EFFECT(sound)),
    toggleRedirect: () => dispatch(TOGGLE_REDIRECT(true))
  }
}

export default connect(null, mapDispatchToProps)(Text);
