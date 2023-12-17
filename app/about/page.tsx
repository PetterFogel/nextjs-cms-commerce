import { Metadata } from "next";
import { getPageSection } from "@/lib/sanity.client";
import PageSection from "@/components/page-section/PageSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Born in the heart of Sweden, our clothing brand intertwines minimalist design and sustainable craftsmanship, echoing the beauty of Nordic simplicity."
};

const AboutPage = async () => {
  const sectionData = await getPageSection("About");

  return <PageSection section={sectionData} bgColor="sky" />;
};

export default AboutPage;
