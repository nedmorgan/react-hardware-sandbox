import React, { Component } from 'react';

class AdminView extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        {/* {show our products here} */}
        <h2>Create a New Product</h2>
        {/* {create a product form goes here} */}
      </div>
    )
  }
}

export default AdminView