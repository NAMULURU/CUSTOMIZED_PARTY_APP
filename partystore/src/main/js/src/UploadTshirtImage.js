import React from 'react';
import ImageUploader from 'react-images-upload';

import Slider from '@material-ui/lab/Slider';
import LensIcon from '@material-ui/icons/LensOutlined';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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


class UploadTshirtImage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imageSize: 0
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  onDrop(picture) {
      const index = picture.length - 1;
      var reader = new FileReader();
      reader.onloadend = () => {
        this.props.onTshirtImageSelected(reader.result);
        if (this.state.imageSize < 50){
        this.props.onImageSizeChanged(50);
        this.setState({imageSize: 50});
      }
    }
      reader.readAsDataURL(picture[index]);

    }

    handleSliderChange(event, sliderValue){
      this.props.onImageSizeChanged(sliderValue);
      this.setState({imageSize: sliderValue});
    }

  render(){

    const { classes } = this.props;

    return (
      <div>
      <ImageUploader
              withIcon={true}
              buttonText='Choose image'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
              maxFileSize={5242880}
          />
          <Slider
            value={this.state.imageSize}
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

UploadTshirtImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadTshirtImage);
