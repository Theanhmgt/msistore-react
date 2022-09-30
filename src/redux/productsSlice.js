import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'done'
            })
    }
})

export const productsFetch = createAsyncThunk("products/productsFetch",
    async () => {
        const res = await fetch('https://msi-data.herokuapp.com/api/data')
        const data = await res.json()
        return data
    }
)

export default productsSlice.reducer