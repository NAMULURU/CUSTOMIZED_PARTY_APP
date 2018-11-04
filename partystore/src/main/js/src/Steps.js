import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Tab1} from './Tab1.js';
import {Tab2} from './Tab2.js';
import {Tab3} from './Tab3.js';

const styles = theme => ({
  root: {
    width: '90%',
    paddingTop: '10px',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Select Bread of Cake', 'Select Type of Toppings', 'Select Decoration Text'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Tab1 />;
    case 1:
      return <Tab2 />;
    case 2:
      return <Tab3 />;
    default:
      return 'Uknown stepIndex';
  }
}

class Steps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNext = (e) => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = (e) => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = (e) => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = Object.keys(this.props.stepperInfo);
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {this.props.stepperInfo[steps[activeStep]]}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Steps.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Steps);
