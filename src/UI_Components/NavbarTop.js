import React from 'react';
import classes from '../App.css';

import {AppBar, Toolbar, MenuItem,  Select,  InputBase, FormControl, InputLabel, Button }  from '@material-ui/core';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchtab: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavbarTop() {
  const classes = useStyles();

  const [City, setCity] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <div  className={classes.searchtab}  noWrap>
          <FormControl className={classes.formControl }>
              <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select"
         open={open}
         onClose={handleClose}
         onOpen={handleOpen}
         value={City}
         onChange={handleChange}
       >
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Delhi</MenuItem>
         <MenuItem value={20}>Chandigarh</MenuItem>
         <MenuItem value={30}>Goa</MenuItem>
       </Select>
     </FormControl>
          </div>


          <div className={classes.search}>
            <div className={classes.searchIcon}> 
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={ classes.searchInput}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}
