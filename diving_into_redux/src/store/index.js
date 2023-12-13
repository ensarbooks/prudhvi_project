// In store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    // other reducers if you have them
  },
});

export default store;
