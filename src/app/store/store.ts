'use client';

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/RegistrationSlice';
import LikedCardsReducer from './reducers/LikedCardsSlice';
import amountComments from './reducers/amountComments';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    pushItem: LikedCardsReducer,
    amount:  amountComments,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
