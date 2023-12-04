import { Image } from "sanity";

export interface IListProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
}

export interface ISpecificProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  sizes: string[];
  images: Image[];
  gender: string;
  category: string;
  description: string;
}
