import { getCategories } from "@/lib/sanity.client";
import FilterPanel from "./FilterPanel";
import SortPanel from "./SortPanel";

const ProductsActionPanel = async () => {
  const categories = await getCategories();

  return (
    <div className="flex justify-between p-4">
      <FilterPanel categories={categories} />
      <SortPanel />
    </div>
  );
};

export default ProductsActionPanel;
