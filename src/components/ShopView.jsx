import React, { Component } from 'react';
import ProductList from './ProductList';

class ShopView extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Shop</h1>
        <ProductList
          productList={this.props.productList}
        />
      </div>
    )
  }
}

export default ShopView