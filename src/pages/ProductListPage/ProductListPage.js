import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom'
class ProductListPage extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    callApi('products',null, 'get').then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  render() {
    var { products } = this.props;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="product/add"className="btn btn-info mt-10">Them San Pham</Link>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
      </div>
    )
  }
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
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,null)(ProductListPage)