import React, { Component } from 'react'

class ProductForm extends Component {
  state = {
    newProduct: {
      productName: '',
      description: '',
      price: ''
    }
  }

  handleNewProductChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    // Makes a copy of the newProduct variable with the new info
    const newProduct = { ...this.state.newProduct }

    // This will modify the name attribute with the value attribute input in the form
    newProduct[attributeName] = attributeValue

    this.setState({ newProduct })
  }

  addNewProduct = (event) => {
    event.preventDefault()
    this.props.addNewProductToProductList(this.state.newProduct)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewProduct}>
          <div>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={this.state.newProduct.productName}
              onChange={this.handleNewProductChange} />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={this.state.newProduct.description}
              onChange={this.handleNewProductChange} />
          </div>
          <div>
            <input
              type="number"
              name="price"
              min="0.00"
              step="0.01"
              placeholder="Price"
              value={this.state.newProduct.price}
              onChange={this.handleNewProductChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Create New Product" />
          </div>
        </form>
      </div>
    )
  }
}

export default ProductForm