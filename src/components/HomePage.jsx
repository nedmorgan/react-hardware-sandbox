import React, { Component } from 'react'
import AdminView from "./AdminView"
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true,
    adminView: false,
    productList: [
      {
        productName: 'Hammer',
        description: 'Its a hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Its a nail',
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

  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList]
    productList.push(newProduct)
    this.setState({ productList })
  }

  removeProductFromProductList = (productIndex) => {
    const productList = [...this.state.productList]
    productList.splice(productIndex, 1)
    this.setState({ productList })
  }

  changeToAdminView = () => {
    const adminView = !this.state.adminView
    this.setState({ adminView })
  }

  render() {

    const adminView = <AdminView
      productList={this.state.productList}
      addNewProductToProductList={this.addNewProductToProductList}
      removeProductFromProductList={this.removeProductFromProductList} />

    const shopView = <ShopView
      productList={this.state.productList}
    />
    return (
      <div>
        <h1>My Hardware Store</h1>
        <span>
          <button onClick={this.changeToAdminView}>
            {this.state.adminView ? 'Show Shop View' : 'Show Admin View'}
          </button>
        </span>
        <div><span>Currently on Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
          </span>
          {this.state.editSaleItem ? <div><input onChange={this.handleItemCurrentlyOnSaleChange} type="text" value={this.state.itemCurrentlyOnSale} /></div> : null}
        </div>
        <div>
          {this.state.adminView ? adminView : shopView}
          <CartView
            productList={this.state.productList}
          />
        </div>
      </div>
    )
  }
}

export default HomePage