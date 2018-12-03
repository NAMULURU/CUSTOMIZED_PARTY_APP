import React, { Component } from 'react';
import {Register} from './Register.js';
import AppHome from './AppHome.js';
import Steps from './Steps.js';
import TabbedView from './TabbedView.js';
import GridView from './GridView.js';
import HorizontalGridList from './HorizontalGridList.js';
import ChipView from './ChipView.js';
import {DraggableText} from './DraggableText.js';
import {TshirtColor} from './TshirtColor.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {userName:""}
  }


  componentDidMount(){
    this.getLoggedUserName();
  }

  getLoggedUserName(){
    fetch('http://127.0.0.1:9090/logged-username', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data['userName']);
        this.setState({
          userName: data['userName'],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/home" render={(props) => <AppHome {...props} userName={this.state.userName} />} />
            <Route exact path="/stepper" component={Steps} />
            <Route exact path="/grid-view" component={GridView} />
            <Route exact path="/register" render={(props) => <Register {...props} isAuthed={true} />} />
            <Route exact path="/horizontal-grid-list" component={HorizontalGridList} />
            <Route exact path="/chip-view" component={ChipView} />
            <Route exact path="/draggable-text" component={DraggableText} />
            <Route exact path="/tshirt-color" component={TshirtColor} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
