import { getCategories } from "@/lib/sanity.client";
import FilterPanel from "./FilterPanel";
import React from "react";

const ProductsActionPanel = async () => {
  const categories = await getCategories();

  return (
    <div className="p-4">
      <FilterPanel categories={categories} />
    </div>
  );
};

export default ProductsActionPanel;
