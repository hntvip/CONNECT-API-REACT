var initialState = [
  {
    id: 1,
    name: 'Iphone 1',
    price: 100,
    status: true
  },{
    id: 2,
    name: 'Samsung Note 8',
    price: 300,
    status: false
  },
  {
    id: 1,
    name: 'Iphone 11',
    price: 1000,
    status: true
  },
  {
    id: 1,
    name: 'Nokia 300',
    price: 100,
    status: true
  }
];

const products = (state = initialState, action) => {
    
    switch (action.type) {
      default:
        return [...state]
    }
}

export default products;