'use client';

import { Provider } from 'react-redux';
import React from 'react';
import { store } from '@/app/store/store';

export function Providers({ children }: { children: any }) {
  return <Provider store={store}>{children}</Provider>;
}
