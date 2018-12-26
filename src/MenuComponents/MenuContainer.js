import React, {useState} from 'react';
import MenuBar from './MenuBar';

const MenuContainer = (props) => {

  const [collapsed, toggleCollapsed] = useState(true);

  return (
    <div id="menu-container">
      Menu
      {collapsed ? "" : <MenuBar />}
      <div id="menu-arrow-button" onClick={() => toggleCollapsed(!collapsed)}>{collapsed ?  "⬇" : "⬆"}</div>
    </div>
  )
}

export default MenuContainer;
