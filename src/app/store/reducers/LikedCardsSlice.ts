'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LikedCards {
    likedObjs: string[],
    stylesObj: string[],
    id: number[],
    deleteId: number
}
  
const initialState: LikedCards = {
    likedObjs: [],
    stylesObj: [],
    id: [],
    deleteId: 0
};

export const LikedCards = createSlice({
    name: 'likedCards',
    initialState,
    reducers: {
      pushElement: (state, elem: PayloadAction<string>) => {
          state.likedObjs.push(elem.payload)
      },
      pushStyles: (state, style: PayloadAction<string>) => {
        state.stylesObj.push(style.payload)
      },
      pushID: (state, id: PayloadAction<number>) => {
        state.id.push(id.payload)
        state.id = state.id.filter((num, id, massive) => massive.indexOf(num) === id)
      },
      deleteID: (state, deleteId: PayloadAction<number>) => {
        state.id = state.id.filter(num => num !== deleteId.payload)
      },
    },
});

export const { pushElement, pushStyles, pushID, deleteID } = LikedCards.actions;
export const massiveID = (state: RootState) => state.pushItem.id
export default LikedCards.reducer;