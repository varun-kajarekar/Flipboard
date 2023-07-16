import "./App.css";
import Navbar from "./component/navbar";
import News from "./component/news";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route
              exact path="/SPORTS"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&category=sports" />
              }
            />
            <Route
              exact path="/ENTERTAINMENT"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&category=entertainment" />
              }
            />
            <Route
              exact path="/TECHNOLOGY"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&category=technology" />
              }
            />
            <Route
              exact path="/HEALTH"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&category=health" />
              }
            />
            <Route
              exact path="/BUSINESS"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f&category=business" />
              }
            />
            <Route

              exact path="/"
              element={
                <News Durl="https://newsapi.org/v2/top-headlines?country=in&apiKey=806923e9dcde4834a58f2cc9ff6c784f" />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
