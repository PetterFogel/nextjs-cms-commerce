import { getCategories } from "@/lib/sanity.queries";
import React from "react";
import FilterPanel from "./FilterPanel";

const ProductsActionPanel = async () => {
  const categories = await getCategories();

  return (
    <div className="p-4">
      <FilterPanel categories={categories} />
    </div>
  );
};

export default ProductsActionPanel;
