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
        price: 12.35,
      },
      {
        productName: 'Nail',
        description: 'Its a nail',
        price: 0.12,
      }
    ],
    cartList: [],
    total: 0
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

  addItemToCart = (index) => {
    const cartList = [...this.state.cartList]
    const product = { ...this.state.productList[index] }
    let total = this.state.total
    total += product.price
    // total = total.toFixed(2)
    this.setState({ total })
    cartList.push(product)
    this.setState({ cartList })
  }

  removeItemFromCart = (index) => {
    const cartList = [...this.state.cartList]
    let total = this.state.total
    cartList.splice(index, 1)
    this.setState({ cartList })
    total = cartList.map(i => { return i.price }).reduce((a, b) => { return a + b }, 0)
    // total = total.toFixed(2)
    this.setState({ total })
  }

  render() {

    const adminView = <AdminView
      productList={this.state.productList}
      adminView={this.state.adminView}
      addNewProductToProductList={this.addNewProductToProductList}
      removeProductFromProductList={this.removeProductFromProductList} />

    const shopView = <ShopView
      productList={this.state.productList}
      adminView={this.state.adminView}
      addItemToCart={this.addItemToCart}
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
            productList={this.state.cartList}
            removeItemFromCart={this.removeItemFromCart}
            total={this.state.total}
          />
        </div>
      </div>
    )
  }
}

export default HomePage