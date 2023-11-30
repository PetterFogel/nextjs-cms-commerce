export interface IListProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  imageUrl: string;
}

export interface ISpecificProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  sizes: string[];
  images: string[];
  gender: string;
  category: string;
  description: string;
}
