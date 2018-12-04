import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Steps from './Steps.js';
import {BreadSelection} from './BreadSelection.js';
import {CakeTopings} from './CakeTopings.js';
import CakeDescription from './CakeDescription.js';

import 'font-awesome/css/font-awesome.min.css';
import {CakeDefaultView} from './CakeDefaultView.js';
import {ShirtDefaultView} from './ShirtDefaultView.js';
import {CakeDisplay} from './CakeDisplay.js';


import {TshirtColor} from './TshirtColor.js';
import TshirtFont from './TshirtFont.js';
import {TshirtDisplay} from './TshirtDisplay.js';
import UploadTshirtImage from './UploadTshirtImage.js';



const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
};

class TabbedView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayCake:"",
      displayTshirt:"",
      value: 0,
      text: '',
      cartList:[],
      imageSize:0,
      imagePath:undefined,
      font: 'Varela Round',
      fontSize:10,
      color:'none',
      stepperInfo: {
        "CAKE": {
          'Select Bread of Cake': <BreadSelection handleCustomcartItem={this.props.handleCustomcartItem} onCakeSelected={this.setDisplayCake} />,
          'Select Type of Toppings': <CakeTopings handleCustomcartItem={this.props.handleCustomcartItem} onCakeSelected={this.setDisplayCake} />,
          'Select Decoration Text': <CakeDescription handleCustomcartItem={this.props.handleCustomcartItem} />
        },
        "T_SHIRT":{
          "Select T-shirt Material": <TshirtColor handleCustomcartItem={this.props.handleCustomcartItem} onTshirtSelected={this.setDisplayTshirt} onColorSelected={this.setTshirtcolor} />,
          "Write Color, Text & Font": <TshirtFont handleCustomcartItem={this.props.handleCustomcartItem} onFontSizeChanged={this.setFontSize} onTshirtFontChanged={this.setTshirtFont} onTshirtTextChanged={this.setTshirtText} />,
          "Select Images/Upload": <UploadTshirtImage handleCustomcartItem={this.props.handleCustomcartItem} onImageSizeChanged={this.setImageSize} onTshirtImageSelected={this.setImagePath} />
      }
    }
    };
    this.handleChange = this.handleChange.bind(this);
    this.setDisplayCake = this.setDisplayCake.bind(this);
    this.setDisplayTshirt = this.setDisplayTshirt.bind(this);
    this.setTshirtcolor = this.setTshirtcolor.bind(this);
    this.setTshirtText = this.setTshirtText.bind(this);
    this.setImagePath = this.setImagePath.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setImageSize = this.setImageSize.bind(this);
    this.onItemAddedToCart = this.onItemAddedToCart.bind(this);

  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  setDisplayCake = imagePath => {
    console.log(this.setState);
    this.setState({
      displayCake: "/img/"+imagePath+".jpg"
    });
  };

  setDisplayTshirt = imagePath => {
    this.setState({
      displayTshirt: imagePath
    });
  };

  setTshirtcolor = selectedColor => {
    this.setState({color: selectedColor});
  };

  setTshirtText = TshirtText => {
    this.setState({text: TshirtText});
  };

  setImagePath = path => {
    this.setState({imagePath: path});
  };

  setTshirtFont = tshirtFont => {
    this.setState({font: tshirtFont});
  }

  setFontSize = fontSizeSelected => {
    this.setState({fontSize: fontSizeSelected});
  }

  setImageSize = imageSizeSelected => {
    this.setState({imageSize: imageSizeSelected});
  }

  onItemAddedToCart = cartItem => {
    let list = this.state.cartList;
    list.push(cartItem);
    this.setState({cartList: list});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper square className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<i class="fa fa-eye fa-lg"></i>} label="Default" />
            <Tab icon={<i class="fa fa-wrench fa-lg"></i>} label="Customize" />
          </Tabs>
        </Paper>
        {this.state.value === 0 && this.props.selectedKey === "CAKE" ? <CakeDefaultView addDefaultCartItem={this.props.addDefaultCartItem} addToCartList={this.onItemAddedToCart}
          onCartValueChange={this.props.onCartValueChange} /> : undefined}
        {this.state.value === 0 && this.props.selectedKey === "T_SHIRT" ? <ShirtDefaultView addDefaultCartItem={this.props.addDefaultCartItem} addToCartList={this.onItemAddedToCart}
          onCartValueChange={this.props.onCartValueChange} /> : undefined}
        {this.state.value === 1 ? <Steps handleResetAction={this.props.handleResetAction} insertCustomCartItem={this.props.insertCustomCartItem} handleCustomcartItem={this.props.handleCustomcartItem} addToCartList={this.onItemAddedToCart} stepperInfo={this.state.stepperInfo[this.props.selectedKey]}
          onCartValueChange={this.props.onCartValueChange} /> : undefined}
        {this.state.value === 1 && this.props.selectedKey === "CAKE" ? <CakeDisplay image={this.state.displayCake} /> : undefined}
        {this.state.value === 1 && this.props.selectedKey === "T_SHIRT" ? <TshirtDisplay imageSize={this.state.imageSize} imagePath={this.state.imagePath}
          displayImage={this.state.displayTshirt} fontSize={this.state.fontSize}
          font={this.state.font} text={this.state.text} color={this.state.color} /> : undefined}
      </div>
    );
  }
}

TabbedView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabbedView);
