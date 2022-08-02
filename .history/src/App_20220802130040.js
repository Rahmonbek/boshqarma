import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Yangiliklar from "./pages/Yangiliklar";
import Footer from "./pages/Footer";

import "./App.css";
import Lavhalar from "./pages/Lavhalar";
import Loader from "./pages/Loader";
import Tumanlar from "./pages/Tumanlar";
import Boglanish from "./pages/Boglanish";
import Rahbariyat from "./pages/Rahbariyat";
import Videos from "./pages/Videos";
import { Height } from "@material-ui/icons";

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
          
          <Route exact path="/boglanish">
            <Boglanish />
          </Route>
          <Route exact path="/lavhalar">
            <Lavhalar />
          </Route>
          <Route exact path="/rahbariyat">
            <Rahbariyat />
          </Route>

          <Route exact path="/videos">
            <Videos />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
