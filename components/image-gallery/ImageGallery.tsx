"use client";

import { urlFor } from "@/lib/sanity.client";
import { useState } from "react";
import { Image as SanityImage } from "sanity";
import Image from "next/image";

interface Props {
  images: SanityImage[];
  productName: string;
}

const ImageGallery = ({ images, productName }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSmallImageClick = (image: SanityImage) => setSelectedImage(image);

  return (
    <div className="grid gap-4 lg:grid-cols-6">
      <div className="order-last grid grid-cols-4 gap-4 px-4 lg:order-none lg:flex lg:flex-col lg:px-0">
        {images.map((image, idx) => (
          <div key={idx}>
            <Image
              className="h-full w-full cursor-pointer object-cover object-center"
              onClick={() => handleSmallImageClick(image)}
              src={urlFor(image).url()}
              alt={productName}
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
      <div className="col-span-6 lg:col-span-5">
        <Image
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          src={urlFor(selectedImage).url()}
          alt={productName}
          height={500}
          width={400}
          priority
        />
      </div>
    </div>
  );
};

export default ImageGallery;
