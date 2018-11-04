import React from 'react';
import './App.css';
export class CakeDefaultView extends React.Component{



  render(){

    return (<div>

<div class="row">
    <div class="content">
      <img src={require('./images/redvelvetcake.jpeg')} alt="cakes" style={{width:'100%'}}/>
      <h4>RED VELVET CAKE</h4>
<center><h4>$8.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/vanillacake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>VANILLA CAKE</h4>
      <center><h4>$5.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/angelfoodcake.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>ANGEL FOOD CAKE</h4>
<center><h4>$9.99</h4></center>
  </div>

    <div class="content">
      <img src={require('./images/coffeechocolatecake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>COFFEE CHOCOLATE CAKE</h4>
      <center><h4>$8.99</h4></center>

  </div>

    <div class="content">
      <img src={require('./images/buttercake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>BUTTER CAKE</h4>
      <center><h4>$5.99</h4></center>

  </div>


    <div class="content">
      <img src={require('./images/doublechocolatecake.jpeg')} alt="cakes" style={{width:'100%'}}/>
      <h4>DOUBLE CHOCOLATE CAKE</h4>
      <center><h4>$8.99</h4></center>

  </div>


  </div>


  <center><button type="submit" class="nextBtn">ADD TO CART</button></center>
</div>  );
  }
}
