/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ProductItem extends Component {

  onDelete = (id) =>{
    /*eslint no-alert: "error"*/
    if(confirm('Do you want to delete this product?')){ //eslint-disable-line
      this.props.onDelete(id)
    }
  }
  
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
          <Link to={`/product/${product.id}/edit`}>SUA</Link>
          <button type="button" className="btn btn-danger ml-10" onClick={ ()=> { this.onDelete(product.id) } }>XOA</button>
        </td>
      </tr>
    )
  }
}
