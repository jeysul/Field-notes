import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { NavLink,Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import AddNote from "./components/AddNote";
import Common from "./components/Common";
//import Appbar from "./components/Appbar";
//import { AppBar } from '@material-ui/core';
//import SignedInLinks from './components/login'
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/addnote" component={AddNote} />
      <Route exact path="/common" component={Common} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
