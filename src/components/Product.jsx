import React, { Component } from 'react'

class Product extends Component {
  render() {

    const { productName, description, price } = this.props
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
    )
  }
}

export default Product
