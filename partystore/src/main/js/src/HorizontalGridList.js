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
    img: './img/plain.jpg',
    title: 'Italian Bread',
    author: 'plain',
  },
   {
     img: './img/plain chacolate bread.jpg',
     title: 'Choclolate Bread',
     author: 'plain chacolate bread',
   },
   {
     img: './img/plain bread.jpg',
     title: 'Wheat Bread',
     author: 'plain bread',
   },
 ];

class HorizontalGridList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      notifyDefaultCakeSelection: true,
      selectedCake:tileData[0]['author']
    }
    this.onCakeChanged = this.onCakeChanged.bind(this);
  }

  onCakeChanged(e){
    this.props.onCakeSelected(e.target.value);
    this.props.handleCustomcartItem({
      name:'cakeBread',
      value:e.target.value
    });

    if(this.state.notifyDefaultCakeSelection){
      this.setState({
        notifyDefaultCakeSelection: false
      });
    };
  }

  render(){

    const { classes } = this.props;
    if(this.state.notifyDefaultCakeSelection){
      this.props.onCakeSelected(this.state.selectedCake);
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
                  <IconButton onClick={this.onCakeChanged}>
                  {this.state.selectedCake === tile.author ?
                    <input type="radio" name="cakeSelect" value={tile.author} checked="checked" /> :
                    <input type="radio" name="cakeSelect" value={tile.author} />
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

HorizontalGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalGridList);
