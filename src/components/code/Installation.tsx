import {
  Box,
  Link,
  Heading,
  Icon,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";

const Installation = () => {
  const { colorMode } = useColorMode();

  let btnHoverBg: string;

  if (colorMode === "light") btnHoverBg = "rgba(0, 0, 0, .04)";
  else btnHoverBg = "rgba(255, 255, 255, .08)";

  return (
    <Box
      as="section"
      borderTopWidth="12px"
      p={{ base: "4", md: "6" }}
      maxW={{ base: "100%", lg: "50%" }}
      flexBasis={{ base: "100%", lg: "50%" }}
      borderLeftWidth={{ base: "0", lg: "12px" }}
      borderRightWidth={{ base: "0", lg: "6px" }}
      borderBottomWidth={{ base: "12px", lg: "0" }}
      bg={colorMode === "light" ? "#f5f5f5" : "#333"}
      borderColor={colorMode === "light" ? "#fff" : "dark"}
    >
      <Box d="flex" mb="6">
        <Icon
          mr="4"
          boxSize="30px"
          as={MdFileDownload}
          color={colorMode === "light" ? "blue" : "#90caf9"}
        />
        <Heading
          as="h2"
          fontSize="1.24rem"
          fontWeight="medium"
          lineHeight="1.5"
          letterSpacing=".0075em"
        >
          Installation
        </Heading>
      </Box>
      <Box minH="270px">
        <Box
          mb=".35em"
          fontSize="1rem"
          fontWeight="normal"
          lineHeight="1.75"
          letterSpacing=".00939em"
        >
          Install Material-UI's source files via npm. We take care of injecting
          the CSS needed.
        </Box>
        <Box>
          <Box
            as="pre"
            my="2"
            p="4"
            overflow="auto"
            borderRadius="4px"
            bg="#272c34"
            maxW="calc(100vw - 32px)"
          >
            <Box
              as="code"
              d="inline-block"
              bg="#272c34"
              fontSize=".9em"
              px="3px"
              color=" #fff"
              lineHeight="1.5"
            >
              $ npm install @material-ui/core
            </Box>
          </Box>
        </Box>
        <Box
          fontSize="1rem"
          fontWeight="400"
          lineHeight="1.75"
          letterSpacing=".00938em"
        >
          <Link
            mb=".35em"
            d="inline-block"
            href="https://github.com/mui-org/material-ui/tree/master/examples/cdn"
            target="_blank"
            rel="noreferrer"
          >
            or use a CDN.
          </Link>
          <Box mb=".35em">Load the default Roboto font.</Box>
        </Box>
        <Box>
          <Box
            as="pre"
            my="2"
            p="4"
            overflow="auto"
            borderRadius="4px"
            bg="#272c34"
            maxW="calc(100vw - 32px)"
          >
            <Box
              as="code"
              d="inline-block"
              bg="#272c34"
              fontSize=".9em"
              px="3px"
              color=" #fff"
              lineHeight="1.5"
            >
              <Box as="span" color="rgb(252, 146, 158)">
                <Box as="span" color="#f8f8f2">
                  &lt;
                </Box>
                <Box as="span">link</Box>
                <Box as="span"> </Box>
              </Box>
              <Box as="span" color="#a6e22e">
                rel
              </Box>
              <Box as="span" color="#e6db74">
                <Box as="span" color="#f8f8f2">
                  ="
                </Box>
                <Box as="span">stylesheet</Box>
                <Box as="span" color="#f8f8f2">
                  "
                </Box>
                <Box as="span"> </Box>
                <Box as="span" color="#a6e22e">
                  href
                </Box>
              </Box>
              <Box as="span" color="#e6db74">
                <Box as="span" color="#f8f8f2">
                  ="
                </Box>
                <Box as="span">
                  https://fonts.googleapis.com/css?family=Roboto:300,400,medium,700&display=swap
                </Box>
                <Box as="span" color="#f8f8f2">
                  "
                </Box>
              </Box>
              <Box as="span"> </Box>
              <Box as="span" color="#f8f8f2">
                /&gt;
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider
        mt="8"
        mb="4"
        opacity=".12"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />

      <Link
        px="2"
        py="6px"
        minW="64px"
        fontSize=".875rem"
        fontWeight="medium"
        lineHeight="1.75"
        borderRadius="4px"
        letterSpacing=".02857em"
        color={colorMode === "light" ? "rgba(0, 0, 0, .87)" : "#fff"}
        transition="background 250ms cubic-bezier(.4, 0, .2, 1) 0ms, box-shadow 250ms cubic-bezier(.4, 0, .2, 1) 0ms, border 250ms cubic-bezier(.4, 0, .2, 1) 0ms"
        href="https://material-ui.com/getting-started/installation/"
        textTransform="uppercase"
        _hover={{ bg: btnHoverBg }}
      >
        Read Installation Docs
      </Link>
    </Box>
  );
};

export default Installation;
