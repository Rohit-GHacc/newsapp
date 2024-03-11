
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div>
        <NavBar/>
        {/* <strong>Hello</strong>This is my first class based component react app */}
        
      </div>
      <Routes>
        <Route exact path="/"  element={<News key="general" pageSize='5' country= 'in' category ='general' />} />
        <Route exact path="/general"  element={<News key="general" pageSize='5' country= 'in' category ='general' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize='5' country= 'in' category ='entertainment' />} />
        <Route exact path="/sports"  element={<News key="sports" pageSize='5' country= 'in' category ='sports' />} />
        <Route exact path="/business"  element={<News key="business" pageSize='5' country= 'in' category ='business' />} />
        <Route exact path="/health"  element={<News key="health" pageSize='5' country= 'in' category ='health' />} />
        <Route exact path="/science"  element={<News key="science" pageSize='5' country= 'in' category ='science' />} />
        <Route exact path="/technology"  element={<News pageSize='5' key="technology" country= 'in' category ='technology' />} />
        
      </Routes>
    </BrowserRouter>
  );
    
  }
}

