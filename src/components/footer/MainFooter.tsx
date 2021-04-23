import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  Badge,
  useColorMode,
} from "@chakra-ui/react";
import MaterialUILogo from "../../images/logo_raw.svg";

const MainFooter = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex justify="space-between" flexWrap="wrap">
      <Flex as="section" mb="8" flexBasis={{ base: "100%", md: "25%" }}>
        <Heading as="h3">
          <Image width="28px" height="22px" mr="3" src={MaterialUILogo} />
        </Heading>
        <Link
          borderRadius="sm"
          alignSelf="flex-start"
          href="https://material-ui.com/"
        >
          Material-UI
        </Link>
      </Flex>

      <Box
        as="section"
        mb="8"
        flexBasis={{ base: "50%", md: "25%" }}
        maxWidth={{ base: "50%", md: "25%" }}
      >
        <Heading
          as="h3"
          mb=".35em"
          fontSize="1rem"
          fontWeight="normal"
          lineHeight="1.5"
          letterSpacing=".00938em"
        >
          Community
        </Heading>
        <Flex direction="column" align="flex-start">
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://github.com/mui-org/material-ui"
          >
            GitHub
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://twitter.com/MaterialUI"
          >
            Twitter
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://stackoverflow.com/questions/tagged/material-ui"
          >
            StackOverflow
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://material-ui.com/discover-more/team/"
          >
            Team
          </Link>
        </Flex>
      </Box>

      <Box
        as="section"
        mb="8"
        flexBasis={{ base: "50%", md: "25%" }}
        maxWidth={{ base: "50%", md: "25%" }}
      >
        <Heading
          as="h3"
          mb=".35em"
          fontSize="1rem"
          fontWeight="normal"
          lineHeight="1.5"
          letterSpacing=".00938em"
        >
          Resources
        </Heading>
        <Flex direction="column" align="flex-start">
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://material-ui.com/getting-started/support/"
          >
            Support
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://medium.com/material-ui/"
          >
            Blog
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://material-ui.com/components/material-icons/"
          >
            Material Icons
          </Link>
        </Flex>
      </Box>

      <Box
        as="section"
        mb="8"
        flexBasis={{ base: "50%", md: "25%" }}
        maxWidth={{ base: "50%", md: "25%" }}
      >
        <Heading
          as="h3"
          mb=".35em"
          fontSize="1rem"
          fontWeight="normal"
          lineHeight="1.5"
          letterSpacing=".00938em"
        >
          Company
        </Heading>
        <Flex direction="column" align="flex-start">
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://material-ui.com/company/contact/"
          >
            About
          </Link>
          <Link
            py="1.5"
            borderRadius="sm"
            color={
              colorMode === "light"
                ? "rgba(0, 0, 0, .54)"
                : "rgba(255, 255, 255, .7)"
            }
            href="https://material-ui.com/company/contact/"
          >
            Contact Us
          </Link>
          <Box>
            <Link
              py="1.5"
              borderRadius="sm"
              color={
                colorMode === "light"
                  ? "rgba(0, 0, 0, .54)"
                  : "rgba(255, 255, 255, .7)"
              }
              href="https://material-ui.com/company/careers/"
            >
              Careers
            </Link>
            <Link
              ml="6px"
              py="1.5"
              borderRadius="sm"
              _hover={{ textDecor: "none" }}
              href="https://material-ui.com/company/careers/"
            >
              <Badge
                py="1px"
                px="3px"
                color="#fff"
                fontSize="10px"
                fontWeight="semibold"
                lineHeight="1.3"
                borderRadius="3px"
                letterSpacing=".5px"
                textTransform="uppercase"
                bg="rgb(235, 87, 87)"
              >
                Hiring
              </Badge>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainFooter;
