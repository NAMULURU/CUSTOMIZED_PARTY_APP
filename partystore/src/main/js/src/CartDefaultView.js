import React from 'react';
import './App.css';

export class CartDefaultView extends React.Component{


  render(){

    return (<div class="shopping-cart">

  <div class="title">
    Shopping Cart
  </div>


  <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>

    <div class="image">
          <img src={require('./images/double_dog_dare_merlot.png')}width="150" height="100" alt="" />
    </div>

    <div class="description">
      <span>ITEM name</span>
      <span></span>
      <span>subtitle</span>
    </div>

    <div class="quantity">
    <button class="minus-btn" type="button" name="button">
      <img src={require('./images/minus.svg')} alt="" />
    </button>
    <input type="text" name="name" value="1"></input>
      <button class="plus-btn" type="button" name="button">
        <img src={require('./images/plus.svg')}alt="" />
      </button>


    </div>

    <div class="total-price"> PRICE</div>
  </div>
  </div>



);
}
}
