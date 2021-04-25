const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const id = action.payload.id;
      const newItems = {
        ...state.items,
        [id]: !state.items[id]
          ? [action.payload]
          : [...state.items[id], action.payload],
      };
      const pizzasArr = [].concat.apply([], Object.values(newItems));
      const totalCount = pizzasArr.length;
      const totalPrice = pizzasArr.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    default:
      return state;
  }
};

export default cart;
