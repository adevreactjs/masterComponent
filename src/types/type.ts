import { StaticImageData } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Products {
  products: Product[];
}

export interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  bonus: number;
  property: Propers;
  promotion?: boolean;
}

export interface Propers {
  proc: string;
  frequency: string;
  memory: string;
  type: string;
}
export interface Message {
  id: number;
  message: string;
  file: string | StaticImport;
  date: string;
  answer?: string;
}

