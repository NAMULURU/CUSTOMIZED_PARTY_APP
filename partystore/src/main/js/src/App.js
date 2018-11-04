import React, { Component } from 'react';
import {Home} from './Home.js';
import {Register} from './Register.js';
import AppHome from './AppHome.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/home" component={AppHome} />
            <Route exact path="/register" render={(props) => <Register {...props} isAuthed={true} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
