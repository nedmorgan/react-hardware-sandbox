import React, { Component } from 'react'

class Product extends Component {
  deleteItem = () => {
    this.props.removeProductFromProductList(this.props.index)
  }
  
  render() {

    const { productName, description, price } = this.props
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        <button type="delete" onClick={() => this.props.removeProductFromProductList(this.props.index)}>{this.props.adminView ? "Delete" : "Add to Cart"}</button>
      </div>
    )
  }
}

export default Product
