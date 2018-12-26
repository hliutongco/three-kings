import React, {Component} from 'react'
import {connect} from 'react-redux';



class Background extends Component {
  state = {
    background: null
  }

  render(){
    return (
      <div id="background-container" className={this.state.background}>
      </div>
    )
  }
  
  componentDidUpdate(prevProps){
    if(this.props.background !== prevProps.background){
      this.setState({background: this.props.background});
    }
  }
}

const mapStateToProps = ({ background }) => ({ background })

export default connect(mapStateToProps)(Background);
