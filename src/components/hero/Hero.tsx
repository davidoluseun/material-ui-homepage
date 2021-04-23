import {
  Flex,
  Box,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Highlight from "../highlight/Highlight";
import Testimony from "../testimony/Testimony";
import GetSupport from "../support/GetSupport";
import CustomLinkButton from "../common/CustomLinkButton";
import MaterialUILogo from "../../images/logo_raw.svg";

const Hero = () => {
  const { colorMode } = useColorMode();

  let btnHoverBg: string;
  let btnHoverBorder: string;

  if (colorMode === "light") {
    btnHoverBg = "rgba(25, 118, 210, .04)";
    btnHoverBorder = "1px solid #1976d2";
  } else {
    btnHoverBg = "rgba(144, 202, 249, .08)";
    btnHoverBorder = "1px solid #90caf9";
  }

  return (
    <Box as="section">
      <Flex
        align="center"
        mx={{ lg: "auto" }}
        maxW={{ lg: "960px" }}
        px={{ base: 4, md: 6 }}
        pt={{ base: 8, lg: 32 }}
        pb={{ base: 16, lg: 32 }}
        color={colorMode === "light" ? "blue" : "#90caf9"}
        direction={{ base: "column", lg: "row" }}
      >
        <Image
          mb="4"
          mr={{ lg: "16" }}
          w={{ base: "120px", lg: "195px" }}
          h={{ base: "120px", lg: "175px" }}
          src={MaterialUILogo}
        />
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Heading
            as="h1"
            mb=".35em"
            fontWeight="light"
            whiteSpace="nowrap"
            textTransform="uppercase"
            fontSize={{ base: "28px", md: "3rem" }}
            letterSpacing={{ base: ".2rem", sm: ".7rem" }}
          >
            Material - ui
          </Heading>
          <Text
            fontWeight="normal"
            lineHeight="1.334"
            letterSpacing="0em"
            fontSize={{ base: "1.25rem", sm: "1.5rem" }}
          >
            React components for faster and easier web development. Build your
            own design system, or start with Material Design.
          </Text>

          <CustomLinkButton
            mt="8"
            _hover={{ bg: btnHoverBg, border: btnHoverBorder }}
            border={
              colorMode === "light"
                ? "1px solid rgba(25, 118, 210, .5)"
                : "1px solid rgba(144, 202, 249,  .5)"
            }
            color={colorMode === "light" ? "blue" : "#90caf9"}
            href="https://material-ui.com/getting-started/installation/"
          >
            Get Started
          </CustomLinkButton>
        </Box>
      </Flex>
      <Highlight />
      <GetSupport />
      <Testimony />
    </Box>
  );
};

export default Hero;
