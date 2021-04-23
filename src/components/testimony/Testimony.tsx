import { Box, Text, Link, useColorMode } from "@chakra-ui/react";

const Testimony = () => {
  const { colorMode } = useColorMode();

  return (
    <Box pb="4" textAlign="center">
      <Text
        fontSize=".75rem"
        fontWeight="normal"
        letterSpacing=".03333em"
        lineHeight="1.66"
      >
        A quick word from our sponsors:
      </Text>

      <Link
        fontSize=".875rem"
        fontWeight="normal"
        lineHeight="1.43"
        letterSpacing=".01071em"
        color={colorMode === "light" ? "blue" : "#90caf9"}
        href="https://tidelift.com/subscription/pkg/npm-material-ui?utm_source=npm-material-ui&utm_medium=referral&utm_campaign=homepage"
        target="_blank"
        rel="noreferrer"
      >
        DoiT - Management Platform for Google Cloud and AWS
      </Link>
    </Box>
  );
};

export default Testimony;
