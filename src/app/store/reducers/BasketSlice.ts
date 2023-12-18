'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface BasketSlice {
  open: boolean;
}

const initialState: BasketSlice = {
  open: false,
};

export const BasketSlice = createSlice({
  name: 'BasketSlice',
  initialState,
  reducers: {
    changeOpen(state, elem: PayloadAction<boolean>) {
      state.open = elem.payload;
    },
  },
});

export const { changeOpen } = BasketSlice.actions;
export const openClose = (state: RootState) => state.basket.open;
export default BasketSlice.reducer;
