import { StaticImageData } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Products {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  code: number;
  available: boolean;
  promotion: boolean;
  image: string;
  price: string;
  sale: string;
  bonus: string;
  category: string;
  property: Property;
}

interface Property {
  proc: string;
  type: string;
  memory: string;
  frequency: string;
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

