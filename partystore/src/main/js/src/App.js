import React, { Component } from 'react';
import {Home} from './Home.js';
import {Header} from './header.js';
import {Register} from './Register.js';

import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" render={(props) => <Register {...props} isAuthed={true} />} />
            <Route exact path="/about" component={Header} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
