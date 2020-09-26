import React, { Component } from 'react';

import { Card, Input } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  '../App.css';


class ContentArea extends Component {

    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
        max: 5,
        min: 0
      };
    }
  
    IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity < 9) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }

    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }

    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }

    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
  
      return ( 
      <div>
          
    <Card className="roots">
      <CardActionArea>
        <CardMedia
          className="medias"
          image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wrap-Tastic Combo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <p>Price : <span>200</span></p>
        <Button  onClick={this.IncrementItem}>+</Button>
        <Input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
        <Button onClick = {this.DecreaseItem}>- </Button>
        <Button variant="contained" color="secondary">Add</Button>
      </CardActions>
    </Card>

    <Card className="roots">
      <CardActionArea>
        <CardMedia
          className="medias"
          image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wrap-Tastic Combo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <p>Price : <span>200</span></p>
        <Button  onClick={this.IncrementItem}>+</Button>
        <Input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
        <Button onClick = {this.DecreaseItem}>- </Button>
        <Button variant="contained" color="secondary">Add</Button>
      </CardActions>
    </Card>


    <Card className="roots">
      <CardActionArea>
        <CardMedia
          className="medias"
          image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wrap-Tastic Combo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <p>Price : <span>200</span></p>
        <Button  onClick={this.IncrementItem}>+</Button>
        <Input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
        <Button onClick = {this.DecreaseItem}>- </Button>
        <Button variant="contained" color="secondary">Add</Button>
      </CardActions>
    </Card>

    
        
    </div>
      )
    }
  }
  
export default ContentArea;