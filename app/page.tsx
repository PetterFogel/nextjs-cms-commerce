import ProductGrid from "@/components/product-grid/ProductGrid";
import { getNewProducts } from "@/lib/sanity.queries";

const HomePage = async () => {
  const products = await getNewProducts();
  return (
    <section className="mb-12">
      <h1>Home page</h1>
      <ProductGrid title="Latest Products" products={products} />
    </section>
  );
};

export default HomePage;
