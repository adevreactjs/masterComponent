'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '@/types/type';

interface ProductItems {
  products: Product[];
}
const initialState: ProductItems = {
  products: [],
};

export const productItems = createSlice({
  name: 'ProductItems',
  initialState,
  reducers: {
    loadData: (state, action) => {
      state.products = action.payload;
    },
    chooseProduct: (state, action) => {
      state.products = state.products.filter(item => item.id === action.payload);
    },
  },
});

export const { loadData, chooseProduct } = productItems.actions;

export default productItems.reducer;
