import { createAsyncThunk } from "@reduxjs/toolkit";


// Define the base URL for the API
const API_BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

// Action to fetch exchange rates
export const fetchExchangeRates = createAsyncThunk(
    "currency/fetchExchangeRates",
    async (baseCurrency = "USD", { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}${baseCurrency}`);
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates");
            }

            const data = await response.json();
            return data.rates;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export default {
    fetchExchangeRates,
};


