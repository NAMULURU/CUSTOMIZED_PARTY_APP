import React from 'react';
import './App.css';
export class ShirtDefaultView extends React.Component{



  render(){

    return (<div>

<div class="row">
<div class="column">
    <div class="card">
      <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>RED T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>RED T-SHIRT</p>
        <p><button>ADD TO CART</button></p>
  </div>
  </div>
<div class="column">
    <div class="card">
      <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>WHITE T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>WHITE T-SHIRT</p>
        <p><button>ADD TO CART</button></p>
  </div>
  </div>
<div class="column">
    <div class="card">
      <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>GREEN T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>GREEN T-SHIRT</p>
        <p><button>ADD TO CART</button></p>
  </div>
  </div>
<div class="column">
    <div class="card">
      <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLACK T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>BLACK T-SHIRT</p>
        <p><button>ADD TO CART</button></p>
</div>
  </div>
<div class="column">
    <div class="card">
      <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLUE T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>BLUE T-SHIRT</p>
        <p><button>ADD TO CART</button></p>
</div>
  </div>

<div class="column">
    <div class="card">
      <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>YELLOW T-SHIRT</h4>
      <p class="price">$19.99</p>
      <p>YELLOW T-SHIRT</p>
        <p><button>ADD TO CART</button></p>

  </div>
  </div>

  </div>


</div>  );
  }
}
