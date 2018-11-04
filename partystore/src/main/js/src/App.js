import React, { Component } from 'react';
import {Register} from './Register.js';
import AppHome from './AppHome.js';
import Steps from './Steps.js';
import TabbedView from './TabbedView.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/home" component={AppHome} />
            <Route exact path="/stepper" component={Steps} />
            <Route exact path="/tab-view" component={TabbedView} />
            <Route exact path="/register" render={(props) => <Register {...props} isAuthed={true} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
