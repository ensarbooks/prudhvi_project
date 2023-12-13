// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Counter from './containers/Counter';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
