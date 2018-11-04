import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Steps from './Steps.js';
import {Tab1} from './Tab1.js';
import 'font-awesome/css/font-awesome.min.css';
import {CakeDefaultView} from './CakeDefaultView.js';
import {ShirtDefaultView} from './ShirtDefaultView.js';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class TabbedView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      stepperInfo: {
        "CAKE": {
          'Select Bread of Cake': <Tab1 />,
          'Select Type of Toppings': <Tab1 />,
          'Select Decoration Text': <Tab1 />
        },
        "T_SHIRT":{
          "Select T-shirt Material": <Tab1 />,
          "Write Color, Text & Font": <Tab1 />,
          "Select Images/Upload": <Tab1 />
      }
    }
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper square className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<i class="fa fa-eye fa-lg"></i>} label="Default" />
            <Tab icon={<i class="fa fa-wrench fa-lg"></i>} label="Customize" />
          </Tabs>
        </Paper>
        {this.state.value === 0 && this.props.selectedKey === "CAKE" ? <CakeDefaultView/> : undefined}
          {this.state.value === 0 && this.props.selectedKey === "T_SHIRT" ? <ShirtDefaultView/> : undefined}
        {this.state.value === 1 ? <Steps stepperInfo={this.state.stepperInfo[this.props.selectedKey]} /> : undefined}
      </div>
    );
  }
}

TabbedView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabbedView);
