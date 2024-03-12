
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  
  pageSize = 15;
  render() {
    return (
      
      <BrowserRouter>
      <div>
        <NavBar/>
        {/* <strong>Hello</strong>This is my first class based component react app */}
        
      </div>
      <Routes>
        <Route exact path="/"  element={<News key="home" pageSize={this.pageSize} country= 'in' category ='general' />} />
        <Route exact path="/general"  element={<News key="general" pageSize={this.pageSize} country= 'in' category ='general' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country= 'in' category ='entertainment' />} />
        <Route exact path="/sports"  element={<News key="sports" pageSize={this.pageSize} country= 'in' category ='sports' />} />
        <Route exact path="/business"  element={<News key="business" pageSize={this.pageSize} country= 'in' category ='business' />} />
        <Route exact path="/health"  element={<News key="health" pageSize={this.pageSize} country= 'in' category ='health' />} />
        <Route exact path="/science"  element={<News key="science" pageSize={this.pageSize} country= 'in' category ='science' />} />
        <Route exact path="/technology"  element={<News pageSize={this.pageSize} key="technology" country= 'in' category ='technology' />} />
        
      </Routes>
    </BrowserRouter>
  );
    
  }
}

