import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import CustomLinkButton from "../common/CustomLinkButton";
import ThemesDark from "../../images/themes/themes_dark.jpg";
import ThemesLight from "../../images/themes/themes_light.jpg";

const Themes = () => {
  const { colorMode } = useColorMode();

  let btnHoverBg: string;

  if (colorMode === "light") btnHoverBg = "rgba(0, 0, 0, .04)";
  else btnHoverBg = "rgba(255, 255, 255, .08)";

  return (
    <Box as="section" textAlign="center" mt="16" p="4">
      <Box
        px={{ base: "4", md: "6" }}
        mx={{ base: "0", lg: "auto" }}
        maxW={{ base: "100%", lg: "960px" }}
      >
        <Heading
          as="h2"
          mb=".35em"
          fontSize="2.125rem"
          fontWeight="normal"
          lineHeight="1.235"
          letterSpacing=".00735em"
        >
          Premium themes
        </Heading>
        <Text
          mb=".35em"
          fontSize="1rem"
          lineHeight="1.5"
          fontWeight="normal"
          letterSpacing=".00938em"
        >
          Take your project to the next level with premium themes from our store
          – all built on Material-UI.
        </Text>
        <Link
          d="block"
          mt="2"
          href="https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=home-store"
        >
          <Image
            mt="8"
            maxW="960px"
            w="100%"
            h="auto"
            htmlWidth="mediumpx"
            htmlHeight="307px"
            src={colorMode === "light" ? ThemesLight : ThemesDark}
          />
        </Link>

        <CustomLinkButton
          mb="12"
          mt="8"
          _hover={{ bg: btnHoverBg }}
          border={
            colorMode === "light"
              ? "1px solid rgba(0, 0, 0, .23)"
              : "1px solid rgba(255, 255, 255, .23)"
          }
          href="https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=home-store"
        >
          Browse Themes
        </CustomLinkButton>
      </Box>
    </Box>
  );
};

export default Themes;
