'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
          console.log(state.likedObjs)
      },
      pushStyles: (state, style: PayloadAction<string>) => {
        state.stylesObj.push(style.payload)
      },
      pushID: (state, id: PayloadAction<number>) => {
        state.id.push(id.payload)
        console.log(...state.id)
        state.id = state.id.filter((num, id, massive) => massive.indexOf(num) === id)
        console.log(...state.id)
      },
      deleteID: (state, deleteId: PayloadAction<number>) => {
        state.id = state.id.filter(num => num !== deleteId.payload)
        console.log(...state.id)
      },
    },
});

export const { pushElement, pushStyles, pushID, deleteID } = LikedCards.actions;

export default LikedCards.reducer;