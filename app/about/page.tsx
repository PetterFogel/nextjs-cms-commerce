import PageSection from "@/components/page-section/PageSection";
import { getPageSection } from "@/lib/sanity.queries";

const AboutPage = async () => {
  const sectionData = await getPageSection("About");

  return <PageSection section={sectionData} bgColor="sky" />;
};

export default AboutPage;
