import React from 'react';


  const root = {
    display: 'flex',
    paddingTop: '10px',
    paddingTop: '10px',
    justifyContent: 'center'
  };

export class CakeDisplay extends React.Component{

  constructor(props){
      super(props);
  }

    render(){

      return(
          <div style={root}>
            <img style={{width:'600px', height:'530px',}} src={this.props.image} />

          </div>
      );
    }
}
