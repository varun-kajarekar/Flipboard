import './App.css';
import Navbar from './component/navbar'
import News from './component/news'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}

