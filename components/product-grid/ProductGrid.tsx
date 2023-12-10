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
    <section className="px-4">
      {title && <h2 className="font-semibold">{title}</h2>}
      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  height={500}
                  width={300}
                  priority
                />
              </div>
              <div className="mt-2 text-xs md:text-sm">
                <h4 className="font-semibold">{product.name}</h4>
                <p>{product.price} SEK</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
