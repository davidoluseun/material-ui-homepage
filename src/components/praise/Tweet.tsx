import { Box, Text, Link, Image, Icon, useColorMode } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

type Props = {
  profile: string;
  name: string;
  username: string;
  text1: string;
  text2?: string;
  href?: string;
};

const Tweet = ({ profile, name, username, text1, text2, href }: Props) => {
  const { colorMode } = useColorMode();

  let tweetHoverBg: string;
  let tweetFocusBg: string;

  if (colorMode === "light") {
    tweetHoverBg = "#f6f6f6";
    tweetFocusBg = "#e5e5e5";
  } else {
    tweetHoverBg = "#515151";
    tweetFocusBg = "#585858";
  }

  return (
    <Box
      p="2"
      flexBasis={{ base: "100%", lg: "33.3333%33" }}
      maxW={{ base: "100%", lg: "33.3333%33" }}
    >
      <Link
        h="100%"
        d="inline-block"
        borderRadius="8px"
        border={
          colorMode === "light"
            ? "1px solid rgba(0, 0, 0, .12)"
            : "1px solid rgba(255, 255, 255, .12);"
        }
        bg={colorMode === "light" ? "#fff" : "#424242"}
        _hover={{ textDecor: "none", bg: tweetHoverBg }}
        _focus={{ bg: tweetFocusBg }}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <Box as="span" d="block" p="4">
          <Box d="flex">
            <Box as="span" p="4px">
              <Image
                src={profile}
                htmlWidth="48"
                htmlHeight="48"
                borderRadius="full"
              />
            </Box>

            <Box as="span" p="4px">
              <Box
                as="span"
                d="block"
                fontSize="16px"
                lineHeight="1.6"
                fontWeight="medium"
                letterSpacing=".0075em"
                color={colorMode === "light" ? "rgba(0, 0, 0, .87)" : "#fff"}
              >
                {name}
              </Box>
              <Box
                as="span"
                d="block"
                textAlign="left"
                color={
                  colorMode === "light"
                    ? "rgba(0, 0, 0, .54)"
                    : "rgba(255, 255, 255, .7)"
                }
                lineHeight="1.57"
                fontSize=" .875rem"
                fontWeight="medium"
                letterSpacing=".00714em"
              >
                {username}
              </Box>
            </Box>
            <Box as="span" ml="auto">
              <Icon
                as={FaTwitter}
                boxSize="24px"
                color={colorMode === "light" ? "blue" : "rgb(166, 212, 250)"}
              />
            </Box>
          </Box>
        </Box>
        <Box as="span" d="block" p="4" pt="0" textAlign="left">
          <Text>
            {text2 ? (
              <>
                {text1}
                <Text
                  as="em"
                  fontStyle="normal"
                  color={colorMode === "light" ? "blue" : "#90caf9"}
                >
                  {" "}
                  @MaterialUI{" "}
                </Text>
                {text2}
              </>
            ) : (
              <>{text1}</>
            )}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default Tweet;
