import "./App.css";
import Navbar from "./component/navbar";
import News from "./component/news";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  api_key = process.env.REACT_APP_NEWS_API

  render() {

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact path="/SPORTS"
              element={
                <News  key="SPORTS" catagory="sports" api = {this.api_key}/>
              }
            />
            <Route
              exact path="/ENTERTAINMENT"
              element={
                <News  key="ENTERTAINMENT" catagory="entertainment" api = {this.api_key}/>
              }
            />
            <Route 
              exact path="/TECHNOLOGY"
              element={
                <News  key="TECHNOLOGY" catagory="technology" api = {this.api_key}/>
              }
            />
            <Route
              exact path="/HEALTH"
              element={
                <News  key="HEALTH" catagory="health" api = {this.api_key}/>
              }
            />
            <Route
              exact path="/BUSINESS"
              element={
                <News  key="BUSINESS" catagory="business" api = {this.api_key}/>
              }
            />
            <Route

              exact path="/"
              element={
                <News  key="HOME" catagory="general" api = {this.api_key}/>
              }
            />
            
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
