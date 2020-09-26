import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({

  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },

});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
      <BottomNavigationAction label="Home" value="Home" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Account" value="Account" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Cart" value="Cart" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Party Order" value="Party Order" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}