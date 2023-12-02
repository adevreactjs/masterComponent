'use client';
import avatarIcon from '@/assets/avatar.svg';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { StaticImageData } from 'next/image';

interface commentUser {
  id: number;  
  image: StaticImageData;
  name: string;
  comment: string;
  date: string;
  marginRight: number;
}


  
const initialState: commentUser = {
  id: NaN,
  name: '',
  image: avatarIcon,
  comment: '',
  date: '',
  marginRight: 0,
};

export const AnswerParent = createSlice({
    name: 'AnswerParent',
    initialState,
    reducers: {
      addObject: (state, object: PayloadAction<commentUser>) => {
        state.id = object.payload.id,
        state.name = object.payload.name,
        state.image = object.payload.image,
        state.comment = object.payload.comment,
        state.date = object.payload.date,
        state.marginRight = object.payload.marginRight
      }
    },
});

export const { addObject } = AnswerParent.actions;

export default AnswerParent.reducer;