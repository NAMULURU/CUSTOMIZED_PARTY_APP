import React from 'react';
import './App.css';


export class ShirtDefaultView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      size:'large'
    }
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
  }

  onSizeChanged(e){
    this.setState({size: e.target.value});
  }

  onAddToCart(e, name, price){
      console.log("Add to Cart Button is Clicked");
      let cartItem={email:'', category:'T_SHIRT', price:price, quantity:1, itemName:name, size:this.state.size};
      this.props.addDefaultCartItem(cartItem);
      this.props.onCartValueChange(e);
  }

  render(){

    return (<div>

<div class="row">
<div class="column">
    <div class="card">
    <div class="flip-box">
     <div class="flip-box-inner">
       <div class="flip-box-front">
      <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'80%'}}/>
      <h4>RED T-SHIRT</h4>
      <p class="price">$19.99</p>
      <label for="Size"><b>Select Size :</b></label>
        <select onChange={this.onSizeChanged} id="Size" name="Size">
    <option value="large">L</option>
    <option value="medium">M</option>
    <option value="small">S</option>
    <option value="xtralarge">XL</option>
  </select>
        <p><button onClick = {e => this.onAddToCart(e, "redshirt.jpg", 19.99)}>ADD TO CART</button></p>
  </div>
  <div class="flip-box-back">
  <h4>RED T-SHIRT</h4>
  <img src={require('./images/redshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
  <br></br>
  <b><p>SIZE AVAILABLE</p></b>
  <b><p>L,M,S,XL</p></b>
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
      <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'80%'}}/>
      <h4>WHITE T-SHIRT</h4>
      <p class="price">$19.99</p>
      <label for="Size"><b>Select Size :</b></label>
        <select id="Size" name="Size">
    <option value="large">L</option>
    <option value="medium">M</option>
    <option value="small">S</option>
    <option value="xtralarge">XL</option>
  </select>
        <p><button onClick = {e => this.onAddToCart(e, "whiteshirt.jpg", 19.99)}>ADD TO CART</button></p>
            </div>
        <div class="flip-box-back">
        <h4>WHITE T-SHIRT</h4>
        <img src={require('./images/whiteshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZES AVAILABLE</p></b>
        <b><p>L,M,S,XL</p></b>
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
      <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'80%'}}/>
      <h4>GREEN T-SHIRT</h4>
      <p class="price">$19.99</p>
      <label for="Size"><b>Select Size :</b></label>
        <select id="Size" name="Size">
    <option value="large">L</option>
    <option value="medium">M</option>
    <option value="small">S</option>
    <option value="xtralarge">XL</option>
  </select>
      <p><button onClick = {e => this.onAddToCart(e, "greenshirt.jpg", 19.99)}>ADD TO CART</button></p>

        </div>
        <div class="flip-box-back">
        <h4>GREEN T-SHIRT</h4>
          <img src={require('./images/greenshirt.jpg')}alt="cakes" style= {{width:'100%'}}/>
        <br></br>
        <b><p>SIZES AVAILABLE</p></b>
        <b><p>L,M,S,XL</p></b>
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
      <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'80%'}}/>
      <h4>BLACK T-SHIRT</h4>
      <p class="price">$19.99</p>
      <label for="Size"><b>Select Size :</b></label>
        <select id="Size" name="Size">
    <option value="large">L</option>
    <option value="medium">M</option>
    <option value="small">S</option>
    <option value="xtralarge">XL</option>
  </select>
      <p><button onClick = {e => this.onAddToCart(e, "blackshirt.jpg", 19.99)}>ADD TO CART</button></p>
            </div>
        <div class="flip-box-back">
        <h4>BLACK T-SHIRT</h4>
          <img src={require('./images/blackshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZES AVAILABLE</p></b>
        <b><p>L,M,S,XL</p></b>
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
      <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'80%'}}/>
      <h4>BLUE T-SHIRT</h4>
      <p class="price">$19.99</p>
    <label for="Size"><b>Select Size :</b></label>
      <select id="Size" name="Size">
  <option value="large">L</option>
  <option value="medium">M</option>
  <option value="small">S</option>
  <option value="xtralarge">XL</option>
</select>
        <p><button onClick = {e => this.onAddToCart(e, "skyblueshirt.png", 19.99)}>ADD TO CART</button></p>
        </div>
        <div class="flip-box-back">
        <h4>BLUE T-SHIRT</h4>
          <img src={require('./images/skyblueshirt.png')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZES AVAILABLE</p></b>
        <b><p>L,M,S,XL</p></b>
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
      <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'80%'}}/>
      <h4>YELLOW T-SHIRT</h4>
      <p class="price">$19.99</p>
      <label for="Size"><b>Select Size :</b></label>
        <select id="Size" name="Size">
      <option value="large">L</option>
      <option value="medium">M</option>
      <option value="small">S</option>
      <option value="xtralarge">XL</option>
      </select>
        <p><button onClick = {e => this.onAddToCart(e, "yellowshirt.jpg", 19.99)}>ADD TO CART</button></p>
              </div>
        <div class="flip-box-back">
        <h4>YELLOW T-SHIRT</h4>
        <img src={require('./images/yellowshirt.jpg')} alt="cakes" style={{width:'100%'}}/>
        <br></br>
        <b><p>SIZES AVAILABLE</p></b>
        <b><p>L,M,S,XL</p></b>
        </div>
        </div>
      </div>
      </div>
      </div>

  </div>


</div>  );
  }
}
