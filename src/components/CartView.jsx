import React, { Component } from 'react';
import ProductList from './ProductList'

class CartView extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <ProductList
          productList={this.props.productList}
        />
      </div>
    );
  }
}

export default CartView;