// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alertSlice'; // Adjust path
import authReducer from './features/authSlice'; // Adjust path as needed
import cartReducer from './features/cartSlice';
import loginFirstReducer from './features/loginFirstSlice'; // Adjust path
import { productApi } from './services/productApi';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    
    authSlice: authReducer, // The key MUST be 'authSlice' if you use state.authSlice
    loginFirst: loginFirstReducer, // Fixes: cannot read 'isOpen'
    alert: alertReducer,           // Fixes: cannot read 'isAlert'
    cartSlice: cartReducer, 
   
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
