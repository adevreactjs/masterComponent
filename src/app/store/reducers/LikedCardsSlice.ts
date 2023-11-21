'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RegistrationForm {
    likedObjs: string[],
    stylesObj: string[]
  }
  
const initialState: RegistrationForm = {
    likedObjs: [],
    stylesObj: []
};

export const LikedCards = createSlice({
    name: 'likedCards',
    initialState,
    reducers: {
      pushElement: (state, action: PayloadAction<string>) => {
          state.likedObjs.push(...state.likedObjs, action.payload)
          console.log(state.likedObjs)
      },
      pushStyles: (state, action: PayloadAction<string>) => {
        state.stylesObj.push(...state.stylesObj, action.payload)
      }
    },
});

export const { pushElement } = LikedCards.actions;

export default LikedCards.reducer;