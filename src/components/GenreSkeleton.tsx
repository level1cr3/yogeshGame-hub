import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle size="32px" />
      <SkeletonText width="100%" noOfLines={1} skeletonHeight={4} />
    </HStack>
  );
};

export default GenreSkeleton;
