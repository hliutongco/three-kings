import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_BACKGROUND, CHANGE_SPECIAL_COMPONENT ,CHANGE_SOUND_EFFECT} from '../actions/index'

class PrologueText extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.special) this.props.changeSpecialComponent(nextProps.special)
    if (nextProps.background) this.props.changeBackground(nextProps.background)
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
    changeBackground: (background) => dispatch(CHANGE_BACKGROUND(background)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    changeSoundEffect: (sound) => dispatch(CHANGE_SOUND_EFFECT(sound))
  }
}

export default connect(null, mapDispatchToProps)(PrologueText);
