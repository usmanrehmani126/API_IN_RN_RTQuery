import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import { getApiCall } from "./RTQueryAPIFolder/GetApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    [getApiCall.reducerPath]: getApiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiCall.middleware),
});
setupListeners(store.dispatch)