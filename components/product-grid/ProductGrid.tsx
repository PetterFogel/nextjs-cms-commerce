import { IListProduct } from "@/types/product";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title?: string;
  products: IListProduct[];
}

const ProductGrid: FC<Props> = ({ title, products }) => {
  return (
    <section className="px-4 lg:px-12">
      {title && <h2 className="font-semibold">{title}</h2>}
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={500}
                />
              </div>
              <div className="mt-2 flex flex-col justify-between md:flex-row">
                <div>
                  <h4 className="text-xs md:text-sm">{product.name}</h4>
                </div>
                <p className="text-xs md:text-sm">{product.price} SEK</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
