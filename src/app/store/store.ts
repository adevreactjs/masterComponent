'use client';

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/RegistrationSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
