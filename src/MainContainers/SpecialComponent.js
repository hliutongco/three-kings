import React, {Fragment, Component} from 'react';
import Username from '../SpecialComponents/Username';
import QuitLoadSave from '../SpecialComponents/QuitLoadSave';
import Instructions from '../SpecialComponents/Instructions';
import AnswerContainer from '../SpecialComponents/AnswerContainer';
import Log from '../SpecialComponents/Log';
import {CHANGE_ANSWERS} from '../actions/index'
import {connect} from 'react-redux';

// This component conditionally renders all files in the SpecialComponents folder
class SpecialComponent extends Component {

  renderComponent(){

    // If the prop is a function, that function is returning
    // some answer options that need to be rendered
    // by the AnswerContainer component
    if(typeof(this.props.specialComponent) === "function"){
      this.props.changeAnswers(this.props.specialComponent());
      return <AnswerContainer />
    }

    switch(this.props.specialComponent){
      case "QUIT_SCREEN":
        return <QuitLoadSave quitLoadOrSave="quit" />
      case "LOAD_SCREEN":
        return <QuitLoadSave quitLoadOrSave="load" />
      case "SAVE_SCREEN":
        return <QuitLoadSave quitLoadOrSave="save" />
      case "LOG_SCREEN":
        return <Log />
      case "SET_USERNAME":
        return <Username />
      case "SHOW_INSTRUCTIONS":
        return <Instructions />
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeAnswers: (answers) => dispatch(CHANGE_ANSWERS(answers))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialComponent);
