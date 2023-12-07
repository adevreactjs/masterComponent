import { StaticImageData } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

export interface Products {
  products: Product[];
}

export interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  bonus: number;
  property: Propers[];
}

export interface Propers {
  proc: string;
  frequency: string;
  memory: string;
  type: string;
}
export interface Message {
  message: string;
  file: string | StaticImport;
  date: string;
  answer?: string;
}

