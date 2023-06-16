import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProductApi = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  return result;
});
const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
