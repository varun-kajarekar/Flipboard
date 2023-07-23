import "./App.css";
import Navbar from "./component/navbar";
import News from "./component/news";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const api_key = process.env.REACT_APP_NEWS_API;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/Sports"
          element={<News key="SPORTS" catagory="sports" api={api_key} />}
        />
        <Route
          exact
          path="/Entertainment"
          element={
            <News key="ENTERTAINMENT" catagory="entertainment" api={api_key} />
          }
        />
        <Route
          exact
          path="/Technology"
          element={
            <News key="TECHNOLOGY" catagory="technology" api={api_key} />
          }
        />
        <Route
          exact
          path="/Health"
          element={<News key="HEALTH" catagory="health" api={api_key} />}
        />
        <Route
          exact
          path="/Business"
          element={<News key="BUSINESS" catagory="business" api={api_key} />}
        />
        <Route
          exact
          path="/"
          element={<News key="HOME" catagory="general" api={api_key} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
