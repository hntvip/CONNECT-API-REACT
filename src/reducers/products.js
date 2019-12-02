import * as Types from './../constants/actionsType';
var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      state = action.products
      return [...state]
    case Types.DELETE_PRODUCT:
      return actDeleteProduct(state, action.id)
    case Types.ADD_PRODUCT:
        return actAddProduct(state, action.product)
    default:
      return [...state]
  }
}
const actDeleteProduct = (state, id) => {
  var products = [...state];
  var index = findById(id, products);
  if ( index > -1){
    products.splice(index, 1)
  }
  return products;
}
const actAddProduct = (state, action ) => {
  var products = [...state];
  var product = { action };

  var index = findById(product.id, products );
  if(index === -1){
    products.push(product)
  }

  return products;
}

const findById = (id, list) => {
  var result = -1
  list.forEach((item, ind) => {
    if (id === item.id){
      result = ind
    }
      
  });
  return result;
}
export default products;