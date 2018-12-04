import React from 'react';
import './App.css';

export class DrinkDefaultView extends React.Component{
  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(e, name, price){
      console.log("Add to Cart Button is Clicked");
      let cartItem={email:'', category:'DRINK', price:price, quantity:1, itemName:name};
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
      <img src={require('./images/la_vostra_prosecco.png')} alt="cakes" style={{width:'70%'}}/>
      <h4>La Vostra Prosecco</h4>
      <p class="price">$10.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "la_vostra_prosecco.png", 10.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>La Vostra Prosecco</h4>
          <br></br>
            <p>Veneto, Italy - Immerse yourself in the juicy, irresistible flavors of apple,
            white peach and fragrant honeysuckle with La Vostra Prosecco. This inviting,
            bubbly sipper appeals to even the most selective sparkling enthusiast.
            Enjoy at all special occasions or casual gatherings alike!</p>
      <b><p>Nutrition Facts </p></b>
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
            <b><p>Quantity:750ml  </p></b>
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
      <img src={require('./images/reluna_prosecco.png')} alt="cakes" style={{width:'70%'}}/>
      <h4>ReaLuna Prosecco</h4>
      <p class="price">$14.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "reluna_prosecco.png", 14.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>ReaLuna Prosecco</h4>
          <br></br>
            <p>Veneto, Italy - Crisp and well-balanced, this Spumante is a refreshing treat.
            The nose is fascinatingly fruity with lovely notes of acacia, apples, and white peaches.
            With a hint of sweetness and good acidity in perfect balance,
            it makes a great pairing with fried food or desserts.</p>
      <b><p>Nutrition Facts </p></b>
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
            <b><p>Quantity:750ml  </p></b>
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
      <img src={require('./images/double_dog_dare_merlot.png')}alt="cakes" style= {{width:'70%'}}/>
      <h4>Double Dog Dare Merlot</h4>
      <p class="price">$4.49</p>
        <p><button onClick = {e => this.onAddToCart(e, "double_dog_dare_merlot.png", 4.49)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Double Dog Dare Merlot</h4>
          <br></br>
            <p>California- An elegant wine with well-integrated flavors of sweet cherry fruit,
             velvety soft medium-body, and soft, ripe tannins. Round and delicious,
             this wine is great with food or enjoyed by itself.</p>
        <b><p>Nutrition Facts </p></b>
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
            <b><p>Quantity:750ml  </p></b>
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
      <img src={require('./images/chimay_grande.png')} alt="cakes" style={{width:'70%'}}/>
      <h4>Chimay Grande Reserve Blue</h4>
      <p class="price">$13.99</p>
          <p><button onClick = {e => this.onAddToCart(e, "chimay_grande.png", 13.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Chimay Grande Reserve Blue</h4>
          <br></br>
            <p>Belgium- Belgian Strong Dark Ale- 9% ABV. TRAPPIST ALE.
            The color of this beer is dark and inviting.A rich and lively sweetness
            gives way to a drier finish. A peppery spiciness is balanced by thyme,
            cedar & a touch of nutmeg. BeerAdvocate's #25 of 25 All-Time Top Beers 2008.</p>
        <b><p>Nutrition Facts </p></b>
        <p>
        35% Total Fat 23g.
        70% Saturated Fat 14g.
        Trans Fat 0.3g.
        31% Cholesterol 93mg.
        13% Sodium 318mg.
        3% Potassium 92mg.
        12% Total Carbohydrates 36g.
        1% Dietary Fiber 0.3g.</p>

            <b><p>Quantity:750ml  </p></b>
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
      <img src={require('./images/duvel_belgian.png')} alt="cakes" style={{width:'70%'}}/>
      <h4>Duvel Belgian-Ale</h4>
      <p class="price">$9.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "duvel_belgian.png", 9.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Duvel Belgian-Ale</h4>
          <br></br>
            <p>Belgium- Belgian Strong Pale Ale- 8.5% ABV. Duvel is pale with a prodigious head,
             champagne sparkle, dry lingering finish, and a hint of pear. It was proclaimed
             as one of the 5 greatest beers in the world by the late Michael Jackson.
             It is fermented three times and bottle conditioned.</p>
        <b><p>Nutrition Facts </p></b>
        <p>
        35% Total Fat 23g.
        70% Saturated Fat 14g.
        Trans Fat 0.3g.
        31% Cholesterol 93mg.
        13% Sodium 318mg.
        3% Potassium 92mg.
        12% Total Carbohydrates 36g.
        1% Dietary Fiber 0.3g.</p>

            <b><p>Quantity:750ml  </p></b>
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
      <img src={require('./images/strongbow_cold.png')} alt="cakes" style={{width:'70%'}}/>
      <h4>Strongbow Gold Cider</h4>
      <p class="price">$7.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "strongbow_cold.png", 7.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Strongbow Gold Cider</h4>
          <br></br>
            <p>England- Apple Cider- 5.0%. Strongbow Gold Apple has a wonderful transparent gold color,
            a rich and complex aromatic array dominated by several varieties of apple and a refreshing
            texture with a true balance between first acidity, sharpness and sourness;
            and then sweetness and softness.
            </p>
            <b><p>Nutrition Facts </p></b>
          <p>
          35% Total Fat 23g.
          70% Saturated Fat 14g.
          Trans Fat 0.3g.
          31% Cholesterol 93mg.
          13% Sodium 318mg.
          3% Potassium 92mg.
          12% Total Carbohydrates 36g.
          1% Dietary Fiber 0.3g.</p>

             <b><p>Quantity:750ml </p></b>
          </div>
          </div>
          </div>
          </div>
          </div>

  </div>


</div>  );
  }
}
