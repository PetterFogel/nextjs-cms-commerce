import { getNewProducts, getPageSection } from "@/lib/sanity.client";
import ProductGrid from "@/components/product-grid/ProductGrid";
import PageSection from "@/components/page-section/PageSection";

export const revalidate = 30;

const HomePage = async () => {
  const sectionData = await getPageSection("Hero");
  const products = await getNewProducts();

  return (
    <section className="mb-12 space-y-12">
      <PageSection section={sectionData} bgColor={"orange"} />
      <ProductGrid title="Latest Products" products={products} />
    </section>
  );
};

export default HomePage;
