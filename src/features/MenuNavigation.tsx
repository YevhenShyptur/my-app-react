import React, { useState } from 'react';
import { AddNewItem } from './AddNewItem'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const MenuNavbar: React.FunctionComponent = () =>
(
  <nav>
    <div className="menu">
      <ul className="hor_nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddNewItemInLocalStorage">Add new Item</Link></li>
      </ul>
    </div>
  </nav>
)