import React, {Component} from 'react'
import {connect} from 'react-redux';



class Background extends Component {
  state = {
    background: null
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.background !== this.props.background){
      this.setState({background: nextProps.background});
    }
  }

  render(){
    return (
      <div id="background-container" className={this.state.background}>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    background: state.background
  }
}

export default connect(mapStateToProps)(Background);
