import { Metadata } from "next";
import { getProductsByGender } from "@/lib/sanity.client";
import ProductGrid from "@/components/product-grid/ProductGrid";

interface Props {
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

const GenderPage = async ({ params }: Props) => {
  const products = await getProductsByGender(params.gender);
  return (
    <section className="mb-12">
      <ProductGrid products={products} />
    </section>
  );
};

export default GenderPage;
