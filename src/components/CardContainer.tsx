import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer = ({ children }: Props) => {
  // box is like a div.
  // we gave width="300px". because the aside grid container was taking 50% and main container was taking 50% as well.
  // which made our card with image. grow and skeleton that didn't have any image shrink. but now that. aside grid
  // container has fixed width of 200px we can remove width 300px from card container.
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default CardContainer;
