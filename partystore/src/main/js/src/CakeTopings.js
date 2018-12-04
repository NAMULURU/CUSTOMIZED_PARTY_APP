import React from 'react';
import ChipView from './ChipView.js';

export class CakeTopings extends React.Component{

  render(){
    return(
      <div>
        <ChipView handleCustomcartItem={this.props.handleCustomcartItem} onCakeSelected={this.props.onCakeSelected} />
      </div>
    );
  }

}
