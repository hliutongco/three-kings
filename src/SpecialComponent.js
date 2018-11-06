import React, {Fragment, Component} from 'react';
import Username from './SpecialComponents/Username';
import {connect} from 'react-redux';

// This component conditionally renders all files in the SpecialComponents folder
class SpecialComponent extends Component {
  renderComponent(){
    switch(this.props.specialComponent){
      case "SET_USERNAME":
        return <Username />
      default:
        return null;
    }
  }

  render(){
    return (
      <Fragment>
        {this.renderComponent()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    specialComponent: state.specialComponent
  }
}

export default connect(mapStateToProps)(SpecialComponent);
