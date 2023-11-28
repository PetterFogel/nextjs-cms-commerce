import { IListProduct } from "@/types/product";
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
