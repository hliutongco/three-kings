import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_USERNAME, CHANGE_SPECIAL_COMPONENT} from '../actions/index'

class Username extends Component {
  state = {
    username: null
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  render(){
    return (
      <div id="set-username">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.handleSubmit(this.state.username)
          this.props.changeSpecialComponent(null)
        }}>
          <p>My name is <input id="input-username" onChange={this.handleChange} type="text" autoFocus maxLength="10" autoComplete="off"></input></p>
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
