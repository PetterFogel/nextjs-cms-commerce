import { getRelatedProducts } from "@/lib/sanity.client";
import ProductGrid from "../product-grid/ProductGrid";

interface Props {
  productId: string;
  category: string;
}

const RelatedProducts = async ({ productId, category }: Props) => {
  const products = await getRelatedProducts(productId, category);

  return <ProductGrid title="Related Products" products={products} />;
};

export default RelatedProducts;
