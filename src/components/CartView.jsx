import React, { Component } from 'react';
import ProductList from './ProductList'

class CartView extends Component {

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <ProductList
          productList={this.props.productList}
          viewMode={'Cart'}
          removeItemFromCart={this.props.removeItemFromCart}
        />
        <div>
          <p>Total:</p>
          <p>${this.props.total}</p>
        </div>
      </div>
    );
  }
}

export default CartView;