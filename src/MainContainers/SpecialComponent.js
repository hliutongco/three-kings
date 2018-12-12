import React, {Fragment, Component} from 'react';
import Username from '../SpecialComponents/Username';
import QuitLoadSave from '../SpecialComponents/QuitLoadSave';
import {connect} from 'react-redux';

// This component conditionally renders all files in the SpecialComponents folder
class SpecialComponent extends Component {
  renderComponent(){
    switch(this.props.specialComponent){
      case "SET_USERNAME":
        return <Username />
      case "QUIT_SCREEN":
        return <QuitLoadSave quitLoadOrSave="quit" />
      case "LOAD_SCREEN":
        return <QuitLoadSave quitLoadOrSave="load" />
      case "SAVE_SCREEN":
        return <QuitLoadSave quitLoadOrSave="save" />
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

const mapStateToProps = ({ specialComponent }) => ({ specialComponent })

export default connect(mapStateToProps)(SpecialComponent);
