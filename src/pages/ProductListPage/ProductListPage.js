import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'

export default class ProductListPage extends Component {
  showProducts = (products) => {
    var result = null;
    if (products.length){
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}></ProductItem>
        )
      });
    }

    return result;
  }
  render() {
    var products = [];
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button type="button" className="btn btn-info mt-10">
            Them San Pham
          </button>
          
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
      </div>
    )
  }
}
