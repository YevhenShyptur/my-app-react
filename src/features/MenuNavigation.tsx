import React, { useState } from 'react';
import { AddNewItem } from './AddNewItem'
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
export const MenuNavbar: React.FunctionComponent = () =>
(
  <Router>
    <nav>
      <div className="menu">
        <ul className="hor_nav">
          <li><a href="/AddNewItem">All</a></li>
        
          <li><Link to="/AddNewItem">Add new Item</Link></li>
         {
           2==5?<button></button>:<a></a>
         }

        </ul>
      </div>
    </nav>
  
  </Router>

)