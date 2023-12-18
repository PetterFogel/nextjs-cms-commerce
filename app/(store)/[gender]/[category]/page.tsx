import { Metadata } from "next";
import { getProducts } from "@/lib/sanity.client";
import { findSortItemHandler } from "@/lib/utils";
import ProductGrid from "@/components/product-grid/ProductGrid";

interface Props {
  searchParams: { sort: string };
  params: {
    gender: string;
    category: string;
  };
}

export const generateMetadata = async ({
  params: { gender, category }
}: Props): Promise<Metadata> => {
  const title = gender === "men" ? "Men" : "Women";
  return {
    title: `${title}'s ${category}`,
    description: `Explore stylish, high-quality ${title}'s ${category} designed for enduring grace and seamless style.`
  };
};

const CategoryPage = async ({
  searchParams: { sort },
  params: { gender, category }
}: Props) => {
  const { sortKey, sortValue } = findSortItemHandler(sort);
  const products = await getProducts(sortKey, sortValue, gender, category);
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
