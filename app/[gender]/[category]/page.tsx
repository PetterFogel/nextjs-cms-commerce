import { Metadata } from "next";
import { getProducts } from "@/lib/sanity.queries";
import ProductGrid from "@/components/product-grid/ProductGrid";

interface Props {
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

const CategoryPage = async ({ params: { gender, category } }: Props) => {
  const products = await getProducts(gender, category);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
