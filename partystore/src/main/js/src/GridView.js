import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import party from './Party.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '40%',
    height: '70%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

  const tileData = [
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    },
    {
      img: party,
      title: 'Image',
      author: 'author',
    }

  ];

class GridView extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
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

GridView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridView);
