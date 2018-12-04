import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const tileData = [
   {
     img: './img/tshirt.svg',
     title: 'tshirt',
     author: 'tshirt',
   },
   {
     img: './img/styledRoundNeck.svg',
     title: 'StyledRoundNeck',
     author: 'StyledRoundNeck',
   },
   {
     img: './img/triangle.svg',
     title: 'triangle',
     author: 'triangle',
   }
 ];

class TshirtHorizontalGridList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      notifyDefaultTshirtSelection: true,
      selectedTshirt:tileData[0]['title']
    }
    this.onTshirtChanged = this.onTshirtChanged.bind(this);
  }

  onTshirtChanged(e){
    this.props.onTshirtSelected(e.target.value);
    this.props.handleCustomcartItem({name:'tshirtStyle', value:e.target.value});

    if(this.state.notifyDefaultTshirtSelection){
      this.setState({
        notifyDefaultTshirtSelection: false
      });
    };
  }

  render(){

    const { classes } = this.props;
    if(this.state.notifyDefaultTshirtSelection){
      this.props.onTshirtSelected(this.state.selectedTshirt);
    }

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton onClick={this.onTshirtChanged}>
                  {this.state.selectedTshirt === tile.title ?
                    <input type="radio" name="cakeSelect" value={tile.title} checked="checked" /> :
                    <input type="radio" name="cakeSelect" value={tile.title} />
                  }
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TshirtHorizontalGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TshirtHorizontalGridList);
