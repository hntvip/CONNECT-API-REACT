import * as Type from './../constants/actionsType'
import callApi from '../utils/apiCaller'

export const actFetchProductRequest = () => {
  return (dispatch) => {
    return callApi('products',null, 'GET').then(res => {
      dispatch(actFetchProducts(res.data))
    })
  }
}

export const actFetchProducts = (products) => {
  return {
    type : Type.FETCH_PRODUCT,
    products
  }
}

export const addProducts = (product) => {
  return {
    type : Type.ADD_PRODUCT,
    product
  }
}

export const updateProduct = (product) => {
  return {
    type : Type.UPDATE_PRODUCT,
    product
  }
}

export const deleteProducts = (id) => {
  return {
    type : Type.DELETE_PRODUCT,
    id
  }
}
