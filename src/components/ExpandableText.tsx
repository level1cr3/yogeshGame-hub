import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  maxChar: number;
  children: string;
};

const ExpandableText = ({ maxChar, children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChar) return <Text>{children}</Text>;

  const summary = expanded ? children : `${children.substring(0, maxChar)}...`;

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
