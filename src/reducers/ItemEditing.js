import * as Types from "./../constants/actionsType"

const initTialState = {}

const product = (state = initTialState, action) => {
  switch ( action.type ) {
    case Types.GET_PRODUCT:
      return action.product
    default:
      return [...state]
  }
}

export default product;
