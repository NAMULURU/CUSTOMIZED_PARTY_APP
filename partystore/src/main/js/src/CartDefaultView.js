import React from 'react';
import './App.css';

export class CartDefaultView extends React.Component{

  constructor(props){
    super(props);
    this.state={
      cartData:[]
    }
    this.getDefaultCartData = this.getDefaultCartData.bind(this);
  }

  componentDidMount(){
    this.getDefaultCartData();
  }

  getDefaultCartData(){
    fetch('http://127.0.0.1:9090/default-cart-items', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cartData: data,
        });
      });
  }


  render(){

    let dataset = this.state.cartData;

    return (
      <div class="shopping-cart">

  <div class="title">
    Default Shopping Cart
  </div>

  {dataset.map( item => (
    <div>
    <table>
    <tr>
   <th><b>Item</b></th>
   <th><b>ItemName</b></th>
   <th><b>Quantity</b></th>
   <th><b>Price</b></th>
 </tr>
    <tr>
    <td>
    <div class="image">
          <img src={'/img/images/'+item.itemName} width="10" height="10"/>
    </div>
</td>
<td>
    <div class="description">
      <span>{item.itemName}</span>
    </div>
</td>
<td>
    <div class="quantity">
    <input type="text" name="name" value={item.quantity}></input>
    </div>
</td>
<td>
    <div class="total-price">{item.price}</div>

    </td>
      </tr>
    </table>
    </div>
  ))}
  </div>
);
}
}
