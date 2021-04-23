import {
  Box,
  Link,
  Heading,
  Icon,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";

const Usage = () => {
  const { colorMode } = useColorMode();
  let btnHoverBg: string;

  if (colorMode === "light") btnHoverBg = "rgba(0, 0, 0, .04)";
  else btnHoverBg = "rgba(255, 255, 255, .08)";

  return (
    <Box
      as="section"
      borderTopWidth="12px"
      borderBottomWidth="0"
      p={{ base: "4", md: "6" }}
      maxW={{ base: "100%", lg: "50%" }}
      flexBasis={{ base: "100%", lg: "50%" }}
      borderLeftWidth={{ base: "0", lg: "6px" }}
      borderRightWidth={{ base: "0", lg: "12px" }}
      bg={colorMode === "light" ? "#f5f5f5" : "#333"}
      borderColor={colorMode === "light" ? "#fff" : "dark"}
    >
      <Box d="flex" mb="6">
        <Icon
          mr="4"
          as={MdBuild}
          boxSize="30px"
          color={colorMode === "light" ? "blue" : "#90caf9"}
        />
        <Heading
          as="h2"
          fontSize="1.24rem"
          fontWeight="medium"
          lineHeight="1.5"
          letterSpacing=".0075em"
        >
          Usage
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
          Material-UI components work without any additional setup, and don't
          pollute the global scope.
        </Box>

        <Box>
          <Box
            as="pre"
            my="2"
            p="4"
            overflow="auto"
            borderRadius="4px"
            bg="#272c34"
            maxWidth="calc(100vw - 32px)"
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
              <Box as="span">
                <Box as="span" color="#66d9ef">
                  import
                </Box>
                <Box as="span"> </Box>
                <Box as="span">React</Box>
                <Box as="span"> </Box>
                <Box as="span" color="#66d9ef">
                  from
                </Box>
                <Box as="span"> </Box>
                <Box as="span" color="#a6e22e">
                  'react'
                </Box>
                <Box as="span" color="#f8f8f2">
                  ;
                </Box>
                <Box>
                  <Box as="span" color="#66d9ef">
                    import
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#f8f8f2">
                    &#123;
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span">Button</Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#f8f8f2">
                    &#125;
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#a6e22e">
                    '@material-ui/core'
                  </Box>
                  <Box as="span" color="#f8f8f2">
                    ;
                  </Box>
                </Box>
                <Box>
                  <br />
                  <Box as="span" color="#66d9ef">
                    function
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#e6db74">
                    App
                  </Box>
                  <Box as="span" color="#f8f8f2">
                    &#40;
                  </Box>
                  <Box as="span" color="#f8f8f2">
                    &#41;
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#f8f8f2">
                    &#123;
                  </Box>
                </Box>
                <Box>
                  <Box as="span"> </Box>
                  <Box as="span"> </Box>
                  <Box as="span" color="#66d9ef">
                    return
                  </Box>
                  <Box as="span"> </Box>
                  <Box as="span">
                    <Box as="span" color="#f8f8f2">
                      &lt;
                    </Box>
                    <Box as="span" color="#e6db74">
                      Button
                    </Box>
                    <Box as="span"> </Box>
                    <Box as="span" color="#a6e22e">
                      color
                    </Box>
                    <Box as="span" color="#f8f8f2">
                      ="
                    </Box>
                    <Box as="span" color="#e6db74">
                      primary
                    </Box>
                    <Box as="span" color="#f8f8f2">
                      "&gt;
                    </Box>
                  </Box>
                  Hello World
                  <Box as="span">
                    <Box as="span" color="#f8f8f2">
                      &lt;/
                    </Box>
                    <Box as="span" color="#e6db74">
                      Button
                    </Box>
                    <Box as="span" color="#f8f8f2">
                      "&gt;
                    </Box>
                    <Box as="span" color="#f8f8f2">
                      ;
                    </Box>
                  </Box>
                </Box>
                <Box as="span" color="#f8f8f2">
                  &#125;
                </Box>
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
        Explore The Docs
      </Link>
    </Box>
  );
};

export default Usage;
