'use client';

import { createSlice } from '@reduxjs/toolkit';

interface MobileFilter {
  isOpenMobileFilter: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: MobileFilter = {
  isOpenMobileFilter: false,
  isLoading: false,
  error: '',
};

export const mobileFilter = createSlice({
  name: 'mobileFilter',
  initialState,
  reducers: {
    openMobileFilterHandler: (state, action) => {
      state.isOpenMobileFilter = action.payload;
    },
  },
});

export const { openMobileFilterHandler } = mobileFilter.actions;

export default mobileFilter.reducer;
