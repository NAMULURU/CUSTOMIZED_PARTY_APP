import React from 'react';

export class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stateCountryMapping:{
        "North Carolina":["Charlotte","Applanchian State","Morrisville"],
        "South Carolina":["Charnight","App State","Morrisvine"],
    },
    selectedState: "Select State"
  };

  this.onStateChange = this.onStateChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStateChange(e){
    const state = e.target.value;
    this.setState(
      {selectedState: state
      });
  }

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  }

  render(){
    const statesList = Object.keys(this.state.stateCountryMapping);
    const statesFormElement = statesList.map(
      element => {
          return <option value={element}>{element}</option>
      });

      const citiesList =  this.state.stateCountryMapping[this.state.selectedState];
      let citiesFormElement = [];
      if(this.state.selectedState !== "Select State"){
        citiesFormElement = citiesList.map(
          element => {
            return <option value={element}>{element}</option>;
          });
      }

    return(
      <div>
        <form onSubmit={this.handleSubmit} method="post">
          <label htmlFor="firstName">
            Details
            <br />
            <input id="firstName" name="firstName" type="text" placeholder="First Name" required />
            <input id="lastName" name="lastName" type="text" placeholder="Last Name" required />
            <br />
            <input id="email" name="email" type="email" placeholder="E-mail Address" required />
          </label>
          <br />
          <br />
          <label>
            Address
            <br />
            <input id="addressLine1" name="addressLine1" type="text" placeholder="Address Line 1" required />
            <input id="addressLine2" name="addressLine2" type="text" placeholder="Address Line 2" />
            <br />
            <select id="state" name="state" onChange={this.onStateChange}>
              <option value="Select State">Select State</option>
              {statesFormElement}
            </select>
            <select id="city" name="city">
              <option value="Select City" selected>Select City</option>
              {citiesFormElement}
            </select>
          </label>
          <br />
          <br />
          <button>REGISTER</button>
        </form>
      </div>
    );
  }

}
