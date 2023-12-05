import { IListProduct, ISpecificProduct } from "@/types/product";
import { client } from "./sanity";
import groq from "groq";
import { IPageSection } from "@/types/pageSection";

const productsQuery = `*[_type == "product" &&  gender->url == $gender && category->url == $category] {
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
    description,
    "gender": gender->label,
    "category": category->label,
  }`;

export const getSpecificProduct = async (
  slug: string
): Promise<ISpecificProduct> => {
  const data = await client.fetch(SpecificProductQuery, { slug });

  return data;
};

const newProductsQuery = `*[_type == "product"][0...4] | order(_createdAt desc) {
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

const productsByGenderQuery = `*[_type == "product" &&  gender->url == $gender] {
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

const pageSectionQuery = `*[_type == "pageSection" && name == $section][0] {
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
