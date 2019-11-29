import React, { Component } from 'react'
import ApiCaller from '../../utils/apiCaller'
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
  onSubmit = (e) => {
    e.preventDefault();

    ApiCaller('prodcuct','POST', {
      'name': this.state.name,
      'value': this.state.value,
      'checkStatus': this.state.checkStatus
    }).then((res) => {
      console.log(res)
    })
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
        <form onSubmit={this.onSubmit}>
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
              <input type="checkbox"  name="checkStatus" value={checkStatus} onChange={this.onChange}/> 
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Luu</button>
        </form>
      </div>
    )
  }
}

export default ProductActionPage