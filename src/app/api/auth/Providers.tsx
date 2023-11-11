'use client'
import React, { FC, ReactNode } from 'react'
import {SessionProvider } from 'next-auth/react'

interface Props {
  children: ReactNode
}

export const ProvidersAuth: FC<Props> = props => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
