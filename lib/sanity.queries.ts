import { IListProduct, ISpecificProduct } from "@/types/product";
import { client } from "./sanity";

export const getProducts = async (
  gender: string,
  category: string
): Promise<IListProduct[]> => {
  const query = `*[_type == "product" &&  gender->url == "${gender}" && category->url == "${category}"] {
        _id,
        name,
        "slug": slug.current,
        "category": category->label,
        "gender": gender->label
    }`;
  const data = await client.fetch(query);
  return data;
};

export const getSpecificProduct = async (
  slug: string
): Promise<ISpecificProduct> => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    name,
    price,
    images,
    description,
    "gender": gender->label,
    "category": category->label,
  }`;

  const data = await client.fetch(query);

  return data;
};
