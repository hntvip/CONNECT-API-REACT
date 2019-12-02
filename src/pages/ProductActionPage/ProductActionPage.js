import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddProductRequest, actUpdateProductRequest, actGetProductRequest } from '../../actions'
class ProductActionPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      txtName:'Abc',
      txtPrice:'',
      checkStatus: true
    }
  } 
  componentDidMount() {
    var { match } = this.props;
    if( match ) {
      var id = match.params.id;
      this.props.getProduct(id);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    var { history } = this.props;
    var { id , txtName, txtPrice, checkStatus } = this.state;

    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      checkStatus: checkStatus
    }

    if(id){
      this.props.updateProduct(product);
      history.goBack();
    } else { 
      this.props.addProduct(product);
      history.goBack();
    } 
  }
  onChange = (e) => {
    var target = e.target;
    
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    var { txtName, txtPrice, checkStatus } = this.state;

    return (
      <div className="row">
        <form onSubmit={this.onSubmit} name="productForm">
          <div className="form-group">
            <label>Ten san pham</label>
            <input type="text" className="form-control" placeholder="Name" name="txtName" value={txtName} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Gia</label>
            <input type="number" className="form-control" placeholder="Price" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"  name="checkStatus" value={checkStatus} onChange={this.onChange}/> Con Hang
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Luu</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProduct: (id) => {
      dispatch(actGetProductRequest(id))
    },
    addProduct: (product) => {
      dispatch(actAddProductRequest(product))
    },
    updateProduct: (product) => {
      dispatch(actUpdateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)