import { getCategories } from "@/lib/sanity.client";
import FilterPanel from "./FilterPanel";
import SortPanel from "./SortPanel";

const ProductsActionPanel = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-col justify-between gap-3 p-4 md:flex-row">
      <FilterPanel categories={categories} />
      <SortPanel />
    </div>
  );
};

export default ProductsActionPanel;
