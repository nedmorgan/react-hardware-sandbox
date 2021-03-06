import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductForm from './ProductForm'

class AdminView extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <ProductList
          productList={this.props.productList}
          removeProductFromProductList={this.props.removeProductFromProductList}
          adminView={this.props.adminView}
          viewMode={'Admin'}
        />
        <h2>Create a New Product</h2>
        <ProductForm
          addNewProductToProductList={this.props.addNewProductToProductList}
        />
      </div>
    )
  }
}

export default AdminView