import React from 'react';
import HorizontalGridList from './HorizontalGridList.js';

export class BreadSelection extends React.Component{

  render(){
    return(
      <div>
        <HorizontalGridList handleCustomcartItem={this.props.handleCustomcartItem} onCakeSelected={this.props.onCakeSelected}/>
      </div>
    );
  }

}
