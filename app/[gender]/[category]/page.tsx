import { client } from "@/lib/sanity";

interface Props {
  params: {
    gender: string;
    category: string;
  };
}

const CategoryPage = async ({ params: { gender, category } }: Props) => {
  const query = `*[_type == "product" &&  gender->url == "${gender}" && category->url == "${category}"] {
    _id,
    name,
    "slug": slug.current,
    "category": category->label,
    "gender": gender->label
}
  `;
  const products = await client.fetch(query);

  console.log(gender, category);
  console.log(products);

  return <div>CategoryPage</div>;
};

export default CategoryPage;
