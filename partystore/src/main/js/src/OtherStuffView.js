import React from 'react';
import './App.css';


export class OtherStuffView extends React.Component{
  constructor(props){
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(e, name, price){
      console.log("Add to Cart Button is Clicked");
      let cartItem={email:'', category:'OTHER_STUFF', price:price, quantity:1, itemName:name};
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
      <img src={require('./images/hanging_fans.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>Hanging Fans</h4>
      <p class="price">$12.99</p>
          <p><button onClick = {e => this.onAddToCart(e, "hanging_fans.jpg", 12.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Hanging Fans</h4>
          <br></br>
            <p>Are you looking for the perfect south of the border addition to your party supplies?
             These Let’s Fiesta! Hanging Fans are perfect for decorating for your fiesta and Cinco de Mayo celebration.
             Easy to hang and decked out in bright colors, these paper fans are sure to set the scene for a spicy good time.
              Includes 10" and 14" diameter paper fans. (6 pcs. per unit) Simple assembly required. Printed on front only.</p>
      <br></br>
      <br></br>
            <b><p>Quantity:5units </p></b>
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
      <img src={require('./images/ballons.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>Standard Color Balloons</h4>
      <p class="price">$16.99</p>
        <p><button onClick = {e => this.onAddToCart(e, "ballons.jpg", 16.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Standard Color Balloons</h4>
          <br></br>
            <p>Latex Standard Color Balloons. Turn your party into a dazzling rainbow
             with these 11" colorful balloons! In dark blue, light blue, green, yellow, white,
              orange, red, purple and pink, these balloons make excellent decorations for a variety
               of events and gatherings. (144 pcs. per unit)</p>
      <br></br>
      <br></br>
            <b><p>Quantity:2 units  </p></b>
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
      <img src={require('./images/banners.jpg')}alt="cakes" style= {{width:'100%'}}/>
      <h4>Banners and Penants</h4>
      <p class="price">$9.49</p>
        <p><button onClick = {e => this.onAddToCart(e, "banners.jpg", 9.49)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Banners and Penants</h4>
          <br></br>
            <p>Add a splash of vibrant color to any event with this banner.
            At 100-ft. long, you'll have plenty for decorating indoor or outdoor birthday parties,
            fundraisers, carnivals and more! Plastic. Includes 48 pennants on a 100-ft. string.</p>
        <br></br>
        <br></br>
            <b><p>Quantity:one packet  </p></b>
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
      <img src={require('./images/chocolates.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>Chocolates and Candies</h4>
      <p class="price">$13.99</p>
      <p><button onClick = {e => this.onAddToCart(e, "chocolates.jpg", 13.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Chocolates and Candies</h4>
          <br></br>
            <p>Satisfy that sweet tooth with savings! Our quality collection of chocolate candies
             offers classic confectionaries, personalized picks, name-brand finds and more. Stock
             up on Hershey's Kisses, Tootsie Roll, Sixlets, M&Ms, Tootsie Pops, Reese's and tons more.
             Whether it be for a milestone anniversary party, birthday bash or graduation celebration,
              we have over 125 tasty treats for you to explore.</p>
        <br></br>
        <br></br>
            <b><p>Quantity:one packet  </p></b>
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
      <img src={require('./images/party_led.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>Party LED Lights</h4>
      <p class="price">$9.99</p>
      <p><button onClick = {e => this.onAddToCart(e, "party_led.jpg", 9.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Party LED Lights</h4>
          <br></br>
            <p>Use these hanging lanterns to softly illuminate your event. These eye-catching
            paper lanterns will add an elegant ambiance to your party decorations while jazzing
             it up with the perfect pop of color. Hang these paper lanterns at your wedding reception,
              birthday party, summer celebration and more. (3 pcs. per set)</p>
        <br></br>
        <br></br>
            <b><p>Quantity: 3 sets  </p></b>
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
      <img src={require('./images/party_table_set.jpg')} alt="cakes" style={{width:'100%'}}/>
      <h4>Party Table Ware Set</h4>
      <p class="price">$7.99</p>
      <p><button onClick = {e => this.onAddToCart(e, "party_table_set.jpg", 7.99)}>ADD TO CART</button></p>
        </div>
          <div class="flip-box-back">
          <h4>Party Table Ware Set</h4>
          <br></br>
            <p>All Table related stuff from cups,table clotihng , plates and silver ware
            all included in a set containing hundreds of cups plates and silver ware
            with 3 table clothes per set
            </p>
            <br></br>
          <br></br>
             <b><p>Quantity:2 sets </p></b>
          </div>
          </div>
          </div>
          </div>
          </div>

  </div>


</div>  );
  }
}
