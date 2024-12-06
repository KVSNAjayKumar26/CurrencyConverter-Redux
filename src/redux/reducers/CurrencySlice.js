import { createSlice } from "@reduxjs/toolkit";
import { fetchExchangeRates } from "../actions/currencyAction";


const currencySlice = createSlice({
    name: "currency",
    initialState: {
        rates: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchExchangeRates.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchExchangeRates.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.rates = action.payload;
        })
        .addCase(fetchExchangeRates.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
    },
});

export default currencySlice.reducer;
export { fetchExchangeRates };