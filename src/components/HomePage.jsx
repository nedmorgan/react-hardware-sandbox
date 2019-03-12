import React, { Component } from 'react'
import AdminView from "./AdminView"
import ProductList from './ProductList'
import Product from './Product'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true,
    productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
      }
    ]
  }

  toggleEditSaleItem = () => {
    // This variale needs to be names the same as the key above
    const editSaleItem = !this.state.editSaleItem
    // this.setState({editSaleItem: editSaleItem})
    this.setState({ editSaleItem })
  }

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value
    this.setState({ itemCurrentlyOnSale })
  }

  // A react function to view a string value on the tab
  componentDidMount = () => {
    document.title = this.state.itemCurrentlyOnSale
  }

  // A react function to make sure that the value updates based on changing data in the field
  componentDidUpdate = () => {
    document.title = this.state.itemCurrentlyOnSale
  }

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div><span>Currently on Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
          </span>
          {this.state.editSaleItem ? <div><input onChange={this.handleItemCurrentlyOnSaleChange} type="text" value={this.state.itemCurrentlyOnSale} /></div> : null}
        </div>
        <AdminView productList={this.state.productList} />
      </div>
    )
  }
}

export default HomePage