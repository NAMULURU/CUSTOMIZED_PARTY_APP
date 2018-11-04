import React from 'react';
import './App.css';

import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

export class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{state: "Select State"},
      stateCountryMapping:{
    },
    open:false
  };

  this.onStateChange = this.onStateChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.onFormElementChnage = this.onFormElementChnage.bind(this);
  this.changeDialogState = this.changeDialogState.bind(this);
  }

  componentDidMount() {
    this.getStateCityMappig();
  }

  getStateCityMappig(){
    fetch('http://127.0.0.1:9090/geo-list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        this.setState({
          stateCountryMapping: data,
        });
      });
  }

  onFormElementChnage(elementName, value){
    let currentData = this.state.formData;
    currentData[elementName] = value;
    this.setState({
      formData: currentData
    });
  }

  changeDialogState(value){
    this.setState({
      open: value
    });
  }

  handleChange(e){
    this.onFormElementChnage(e.target.name, e.target.value);
  }

  onStateChange(e){
    const state = e.target.value;
    this.setState(
      {selectedState: state
      });
  }

  handleSubmit(e){
    e.preventDefault();

    console.log(this.state.formData);

    fetch('http://127.0.0.1:9090/register-user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.formData)
    }).then(response => response.json())
      .then(data => {
        console.log(data.response);
        if(data.response === "USER_ID_EXISTS"){
          this.handleClickOpen();
        }

        if(data.response === "SUCCESS"){
          this.props.history.push('/about');
        }

      });

  }

  handleClickOpen() {
    this.changeDialogState(true);
  }

  handleClose() {
    this.changeDialogState(false);
  }

  render(){
    const statesList = Object.keys(this.state.stateCountryMapping);
    const statesFormElement = statesList.map(
      element => {
          return <option value={element}>{element}</option>
      });

      const citiesList =  this.state.stateCountryMapping[this.state.formData.state];
      let citiesFormElement = [];
      if(this.state.formData.state !== "Select State"){
        citiesFormElement = citiesList.map(
          element => {
            return <option value={element}>{element}</option>;
          });
      }

    return(
      <div class="Register-app">
        <div class="Register-app-header">
        <h1>Sign Up Form</h1>
        <form onSubmit={this.handleSubmit} method="post">
          <label htmlFor="firstName">
            Details
            <br />
            <input onChange={this.handleChange} id="firstname" name="firstname" type="text" placeholder="First Name" required />
            <input onChange={this.handleChange} id="lastname" name="lastname" type="text" placeholder="Last Name" required />
            <br />
            <input onChange={this.handleChange} id="email" name="email" type="email" placeholder="E-mail Address" required />
            <br />
            <input onChange={this.handleChange} id="password" name="password" type="password" placeholder="Password" required />
          </label>
          <br />
          <br />
          <label>
            Address
            <br />
            <input onChange={this.handleChange} id="address1" name="address1" type="text" placeholder="Address Line 1" required />
            <input onChange={this.handleChange} id="address2" name="address2" type="text" placeholder="Address Line 2" />
            <br />
            <select onChange={this.handleChange} id="state" name="state">
              <option value="Select State">Select State</option>
              {statesFormElement}
            </select>
            <select onChange={this.handleChange} id="city" name="city">
              <option value="Select City" selected>Select City</option>
              {citiesFormElement}
            </select>
            <input onChange={this.handleChange} id="zipcode" name="zipcode" type="number" placeholder="Zip Code" required />
          </label>
          <br />
          <br />
          <button>REGISTER</button>
        </form>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Email ID Exists"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please choose another email ID to register. Entered Email ID is already in use
            </DialogContentText>
          </DialogContent>

        </Dialog>


        </div>
      </div>
    );
  }

}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
