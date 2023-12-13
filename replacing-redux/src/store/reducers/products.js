import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Fcuk Watch',
      description: 'White Strap Watch.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'Wrogn blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Holiday Sneakers',
      description: 'A Collection Fron Puma.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'One8 Cap',
      description: 'Stylish Cap from One*.',
      isFavorite: false
    }
  ]
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        p => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productReducer;