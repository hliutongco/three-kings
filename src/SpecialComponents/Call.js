import React, {Fragment, useState} from 'react';
import {CHANGE_SPECIAL_COMPONENT, TOGGLE_CALL} from '../actions/index';
import {connect} from 'react-redux';

const Call = (props) => {
  const [delayActivated, toggleDelay] = useState(false)

  const handleYes = () => {
    toggleDelay(!delayActivated)

    setTimeout(() => {
      toggleDelay(!delayActivated)
      props.changeSpecialComponent(null)
      props.toggleCall()
    }, 1000)
  }

  const handleNo = () => {
    props.changeSpecialComponent(null)
  }

  const renderCall = () => {
    return (
      <Fragment>
        <div className="main-text-container Jinghua">
          <div>Jinghua</div>
          <div>"{props.username}? What's wrong? Do you need help?"</div>
        </div>
        <button onClick={handleYes}>Call</button>
        <button onClick={handleNo}>Close</button>
      </Fragment>
    )
  }

  return (
    <div id="call-container">
      {delayActivated ? "" : renderCall()}
    </div>
  )
}

const mapStateToProps = ({username}) => ({username})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command)),
    toggleCall: () => dispatch(TOGGLE_CALL(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Call);
