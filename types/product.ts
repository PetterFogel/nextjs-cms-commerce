export interface IListProduct {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ISpecificProduct {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  gender: string;
  category: string;
}
