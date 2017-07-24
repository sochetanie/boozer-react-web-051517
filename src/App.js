import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CocktailContainer from './CocktailContainer'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={Nav} />
          <Route path='/cocktails' component={CocktailContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
