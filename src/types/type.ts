import { StaticImageData } from 'next/image';

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
