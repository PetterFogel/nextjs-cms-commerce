import { urlFor } from "@/lib/sanity";
import { getNewProducts, getPageSection } from "@/lib/sanity.queries";
import ProductGrid from "@/components/product-grid/ProductGrid";
import Image from "next/image";

const HomePage = async () => {
  const section = await getPageSection("Hero");
  const products = await getNewProducts();

  return (
    <section className="mb-12 space-y-12">
      <section className="flex w-full flex-col gap-4 bg-orange-700 md:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-4 p-4 lg:gap-8 lg:p-12">
          <h1 className="text-xl font-semibold lg:text-3xl">{section.title}</h1>
          <p className="text-sm lg:text-xl">{section.subtitle}</p>
        </div>
        <div className="w-3/4 self-end lg:w-2/5">
          {section.imageUrl && (
            <Image
              src={urlFor(section.imageUrl).url()}
              alt={section.title}
              className="h-auto w-full object-center"
              height={300}
              width={300}
              priority
            />
          )}
        </div>
      </section>
      <ProductGrid title="Latest Products" products={products} />
    </section>
  );
};

export default HomePage;
