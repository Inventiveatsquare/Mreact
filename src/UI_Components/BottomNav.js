import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, } from '@material-ui/core';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import  Deck  from '@material-ui/icons/Deck';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

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
      <BottomNavigationAction label="Home" value="Home" icon={<Deck />} />
      <BottomNavigationAction label="Account" value="Account" icon={<AccountCircleOutlinedIcon />} />
      <BottomNavigationAction label="Cart" value="Cart" icon={<AddShoppingCartOutlinedIcon />} />
      <BottomNavigationAction label="Party Order" value="Party Order" icon={<StarsOutlinedIcon />} />
    </BottomNavigation>
  );
}