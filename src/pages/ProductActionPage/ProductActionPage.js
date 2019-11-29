import React, { Component } from 'react'

class ProductActionPage extends Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="form-group">
            <label>Ten san pham</label>
            <input type="text" className="form-control" placeholder="Input field"/>
          </div>
          <div className="form-group">
            <label>gia</label>
            <input type="number" className="form-control" placeholder="Input field"/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/>
              Status
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Luu</button>
        </form>
      </div>
    )
  }
}

export default ProductActionPage