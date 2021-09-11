import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
// import {Dashboard} from './pages/Dashboard'
export default class componentName extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
       <Dashboard/>
      
       </BrowserRouter>
       </div>
    )
  }
}
