'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LikedCards {
    amountComents: number,
}
  
const initialState: LikedCards = {
    amountComents: 2,
};

export const AmountComments = createSlice({
    name: 'amountComments',
    initialState,
    reducers: {
      increaseAmount: (state, elem: PayloadAction<number>) => {
        state.amountComents = elem.payload
      }
    },
});

export const { increaseAmount } = AmountComments.actions;
export const amountCom = (state:RootState) => state.amount.amountComents
export default AmountComments.reducer;