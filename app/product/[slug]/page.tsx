import { getSpecificProduct } from "@/lib/sanity.queries";

interface Props {
  params: { slug: string };
}

const ProductPage = async ({ params }: Props) => {
  const product = await getSpecificProduct(params.slug);
  console.log(product);
  return <div>ProductPage</div>;
};

export default ProductPage;
