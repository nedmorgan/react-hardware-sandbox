import React, { Component } from 'react';
import Product from './Product'

class ShopView extends Component {
  state = {}
  render() {
    const { productList } = this.props
    const productComponents = productList.map((product, index) => {
      return <Product
        productName={product.productName}
        description={product.description}
        price={product.price}
        key={index}
        index={index}
        removeProductFromProductList={this.props.removeProductFromProductList}
      />
    })
    return (
      <div>
        <h1>Shop</h1>
        {productComponents}
      </div>
    )
  }
}

export default ShopView