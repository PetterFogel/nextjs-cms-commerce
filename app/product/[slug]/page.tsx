import { urlFor } from "@/lib/sanity";
import { getSpecificProduct } from "@/lib/sanity.queries";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AddToCartButton from "@/components/add-to-cart-button/AddToCartButton";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

const ProductPage = async ({ params }: Props) => {
  const product = await getSpecificProduct(params.slug);
  console.log(product);

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
      <Image
        src={urlFor(product.images[0]).url()}
        alt={product.name}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        width={300}
        height={500}
      />
      <div className="flex w-full flex-1 flex-col gap-4 p-6 md:p-2.5">
        <h3 className="text-2xl">{product.name}</h3>
        <h3 className="text-xl">{product.price} SEK</h3>
        <div>
          <div className="flex flex-wrap gap-1">
            <ToggleGroup type="single" variant="outline">
              {product.sizes.map((size, idx) => (
                <ToggleGroupItem
                  key={idx}
                  value={size}
                  aria-label="Toggle bold"
                  className="uppercase"
                >
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
        <AddToCartButton />
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
