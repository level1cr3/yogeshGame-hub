import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  // skeleton is placeholder for images, text and other stuff till they are loaded.
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
