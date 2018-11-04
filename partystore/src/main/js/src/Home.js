import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Tab1} from './Tab1.js';
import {Tab2} from './Tab2.js';
import {Tab3} from './Tab3.js';

export const styles = {
  root: {
    flexGrow: 1,
  },
};

export class Home extends React.Component{

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  render(){
    return(
        <div>
          <Paper>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="TAB 1" />
              <Tab label="TAB 2" />
              <Tab label="TAB 3" />
            </Tabs>
          </Paper>
            {this.state.value === 0 ? <Tab1 /> : undefined}
            {this.state.value === 1 ? <Tab2 /> : undefined}
            {this.state.value === 2 ? <Tab3 /> : undefined}
          </div>
    );
  }
}
