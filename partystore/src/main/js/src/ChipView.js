import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
  root: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedChips:['jQuery', 'React'],
      isPrimary:true,
      chipData: [
        { key: 0, label: 'Vanilla', isPrimary:true},
        { key: 1, label: 'Strawbrerry', isPrimary:false},
        { key: 2, label: 'Chocolate', isPrimary:false},
        { key: 3, label: 'Mango', isPrimary:false},
        { key: 4, label: 'Blueberry', isPrimary:false},
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.onCakeChanged = this.onCakeChanged.bind(this);
  }

  handleClick(e, key){

    let x = this.state.chipData;
    let k = x[key];
    if(k.isPrimary){
      k['isPrimary'] = false;
    }
    else{
      k['isPrimary'] = true;
    }
    x[key] = k;

    let toppings = "";

    x.map(item => {if(item.isPrimary) {toppings = toppings + ' ' +item.label}});
    this.props.handleCustomcartItem({
      name:'cakeToppings',
      value:toppings
    });

    this.setState({
      chipData: x
    });

    this.onCakeChanged(toppings);

  }

  componentDidMount(){
    this.props.onCakeSelected('vanilla');
  }

  onCakeChanged(toppings){
    this.props.onCakeSelected('vanillastrawberry');
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let icon = null;

          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }

          return (
            <Chip
              key={data.key}
              icon={icon}
              clickable
              onClick={(e) => {this.handleClick(e,data.key)}}
              label={data.label}
              color={data.isPrimary?"primary":""}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipView);
