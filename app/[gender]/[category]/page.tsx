import ProductGrid from "@/components/product-grid/ProductGrid";
import { getProducts } from "@/lib/sanity.queries";

interface Props {
  params: {
    gender: string;
    category: string;
  };
}

const CategoryPage = async ({ params: { gender, category } }: Props) => {
  const products = await getProducts(gender, category);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
