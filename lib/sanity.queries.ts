import { client } from "./sanity";
import { ICategory } from "@/types/category";
import { IPageSection } from "@/types/pageSection";
import { IListProduct, ISpecificProduct } from "@/types/product";
import groq from "groq";

const productsQuery = groq`*[_type == "product" &&  gender->url == $gender && category->url == $category] {
    "id": _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
}`;

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

const SpecificProductQuery = groq`*[_type == "product" && slug.current == $slug][0] {
    "id": _id,
    name,
    price,
    sizes,
    images,
    price_id,
    description,
    "gender": gender->label,
    "category": category->label,
  }`;

export const getSpecificProduct = async (
  slug: string
): Promise<ISpecificProduct> => {
  const data = await client.fetch(SpecificProductQuery, { slug });
  console.log("DATA", data);

  return data;
};

const newProductsQuery = groq`*[_type == "product"][0...4] | order(_createdAt desc) {
    "id": _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

export const getNewProducts = async (): Promise<IListProduct[]> => {
  const data = client.fetch(newProductsQuery);
  return data;
};

const productsByGenderQuery = groq`*[_type == "product" &&  gender->url == $gender] {
  "id": _id,
  name,
  price,
  "slug": slug.current,
  "imageUrl": images[0].asset->url
}`;

export const getProductsByGender = async (
  gender: string
): Promise<IListProduct[]> => {
  const data = await client.fetch(productsByGenderQuery, {
    gender
  });

  return data;
};

const pageSectionQuery = groq`*[_type == "pageSection" && name == $section][0] {
  "id": _id,
  title,
  subtitle,
  "imageUrl": image.asset->url
}`;

export const getPageSection = async (
  section: string
): Promise<IPageSection> => {
  const data = await client.fetch(pageSectionQuery, {
    section
  });

  return data;
};

const categoriesQuery = groq`*[_type == "category"] {
  "id": _id,
  label,
  url
}`;

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await client.fetch(categoriesQuery);
  return data;
};
