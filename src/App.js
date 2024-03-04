
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {/* <strong>Hello</strong>This is my first class based component react app */}
        <News pageSize='5' />
      </div>
    )
  }
}

