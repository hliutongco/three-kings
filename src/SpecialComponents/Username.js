import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_USERNAME, CHANGE_SPECIAL_COMPONENT} from '../actions/index'

class Username extends Component {
  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  render(){
    return (
      <div id="set-username">
        <form onSubmit={(event) => {
          event.preventDefault()
          // If the username is blank, do not submit
          if (!this.state.username.trim()) return;
          this.props.handleSubmit(this.state.username)
          this.props.changeSpecialComponent(null)
        }}>
          <p>My name is <input onChange={this.handleChange} value={this.state.username} type="text" autoFocus maxLength="10" autoComplete="off"></input></p>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (username) => dispatch(SET_USERNAME(username)),
    changeSpecialComponent: (command) => dispatch(CHANGE_SPECIAL_COMPONENT(command))
  }
}

export default connect(null, mapDispatchToProps)(Username);
