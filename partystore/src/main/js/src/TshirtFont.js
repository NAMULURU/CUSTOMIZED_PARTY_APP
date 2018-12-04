import React from 'react';
import FontPicker from 'font-picker-react';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/lab/Slider';
import LensIcon from '@material-ui/icons/LensOutlined';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  slider: {
    padding: '22px 0px',
  },
  thumbIcon: {
    borderRadius: '50%',
  },
  thumbIconWrapper: {
    backgroundColor: '#fff',
  },
});

class TshirtFont extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeFont: 'Varela Round',
      textSize: 10
    };
    this.onKeyListener = this.onKeyListener.bind(this);
    this.onFontChangeListener = this.onFontChangeListener.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  onKeyListener(e){
    this.props.onTshirtTextChanged(e.target.value);
    this.props.handleCustomcartItem({
      name:'tshirtText',
      value:e.target.value
    });
  }

  onFontChangeListener(font){
    this.props.onTshirtFontChanged(font);
    this.props.handleCustomcartItem({
      name:'tshirtFont',
      value:font
    });
  }

  handleSliderChange(event, sliderValue){
    this.props.onFontSizeChanged(sliderValue);
    this.props.handleCustomcartItem({
      name:'tshirtFontSize',
      value:sliderValue
    });
    this.setState({textSize: sliderValue});
  }

  render(){

    const { classes } = this.props;

    return(
      <div style={{marginTop:'10px'}}>

      <TextField
        id="outlined-full-width"
        label="Decoration Text"
        style={{ margin: 8 }}
        placeholder="Enter your Text"
        helperText="Maximum of 300 characters"
        className={classes.textField}
        fullWidth
        multiline
        onChange = {this.onKeyListener}
        inputProps={{maxLength: 300}}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

        <FontPicker
          apiKey="AIzaSyB8WNVThU9Bd-UOKwghx8Z0o4ExEPsKm00"
          activeFont={this.state.activeFont}
          onChange={nextFont => {this.onFontChangeListener(nextFont.family); this.setState({ activeFont: nextFont.family })}}
        />

        <Slider
          value={this.state.textSize}
          aria-labelledby="slider-icon"
          onChange={this.handleSliderChange}
          classes={{
            container: classes.slider,
            thumbIconWrapper: classes.thumbIconWrapper,
          }}
          thumb={<LensIcon style={{ color: '#2196f3' }} />}
          />

      </div>
    );
  }
}

TshirtFont.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TshirtFont);
