'use client';

import { createSlice } from '@reduxjs/toolkit';

interface RegistrationForm {
  isOpenRegistrationForm: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: RegistrationForm = {
  isOpenRegistrationForm: false,
  isLoading: false,
  error: '',
};

export const registrationForm = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    openRegistrationFormHandler: (state, action) => {
      state.isOpenRegistrationForm = action.payload;
    },
  },
});

export const { openRegistrationFormHandler } = registrationForm.actions;

export default registrationForm.reducer;
