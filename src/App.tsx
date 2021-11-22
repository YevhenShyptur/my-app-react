import React from 'react';
import './App.css';
import { AddNewItem } from './features/AddNewItem'
import { MenuNavbar } from './../src/features/MenuNavigation'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={MenuNavbar} />
          <Route exact path='/AddNewItemInLocalStorage' component={AddNewItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
