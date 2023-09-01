import SkeletonItem from "./SkeletonItem";

const SkeletonComponent: React.FC = () => {
  const numberOfSkeletons = 5;
  return (
    <div>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default SkeletonComponent;
