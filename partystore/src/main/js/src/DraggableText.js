import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export class DraggableText extends React.Component{

  render(){
    return(
      <div>
          <Draggable handle="strong">
              <div className="box no-cursor">
                  <strong className="cursor">Drag Here</strong>
                  <div>You must click my handle to drag me</div>
              </div>
          </Draggable>
      </div>
    );
  }

}
