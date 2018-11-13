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
        <button id="menu-button" onClick={this.handleClick}>{this.state.collapsed ?  "⬇" : "⬆"}</button>
      </div>
    )
  }
}

export default MenuContainer;
