import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Populars from "./pages/Populars";
import Latest from "./pages/Latest";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1 className="header-title">
            Movies
          </h1>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/populars">Populars</Link>
          <Link className="Link" to="/upcoming">Upcoming</Link>
          <Link className="Link" to="/latest">Latest</Link>
          <Link className="Link" to="/now-playing">Now Playing</Link>
          <Link className="Link" to="/top-rated">Top Rated</Link>

        </header>

        <Switch>
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/latest" component={Latest} />
          <Route path="/now-playing" component={NowPlaying} />
          <Route path="/populars" component={Populars} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;