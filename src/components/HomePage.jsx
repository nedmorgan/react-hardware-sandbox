import React, { Component } from 'react'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true
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
      </div>
    )
  }
}

export default HomePage