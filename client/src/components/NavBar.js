import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/add">Create Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/edit/:id">Edit Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post/:id">Post Details</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


