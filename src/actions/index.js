import * as Types from './../constants/actionsType'
import callApi from '../utils/apiCaller'

export const actFetchProductRequest = () => {
  return (dispatch) => {
    return callApi('products', null, 'GET').then(res => {
      dispatch(actFetchProducts(res.data))
    })
  }
}

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, null, 'DELETE').then(res => {
      dispatch(actDeleteProduct(id))
    })
  }
}

export const actFetchProducts = (products) => {
  return {
    type : Types.FETCH_PRODUCT,
    products
  }
}

export const actDeleteProduct = (id) => {
  return {
    type : Types.DELETE_PRODUCT,
    id
  }
}

export const addProducts = (product) => {
  return {
    type : Types.ADD_PRODUCT,
    product
  }
}

export const updateProduct = (product) => {
  return {
    type : Types.UPDATE_PRODUCT,
    product
  }
}
