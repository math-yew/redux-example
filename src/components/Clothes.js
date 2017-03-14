import React, { Component } from 'react';
import {Link} from 'react-router';
import { getClothes } from '../services/clothesService';
import Item from "./Item";

class Clothes extends Component {

  constructor() {
    super();

    this.state = {
      clothes: []
    }
  }

  render() {

    const clothes = this.state.clothes.map((item, i) => {
    return (

      <Link to={"clothes/" + item.name}>
      <Item key={i} item={item} />
      </Link>
    )
  })


    return (
      <div>
        <h1>Clothes Page</h1>
        {clothes[0] ? clothes : <h1>Loading....</h1>}
      </div>
    )
  }

  componentDidMount() {
    getClothes().then(clothes => {
      this.setState({
        clothes: clothes
      })
    })
  }

}

export default Clothes
