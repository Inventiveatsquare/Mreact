import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'
import { Card, Input } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default class ContentArea extends PureComponent {




  constructor() {
    super()

    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
      items: [...Array(10).keys()],
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }
    

    this.handleClickAddItem = this.handleClickAddItem.bind(this)
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)

    this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
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





  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }

  handleClickAddItem() {
    this.setState(state => {
      return {
        items: [...state.items, state.items.length]
      }
    })
  }

  handleClickRemoveItem() {
    this.setState(state => {
      return {
        items: state.items.slice(0, -1)
      }
    })
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    return this.state.items.map(item => {
      return (
        <li className="item" key={item}>
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
        </li>
      )
    })
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state
    return (
      <div className="item-controls">
        <button
          type="button"
          disabled={!canScrollLeft}
          onClick={() => {
            this.scrollContainerBy(-200)
          }}
        >
          Previous
        </button>

        <button type="button" onClick={this.handleClickAddItem}>
          Add Item
        </button>

        <button type="button" onClick={this.handleClickRemoveItem}>
          Remove Item
        </button>

        <button
          type="button"
          disabled={!canScrollRight}
          onClick={() => {
            this.scrollContainerBy(200)
          }}
        >
          Next
        </button>
      </div>
    )
  }

  render() {
    return (
      <>
        <ul
          className="item-container"
          ref={node => {
            this.container = node
          }}
        >
          {this.buildItems()}
        </ul>
        {this.buildControls()}
      </>
    )
  }
}
