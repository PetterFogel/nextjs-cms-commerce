import { getProducts } from "@/lib/sanity.client";
import { findSortItemHandler } from "@/lib/utils";
import ProductGrid from "@/components/product-grid/ProductGrid";

interface Props {
  searchParams: { q: string; sort: string };
}

export const metadata = {
  title: "Search",
  description: "Search for products in the store."
};

const SearchPage = async ({ searchParams }: Props) => {
  const { sort, q: searchValue } = searchParams;
  const { sortKey, sortValue } = findSortItemHandler(sort);

  const products = await getProducts(
    sortKey,
    sortValue,
    undefined,
    undefined,
    searchValue
  );

  return (
    <section>
      {products.length === 0 ? (
        <div className="px-4 lg:px-12 lg:py-4">
          <p>No results found for: &quot;{searchValue}&quot;</p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </section>
  );
};

export default SearchPage;
