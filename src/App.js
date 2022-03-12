import "./App.css";
import Acount from "./Component/Acount.jsx";
import Header from "../src/Component/Header";
import React, { Component } from "react";
import HomePage from "./Component/HomePage.jsx";
import NearBy from "./Component/NearBy";
import { Switch, Route, Redirect, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="landing">
        <div className="overlay"></div>
        <div className="containerr">
              <Acount />
              <Header></Header>
              <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
