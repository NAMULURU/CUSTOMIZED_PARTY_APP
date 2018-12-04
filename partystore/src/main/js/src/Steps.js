import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/Forward';
import classNames from 'classnames';
import className from 'classnames';

import 'font-awesome/css/font-awesome.min.css';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {BreadSelection} from './BreadSelection.js';
import {CakeTopings} from './CakeTopings.js';
import CakeDescription from './CakeDescription.js';

import html2canvas from 'html2canvas';

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
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  success: {
    backgroundColor: green[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function getSteps() {
  return ['Select Bread of Cake', 'Select Type of Toppings', 'Select Decoration Text'];
}

class Steps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      openSnackBar:false,
      displayCake:""
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);

  }

  handleNext = (e) => {

    if(this.state.activeStep == (Object.keys(this.props.stepperInfo).length -1)){
      this.props.onCartValueChange(e);
      this.setState(state => ({
        openSnackBar: true
      }));

      html2canvas(document.body, {allowTaint:false, profile:true}).then(canvas => {
        //document.body.appendChild(canvas)
      });

      this.props.insertCustomCartItem();

    }

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
    this.props.handleResetAction();
    this.setState({
      activeStep: 0,
    });
  };

  handleSnackbarClose = (e) => {
    this.setState({
      openSnackBar: false,
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
            <div style={{marginTop:'10px', display:'flex', justifyContent:'space-around'}}>
              <Button variant="outlined" color="primary" onClick={this.handleReset}>
                <i style={{paddingLeft:'10px', paddingRight:'10px'}} className={classNames(classes.leftIcon, classes.iconSmall)} class="fa fa-refresh fa-lg"></i>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {this.props.stepperInfo[steps[activeStep]]}
              <div style={{marginTop:'10px', display:'flex', justifyContent:'space-around'}}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                  variant="outlined"
                  color="secondary"
                >
                <i style={{paddingLeft:'5px', paddingRight:'5px'}} className={classNames(classes.leftIcon, classes.iconSmall)} class="fa fa-chevron-circle-left fa-lg"></i>
                  Back
                </Button>
                <Button variant="outlined" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Add To Cart' : 'Next'}
                  {activeStep !== steps.length - 1 ?
                    <i style={{paddingLeft:'5px', paddingRight:'5px'}} className={classNames(classes.rightIcon, classes.iconSmall)} class="fa fa-chevron-circle-right fa-lg"></i>
                    : <i style={{paddingLeft:'5px', paddingRight:'5px'}} className={classNames(classes.rightIcon, classes.iconSmall)} class="fa fa-shopping-cart fa-lg"></i>}
                </Button>
              </div>
            </div>
          )}
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.openSnackBar}
          autoHideDuration={3000}
          onClose={this.handleSnackbarClose}
        >
        <SnackbarContent
          className={classNames(classes["success"], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <CheckCircleIcon className={classNames(classes.icon, classes.iconVariant)} />
              Your Cake have been added to the cart!
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
        </Snackbar>

      </div>
    );
  }
}

Steps.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Steps);
