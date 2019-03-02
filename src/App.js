import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Movie from './pages/Movie.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movie" component={Movie} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
