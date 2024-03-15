'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// // interface LikedCards {
// //     likedObjs: string[],
// //     stylesObj: string[],
// //     id: number[],
// //     deleteId: number
// }
  
const initialState: any = {
    goods: [],
    favoriteGoodsIds: JSON.parse(localStorage.getItem('favoriteGoodsIds')) || []
};

export const GoodsCards = createSlice({
    name: 'goodsCards',
    initialState,
    reducers: {
      setGoods: (state, action) => {
        state.goods = action.payload
      },
      addFavoriteGoods: (state, action) => {
        const id = action.payload
        if(!state.favoriteGoodsIds.includes(id)){
          state.favoriteGoodsIds.push(id)
        } else {
          state.favoriteGoodsIds = state.favoriteGoodsIds.filter((ids: any) => ids !== id)
        }

        localStorage.setItem('favoriteGoodsIds', JSON.stringify(state.favoriteGoodsIds))
      }
    },
});

export const { setGoods, addFavoriteGoods } = GoodsCards.actions;
export const massiveID = (state: RootState) => state.pushItem.id
export default GoodsCards.reducer;