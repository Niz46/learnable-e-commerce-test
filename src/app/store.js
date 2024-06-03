import { configureStore } from '@reduxjs/toolkit';
import slideReducer from "../features/apiSlice"
import usersReducer from '../features/usersSlice';
import productsReducer from '../features/productsSlice';
import { productsApi } from "../features/productApi"; 
import cartReducer from '../features/cartSlice';
import wishlistReducer from "../features/wishListSlice";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        slider: slideReducer,
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;