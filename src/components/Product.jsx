import React, { Component } from 'react'

class Product extends Component {
  deleteItem = () => {
    this.props.removeProductFromProductList(this.props.index)
  }

  addItemToCart = () => {
    this.props.addItemToCart(this.props.index)
  }

  removeItemFromCart = () => {
    this.props.removeItemFromCart(this.props.index)
  }

  showButtons = () => {
    const viewMode = this.props.viewMode
    
    const adminButton = (
      <div>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    )

    const shopButton = (
      <div>
        <button onClick={this.addItemToCart}>Add to Cart</button>
      </div>
    )

    const removeCartButton = (
      <div>
        <button onClick={this.removeItemFromCart}>Remove From Cart</button>
      </div>
    )

    switch (viewMode) {
      case 'Admin':
        return adminButton
      case 'Shop':
        return shopButton
      case 'Cart':
        return removeCartButton
      default:
        return null
    }
  }
  render() {

    const { productName, description, price } = this.props
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        {this.showButtons()}
      </div>
    )
  }
}

export default Product
