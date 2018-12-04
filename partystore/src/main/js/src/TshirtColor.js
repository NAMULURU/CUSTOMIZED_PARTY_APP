import React from 'react';
import TshirtHorizontalGridList from './TshirtHorizontalGridList.js';

import { CirclePicker } from 'react-color';

const root = {
  display: 'flex',
  paddingTop: '10px',
  justifyContent: 'center',
  paddingLeft:'10%',
  paddingRight:'10%',
  justifyContent:'space-around'
};

export class TshirtColor extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentColor: '#f69d02'
    }
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color){
    this.props.onColorSelected(color.hex);
    this.props.handleCustomcartItem({
      name:'tshirtColor',
      value:color.hex
    });
    this.setState({currentColor: color.hex});
  }

  render(){

    return(
      <div style={root}>
        <TshirtHorizontalGridList handleCustomcartItem={this.props.handleCustomcartItem} onTshirtSelected={this.props.onTshirtSelected} />
        <CirclePicker color={ this.state.currentColor } onChangeComplete={this.handleColorChange} />
      </div>
    );
  }
}
