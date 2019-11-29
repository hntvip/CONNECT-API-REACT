import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    var { product , index } = this.props;
    var statusName = product.status ? 'Con Hang' : 'Het Hang';
    var statusClass = product.status ? 'deault' : 'warning';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success">SUA</button>
          <button type="button" className="btn btn-danger ml-10">XOA</button>
        </td>
      </tr>
    )
  }
}
