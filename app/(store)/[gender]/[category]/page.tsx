import { Metadata } from "next";
import { getProducts } from "@/lib/sanity.client";
import { findSortItemHandler } from "@/lib/utils";
import ProductGrid from "@/components/product-grid/ProductGrid";

export const revalidate = 30;

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
      {products.length === 0 ? (
        <div className="px-4 lg:px-12 lg:py-4">
          <p>Products of {category} are out of stock.</p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default CategoryPage;
