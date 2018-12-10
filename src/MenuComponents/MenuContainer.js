import React, {Component} from 'react';
import MenuBar from './MenuBar';

class MenuContainer extends Component {
  state = {
    collapsed: true
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {collapsed: !prevState.collapsed}
    })
  }

  render(){
    return (
      <div id="menu-container">
        Menu
        {this.state.collapsed ? "" : <MenuBar />}
        <div id="menu-arrow-button" onClick={this.handleClick}>{this.state.collapsed ?  "⬇" : "⬆"}</div>
      </div>
    )
  }
}

export default MenuContainer;
