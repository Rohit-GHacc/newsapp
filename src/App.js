
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0);
    return (
      
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
      <div>
        <NavBar/>
        {/* <strong>Hello</strong>This is my first class based component react app */}
        
      </div>
      <Routes>
        <Route exact path="/"  element={<News setProgress = { setProgress} apiKey = { apikey} key="home" pageSize={ pageSize} country= 'in' category ='general' />} />
        <Route exact path="/general"  element={<News setProgress = { setProgress} apiKey = { apikey} key="general" pageSize={ pageSize} country= 'in' category ='general' />} />
        <Route exact path="/entertainment" element={<News setProgress = { setProgress} apiKey = { apikey} key="entertainment" pageSize={ pageSize} country= 'in' category ='entertainment' />} />
        <Route exact path="/sports"  element={<News setProgress = { setProgress} apiKey = { apikey} key="sports" pageSize={ pageSize} country= 'in' category ='sports' />} />
        <Route exact path="/business"  element={<News setProgress = { setProgress} apiKey = { apikey} key="business" pageSize={ pageSize} country= 'in' category ='business' />} />
        <Route exact path="/health"  element={<News setProgress = { setProgress} apiKey = { apikey} key="health" pageSize={ pageSize} country= 'in' category ='health' />} />
        <Route exact path="/science"  element={<News setProgress = { setProgress} apiKey = { apikey} key="science" pageSize={ pageSize} country= 'in' category ='science' />} />
        <Route exact path="/technology"  element={<News setProgress = { setProgress} apiKey = { apikey} pageSize={ pageSize} key="technology" country= 'in' category ='technology' />} />
        
      </Routes>
    </BrowserRouter>
  );
    

}
 export default App;
