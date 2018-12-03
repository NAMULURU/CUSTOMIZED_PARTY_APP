import React from 'react';
import HorizontalGridList from './HorizontalGridList.js';

export class BreadSelection extends React.Component{

  render(){
    return(
      <div>
        <HorizontalGridList onCakeSelected={this.props.onCakeSelected}/>
      </div>
    );
  }

}
