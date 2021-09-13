import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Footer from "./pages/Footer";
// import {Dashboard} from './pages/Dashboard'
export default class componentName extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/yangiliklar">
            <Yangiliklar />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}