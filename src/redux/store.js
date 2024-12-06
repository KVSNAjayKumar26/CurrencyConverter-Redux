import { configureStore } from "@reduxjs/toolkit";
import CurrencySlice from './reducers/CurrencySlice'

const store = configureStore({
    reducer: {
        currency: CurrencySlice,
    },
});

export default store;
