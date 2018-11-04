import React from 'react';
import './App.css';
export class ShirtDefaultView extends React.Component{



  render(){

    return (<div>

<div class="row">
    <div class="content">
      <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>RED T-SHIRT</h4>
<center><h4>$7.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>WHITE T-SHIRT</h4>
      <center><h4>$7.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>GREEN T-SHIRT</h4>
<center><h4>$7.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLACK T-SHIRT</h4>
      <center><h4>$7.99</h4></center>

  </div>

    <div class="content">
      <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLUE T-SHIRT</h4>
      <center><h4>$8.99</h4></center>

  </div>


    <div class="content">
      <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>YELLOW T-SHIRT</h4>
      <center><h4>6.99</h4></center>

  </div>


  </div>


  <center><button type="submit" class="nextBtn">ADD TO CART</button></center>
</div>  );
  }
}
