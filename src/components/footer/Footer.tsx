import { Box, Divider, useColorMode } from "@chakra-ui/react";
import MainFooter from "./MainFooter";
import FooterNote from "./FooterNote";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" mt="12">
      <Divider
        opacity=".12"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />

      <Box
        px={{ base: "4", md: "6" }}
        py={{ base: "6", md: "16" }}
        mx={{ base: "0", lg: "auto" }}
        maxW={{ base: "100%", lg: "960px" }}
      >
        <MainFooter />
        <FooterNote />
      </Box>
    </Box>
  );
};

export default Footer;
