import { Text, Link, useColorMode } from "@chakra-ui/react";

const FooterNote = () => {
  const { colorMode } = useColorMode();

  return (
    <Text
      mt="6"
      fontSize=".875rem"
      fontWeight="normal"
      lineHeight="1.43"
      letterSpacing=" .01071em"
      color={
        colorMode === "light" ? "rgba(0, 0, 0, .54)" : "rgba(255, 255, 255, .7)"
      }
    >
      Currently{" "}
      <Link borderRadius="sm" href="https://material-ui.com/versions/">
        v4.11.1
      </Link>
      . Released under the{" "}
      <Link
        borderRadius="sm"
        href="https://github.com/mui-org/material-ui/blob/master/LICENSE"
      >
        MIT License
      </Link>
      . Copyright &copy; 2021 Material-UI.
    </Text>
  );
};

export default FooterNote;
