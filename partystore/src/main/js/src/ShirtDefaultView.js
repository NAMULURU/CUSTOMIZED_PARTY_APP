import React from 'react';
import './App.css';


export class ShirtDefaultView extends React.Component{

  render(){

    return (<div>

<div class="row">
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>RED T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>
  </div>
  <div class="flip-box-back">
  <h4>RED T-SHIRT</h4>
  <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
  <br></br>
  <b><p>SIZE AVAILABLE</p></b>
  <b><p>L</p></b>
  </div>
  </div>
</div>
</div>
</div>
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>WHITE T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>
        </div>
        <div class="flip-box-back">
        <h4>WHITE T-SHIRT</h4>
        <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZE AVAILABLE</p></b>
        <b><p>L</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>GREEN T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>
        </div>
        <div class="flip-box-back">
        <h4>GREEN T-SHIRT</h4>
          <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'100%'}}/>
        <br></br>
        <b><p>SIZE AVAILABLE</p></b>
        <b><p>L</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLACK T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>
        </div>
        <div class="flip-box-back">
        <h4>BLACK T-SHIRT</h4>
          <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZE AVAILABLE</p></b>
        <b><p>L</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'100%'}}/>
      <h4>BLUE T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>
        </div>
        <div class="flip-box-back">
        <h4>BLUE T-SHIRT</h4>
          <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZE AVAILABLE</p></b>
        <b><p>L</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>YELLOW T-SHIRT</h4>
      <p class="price">$19.99</p>
        <p><button>ADD TO CART</button></p>

        </div>
        <div class="flip-box-back">
        <h4>YELLOW T-SHIRT</h4>
        <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZE AVAILABLE</p></b>
        <b><p>L</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>

  </div>


</div>  );
  }
}
