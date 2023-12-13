import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});

export default props => {
  const [productsList, setProductsList] = useState([
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
  ]);

  const toggleFavorite = productId => {
    setProductsList(currentProdList => {
      const prodIndex = currentProdList.findIndex(p => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};