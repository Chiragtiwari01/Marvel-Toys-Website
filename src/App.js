import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from "./components/About";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/About" component={About} />
      </Switch>
    </>
  );
}

export default App;
