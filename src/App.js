import React from 'react';
import './App.css';
import './css/import.scss';
import Hamburger from './modules/hamburger';
import Menu from "./pages/menu";
import ProjectPage from "./pages/projectPage";

import Scroll from './util/scrollBehavior';

function App() {
    Scroll.init();
  return (
    <div className="App">
        <Hamburger className="hamburger"/>
        <Menu/>
        <ProjectPage id='projectPage'/>
    </div>
  );
}

export default App;
