import type { Image } from "sanity";
import {
  SpecificProductQuery,
  categoriesQuery,
  newProductsQuery,
  pageSectionQuery,
  productsByGenderQuery,
  productsBySearchValueQuery,
  productsQuery
} from "./sanity.queries";
import { ICategory } from "@/types/category";
import { createClient } from "next-sanity";
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

export const getProducts = async (
  gender: string,
  category: string
): Promise<IListProduct[]> => {
  const data = await client.fetch(productsQuery, {
    gender,
    category
  });

  return data;
};

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

export const getProductsByGender = async (
  gender: string
): Promise<IListProduct[]> => {
  const data = await client.fetch(productsByGenderQuery, {
    gender
  });

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

export const getProductsBySearchValue = async (
  searchValue: string | undefined
): Promise<IListProduct[]> => {
  const data = await client.fetch(productsBySearchValueQuery, {
    searchValue
  });
  return data;
};
