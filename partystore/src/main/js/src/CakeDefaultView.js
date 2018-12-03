import React from 'react';
export class CakeDefaultView extends React.Component{

  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(e, name, price){
      console.log("Add to Cart Button is Clicked");
      let cartItem={email:'', category:'CAKE', price:price, quantity:1, itemName:name};
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
      <img src={require('./images/redvelvetcake.jpeg')} alt="cakes" style={{width:'100%'}}/>
      <h4>RED VELVET CAKE</h4>
    <p class="price">$19.99</p>
    <p><button onClick = {e => this.onAddToCart(e, "redvelvetcake.jpeg", 19.99)}>ADD TO CART</button></p>
  </div>
    <div class="flip-box-back">
    <h4>RED VELVET CAKE</h4>
    <br></br>
      <p>Three moist layers of stunning Red Velvet filled
      and topped silky cream cheese icing and finished with
      melt-in-your-mouth white and dark chocolate shavings and white
      chocolate drizzle; this cake is sure to be your new favourite.</p>
<b><p>Nutrition Facts  - 1 piece</p></b>
<p>
35% Total Fat 23g.
70% Saturated Fat 14g.
Trans Fat 0.3g.
31% Cholesterol 93mg.
13% Sodium 318mg.
3% Potassium 92mg.
12% Total Carbohydrates 36g.
1% Dietary Fiber 0.3g.</p>
<br></br>
      <b><p>Weight: 2.4 kg </p></b>
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
    <img src={require('./images/vanillacake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>VANILLA CAKE</h4>
      <p class="price">$19.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "vanillacake.jpg", 19.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>VANILLA CAKE</h4>
          <br></br>
            <p>Three moist layers of stunning Red Velvet filled
            and topped silky cream cheese icing and finished with
            melt-in-your-mouth white and dark chocolate shavings and white
            chocolate drizzle; this cake is sure to be your new favourite.</p>
          <b><p>Nutrition Facts  - 1 piece</p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>
          <br></br>
            <b><p>Weight: 2.4 kg </p></b>
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
      <img src={require('./images/angelfoodcake.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>ANGEL FOOD CAKE</h4>
      <p class="price">$19.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "angelfoodcake.jpg", 19.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>ANGEL FOOD CAKE</h4>
          <br></br>
            <p>Three moist layers of stunning Red Velvet filled
            and topped silky cream cheese icing and finished with
            melt-in-your-mouth white and dark chocolate shavings and white
            chocolate drizzle; this cake is sure to be your new favourite.</p>
          <b><p>Nutrition Facts  - 1 piece</p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>
          <br></br>
            <b><p>Weight: 2.4 kg </p></b>
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
      <img src={require('./images/coffeechocolatecake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>COFFEE CHOCOLATE CAKE</h4>
      <p class="price">$19.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "coffeechocolatecake.jpg", 19.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>COFFEE CHOCOLATE CAKE</h4>
          <br></br>
            <p>Three moist layers of stunning Red Velvet filled
            and topped silky cream cheese icing and finished with
            melt-in-your-mouth white and dark chocolate shavings and white
            chocolate drizzle; this cake is sure to be your new favourite.</p>
          <b><p>Nutrition Facts  - 1 piece</p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>
          <br></br>
            <b><p>Weight: 2.4 kg </p></b>
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
      <img src={require('./images/buttercake.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>BUTTER CAKE</h4>
      <p class="price">$19.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "buttercake.jpg", 19.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>BUTTER CAKE</h4>
          <br></br>
            <p>Three moist layers of stunning Red Velvet filled
            and topped silky cream cheese icing and finished with
            melt-in-your-mouth white and dark chocolate shavings and white
            chocolate drizzle; this cake is sure to be your new favourite.</p>
          <b><p>Nutrition Facts  - 1 piece</p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>
          <br></br>
            <b><p>Weight: 2.4 kg </p></b>
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
      <img src={require('./images/doublechocolatecake.jpeg')} alt="cakes" style={{width:'100%'}}/>
      <h4>DOUBLE CHOCOLATE CAKE</h4>
      <p class="price">$19.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "doublechocolatecake.jpeg", 19.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>DOUBLE CHOCOLATE CAKE</h4>
          <br></br>
            <p>Three moist layers of stunning Double Chocolate filled
            and topped silky cream cheese icing and finished with
            melt-in-your-mouth white and dark chocolate shavings and white
            chocolate drizzle; this cake is sure to be your new favourite.</p>
          <b><p>Nutrition Facts  - 1 piece</p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>
          <br></br>
            <b><p>Weight: 2.4 kg </p></b>
          </div>
          </div>
          </div>
          </div>
          </div>


  </div>

</div>  );
  }
}
