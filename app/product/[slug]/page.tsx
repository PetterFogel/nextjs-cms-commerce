import { Metadata } from "next";
import { getSpecificProduct } from "@/lib/sanity.client";
import AddToCartButton from "@/components/add-to-cart-button/AddToCartButton";
import ImageGallery from "@/components/image-gallery/ImageGallery";

interface Props {
  params: { slug: string };
}

export const generateMetadata = async ({
  params: { slug }
}: Props): Promise<Metadata> => {
  const product = await getSpecificProduct(slug);

  return {
    title: product.name,
    description: product.description
  };
};

const ProductPage = async ({ params }: Props) => {
  const product = await getSpecificProduct(params.slug);

  return (
    <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4">
      <ImageGallery productName={product.name} images={product.images} />
      <div className="flex w-full flex-1 flex-col gap-4 p-2.5">
        <h3 className="text-2xl">{product.name}</h3>
        <h3 className="text-xl">{product.price} SEK</h3>
        <AddToCartButton product={product} />
        <hr className="my-0" />
        <div>
          <p className="mb-0.5 text-sm font-semibold">Product description</p>
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
