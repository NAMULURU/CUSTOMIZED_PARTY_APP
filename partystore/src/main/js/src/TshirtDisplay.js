import React from 'react';
import Draggable from 'react-draggable';

import {TshirtSVG} from './TshirtSVG.js';
import {StyledRoundNeck} from './StyledRoundNeck.js';
import {TriangleRoundNeck} from './TriangleRoundNeck.js';

const root = {
  display: 'flex',
  paddingTop: '10px',
  justifyContent: 'center'
};

export class TshirtDisplay extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const TshirtComponent = {
      "tshirt": <TshirtSVG color={this.props.color} />,
      "StyledRoundNeck":<StyledRoundNeck color={this.props.color} />,
      "triangle":<TriangleRoundNeck color={this.props.color} />
    }

    return (
      <div id="displayTshirt" style={root}>
        <div id="tshirt">
          {TshirtComponent[this.props.displayImage]}
        </div>
        <Draggable
        handle="p"
        defaultPosition= {{x: 0, y: 200}}
        >
            <div style={{position:'absolute'}} className="box no-cursor">
                <p className="cursor"><pre style={{fontFamily:this.props.font, fontSize:this.props.fontSize}}>{this.props.text}</pre></p>
            </div>
        </Draggable>

        <Draggable
        handle="p"
        defaultPosition= {{x: 0, y: 250}}
        >
            <div style={{position:'absolute'}} className="box no-cursor">
                <p className="cursor">
                <img src={this.props.imagePath}
                style={{fontFamily:this.props.font, fontSize:this.props.fontSize, width:this.props.imageSize, height:this.props.imageSize}} /> </p>
            </div>
        </Draggable>
      </div>
    );
  }

}
