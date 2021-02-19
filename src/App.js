import React from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.png';
import './App.css';

const App = () => {
  const routes = [
    // Direct nav items to routes.
    { title: "Projects", path: "/projects" },
    { title: "Reference", path: "/reference" },

    // About is a nav item with a submenu to subitems.
    {
      // An id ending with "-nav-menu" styles it to match the navbar.
      id: "about-nav-menu",
      title: "About",
      path: "/about",
      children: [
        { title: "Organization", path: "/about/org" }
      ]
    }
  ];

  return (
    <div className="App">

      <div className="d-flex flex-fill"></div>

      <div>
        <img src={logo} height={128} />
        <div className="display-text text-center">
          <b>{"Under Construction"}</b>
        </div>
      </div>

      <div className="d-flex flex-fill"></div>

    </div>
  );
}

export default App;
