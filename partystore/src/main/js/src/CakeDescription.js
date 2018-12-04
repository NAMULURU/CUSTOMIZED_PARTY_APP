import React from 'react';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class CakeDescription extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    };

    this.handleDescription = this.handleDescription.bind(this);

  }

  handleDescription(e){
    this.props.handleCustomcartItem({name:'cakeDescription', value:e.target.value});
  }

  render(){

    const { classes } = this.props;

    return(
      <div style={{marginTop:'10px'}}>
      <TextField
        onChange={this.handleDescription}
        id="outlined-full-width"
        label="Decoration Text"
        style={{ margin: 8 }}
        placeholder="Enter your Text"
        helperText="Maximum of 30 characters"
        className={classes.textField}
        fullWidth
        inputProps={{maxLength: 30}}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
    );
  }

}

CakeDescription.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CakeDescription);
