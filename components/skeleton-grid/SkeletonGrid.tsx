import { Skeleton } from "../ui/skeleton";

interface Props {
  itemsLength: number;
}

const SkeletonGrid = ({ itemsLength }: Props) => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 px-4 md:grid-cols-3 lg:grid-cols-4">
      {Array(itemsLength)
        .fill(0)
        .map((_, idx) => (
          <div key={idx}>
            <Skeleton className="h-[200px] w-full sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[400px]" />
          </div>
        ))}
    </div>
  );
};

export default SkeletonGrid;
