import { Box, Flex } from "@chakra-ui/react";
import Installation from "./Installation";
import Usage from "./Usage";

const Code = () => {
  return (
    <Box
      as="section"
      mt="10"
      mx={{ base: 0, xl: "auto" }}
      maxW={{ base: "100%", xl: "1280px" }}
    >
      <Flex direction={{ base: "column", lg: "row" }}>
        <Installation />
        <Usage />
      </Flex>
    </Box>
  );
};

export default Code;
