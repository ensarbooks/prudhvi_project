import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts };
    }
  };
  initStore(actions, {
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
  });
};

export default configureStore;