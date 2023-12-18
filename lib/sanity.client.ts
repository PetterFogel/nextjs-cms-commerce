import type { Image } from "sanity";
import {
  SpecificProductQuery,
  categoriesQuery,
  newProductsQuery,
  pageSectionQuery
} from "./sanity.queries";
import { ICategory } from "@/types/category";
import { createClient, groq } from "next-sanity";
import { IPageSection } from "@/types/pageSection";
import { IListProduct, ISpecificProduct } from "@/types/product";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-12",
  useCdn: false
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source: Image) => imageBuilder.image(source);

export const getSpecificProduct = async (
  slug: string
): Promise<ISpecificProduct> => {
  const data = await client.fetch(SpecificProductQuery, { slug });
  return data;
};

export const getNewProducts = async (): Promise<IListProduct[]> => {
  const data = client.fetch(newProductsQuery);
  return data;
};

export const getProducts = async (
  sortKey: string,
  sortValue: string,
  gender?: string,
  category?: string,
  searchValue?: string
): Promise<IListProduct[]> => {
  const productType = `_type == "product"`;
  const genderType = gender ? `&& gender->url == "${gender}"` : "";
  const categoryFilter = category ? `&& category->url == "${category}"` : "";
  const orderSort = `| order(${sortKey} ${sortValue})`;
  const searchFilter = searchValue ? `&& name match "${searchValue}"` : "";

  const filter = `*[${productType} ${genderType} ${categoryFilter} ${searchFilter}] ${orderSort}`;
  const data = await client.fetch(groq`${filter} {
    "id": _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`);

  return data;
};

export const getPageSection = async (
  section: string
): Promise<IPageSection> => {
  const data = await client.fetch(pageSectionQuery, {
    section
  });

  return data;
};

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await client.fetch(categoriesQuery);
  return data;
};
