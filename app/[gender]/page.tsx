import ProductGrid from "@/components/product-grid/ProductGrid";
import { getProductsByGender } from "@/lib/sanity.queries";
import React from "react";

interface Props {
  params: { gender: string };
}

const GenderPage = async ({ params }: Props) => {
  const products = await getProductsByGender(params.gender);
  return (
    <section className="mb-12 mt-8">
      <ProductGrid products={products} />
    </section>
  );
};

export default GenderPage;
