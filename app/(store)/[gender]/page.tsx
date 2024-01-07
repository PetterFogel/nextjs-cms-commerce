import { Metadata } from "next";
import { getProducts } from "@/lib/sanity.client";
import { findSortItemHandler } from "@/lib/utils";
import ProductGrid from "@/components/product-grid/ProductGrid";

export const revalidate = 30;

interface Props {
  searchParams: { sort: string };
  params: { gender: string };
}

export const generateMetadata = async ({
  params: { gender }
}: Props): Promise<Metadata> => {
  const title = gender === "men" ? "Menswear" : "Womenswear";
  return {
    title,
    description: `Explore stylish, high-quality ${title} designed for enduring grace and seamless style.`
  };
};

const GenderPage = async ({
  searchParams: { sort },
  params: { gender }
}: Props) => {
  const { sortKey, sortValue } = findSortItemHandler(sort);
  const products = await getProducts(sortKey, sortValue, gender);

  return (
    <section className="mb-12">
      <ProductGrid products={products} />
    </section>
  );
};

export default GenderPage;
