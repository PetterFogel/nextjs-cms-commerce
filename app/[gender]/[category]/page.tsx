import { getProducts } from "@/lib/sanity.queries";
import Link from "next/link";

interface Props {
  params: {
    gender: string;
    category: string;
  };
}

const CategoryPage = async ({ params: { gender, category } }: Props) => {
  const products = await getProducts(gender, category);

  return (
    <div>
      {products.map((product, idx) => (
        <div key={idx}>
          <Link href={`/product/${product.slug}`}>
            <p>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
