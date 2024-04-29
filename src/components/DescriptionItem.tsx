import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  term: string;
  children: ReactNode;
};

const DescriptionItem = ({ term: heading, children }: Props) => {
  return (
    <Box>
      <Heading fontSize="md" color="gray.600" as="dt">
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DescriptionItem;
