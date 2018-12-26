import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SET_USERNAME, CHANGE_SPECIAL_COMPONENT} from '../actions/index'

const Username = (props) => {

  const [username, setUsername] = useState("");

  return (
    <div id="set-username">
      <form onSubmit={(event) => {
        event.preventDefault()
        // If the username is blank, do not submit
        if (!username.trim()) return;
        props.handleSubmit(username)
        props.changeSpecialComponent(null)
      }}>
        <p>My name is <input onChange={(event) => setUsername(event.target.value)}
        value={username} type="text" autoFocus maxLength="10" autoComplete="off"></input></p>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (username) => dispatch(SET_USERNAME(username)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(null, mapDispatchToProps)(Username);
