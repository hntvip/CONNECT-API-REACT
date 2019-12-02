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

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products`, product, 'POST').then(res => {
      dispatch(actAddProduct(res.data))
    })
  }
}

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products${product.id}`, product, 'PUT').then(res => {
      dispatch(actUpdateProduct(res.data))
    })
  }
}

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, null, 'GET').then(res => {
      dispatch(actGetProduct(res))
    })
  }
}
export const actFetchProducts = (products) => {
  return {
    type : Types.FETCH_PRODUCT,
    products
  }
}
export const actAddProduct = (product) => {
  return {
    type : Types.ADD_PRODUCT,
    product
  }
}

export const actDeleteProduct = (id) => {
  return {
    type : Types.DELETE_PRODUCT,
    id
  }
}

export const actUpdateProduct = (product) => {
  return {
    type : Types.UPDATE_PRODUCT,
    product
  }
}

export const actGetProduct = (product) => {
  return {
    type : Types.GET_PRODUCT,
    product
  }
}
