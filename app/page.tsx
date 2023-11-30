import { getNewProducts } from "@/lib/sanity.queries";
import Link from "next/link";

const HomePage = async () => {
  const products = await getNewProducts();
  return (
    <main className="flex p-4">
      <h1>Home page</h1>
      <div>
        {products.map((product, idx) => (
          <div key={idx}>
            <Link href={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
