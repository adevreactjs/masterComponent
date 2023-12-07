'use client';

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/RegistrationSlice';
import LikedCardsReducer from './reducers/LikedCardsSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    pushItem: LikedCardsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
