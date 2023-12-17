import groq from "groq";

export const productsQuery = groq`*[_type == "product" &&  gender->url == $gender && category->url == $category] {
    "id": _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
}`;

export const SpecificProductQuery = groq`*[_type == "product" && slug.current == $slug][0] {
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

export const newProductsQuery = groq`*[_type == "product"][0...4] | order(_createdAt desc) {
    "id": _id,
    name,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

export const productsByGenderQuery = groq`*[_type == "product" &&  gender->url == $gender] {
  "id": _id,
  name,
  price,
  "slug": slug.current,
  "imageUrl": images[0].asset->url
}`;

export const pageSectionQuery = groq`*[_type == "pageSection" && name == $section][0] {
  "id": _id,
  title,
  subtitle,
  "imageUrl": image.asset->url
}`;

export const categoriesQuery = groq`*[_type == "category"] {
  "id": _id,
  label,
  url
}`;

export const productsBySearchValueQuery = groq`*[_type == "product" && name match $searchValue] {
  "id": _id,
  name,
  price,
  "slug": slug.current,
  "imageUrl": images[0].asset->url
}`;
