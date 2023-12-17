import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity.client";
import { IPageSection } from "@/types/pageSection";
import Image from "next/image";

interface Props {
  section: IPageSection;
  bgColor: string;
}

const PageSection = ({ section, bgColor }: Props) => {
  return (
    <section
      className={cn(
        `flex w-full flex-col gap-4 md:flex-row`,
        bgColor === "orange" ? "bg-orange" : "bg-ice"
      )}
    >
      <div className="flex w-full flex-col items-start justify-start gap-4 p-4 lg:gap-8 lg:p-12">
        <h1 className="text-xl font-semibold lg:text-2xl">{section.title}</h1>
        <p className="text-sm lg:text-lg">{section.subtitle}</p>
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
  );
};

export default PageSection;
