import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Editpost from "./components/Editpost";
import PostDetails from "./components/PostDetails";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
        <Router>
        <div className="container">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CreatePost />} />
            <Route path="/edit/:id" element={<Editpost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
