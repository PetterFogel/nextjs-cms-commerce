import type { Image } from "sanity";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-11-27",
  useCdn: true
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source: Image) => imageBuilder.image(source);
