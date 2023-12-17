import ProductGrid from "@/components/product-grid/ProductGrid";
import { getProductsBySearchValue } from "@/lib/sanity.queries";

interface Props {
  searchParams: { q: string | undefined };
}

export const metadata = {
  title: "Search",
  description: "Search for products in the store."
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q: searchValue } = searchParams;
  const products = await getProductsBySearchValue(searchValue);

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
