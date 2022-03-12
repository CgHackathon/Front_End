import "./App.css";
import Acount from "./Component/Acount.jsx";
import Header from "../src/Component/Header";
import React, { Component } from "react";
import HomePage from "./Component/HomePage.jsx";
import { Switch, Route, Redirect, Routes, Link } from 'react-router-dom'
import nearByMaps from '../src/googleNearBy.html';

function App() {
  return (
    <div className="App">
      <div className="landing">
        <div className="overlay"></div>
        <div className="containerr">
          <Routes>
            <Route exact path='/'>
              <Acount />
              <Header></Header>
              <HomePage />
            </Route>
            <Route exact path="/googleNearby.html" component= {nearByMaps}>

            </Route>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
