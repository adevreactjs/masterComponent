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
        state.isOpenRegistrationForm = action.payload
      //   const filterCart = state.pizzasData.filter(piz => piz.id === action.payload);
      //   state.pizza = filterCart;
    },
    // addToCartItem: (state, action) => {
    //   let addPizza = state.pizzasData.filter(item => {
    //     return item.id === action.payload;
    //   });
    //   state.cartItems.push(...addPizza);
    // },
    // removeCartItem: (state, action) => {
    //   state.cartItems = action.payload;
    // },
    // addToCartWithOptions: (state, action) => {
    //   state.cartItems.push(...action.payload);
    // },
  },
});

export const { openRegistrationFormHandler } = registrationForm.actions;

export default registrationForm.reducer;
