import "./App.css";
import Acount from "./Component/Acount.jsx";
import Header from "../src/Component/Header";
import Charity from "../src/Component/Charity";
import React, { Component } from "react";
import HomePage from "./Component/HomePage.jsx";
import NearBy from "./Component/NearBy";
import { BrowserRouter, Switch, Route, Redirect, Routes, Link, Router } from 'react-router-dom'
import MapsNearBy from "./Component/MapsNearBy";
// import nearByMaps from '../src/googleNearBy.html';

function App(props) {
  return (
    <div className="App">
      <div className="landing">
        <div className="overlay"></div>
        <div className="containerr">
          <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/maps" element={<MapsNearBy />} />
              <Route path="/donation" element={<Charity />} />
              <Route path="/account" element={<Acount />} />
            </Routes>
          </BrowserRouter>,
        </div>
      </div>
    </div>
  );
}

export default App;
